import React, { Component } from 'react'

import HomeLayout from '../components/Home'
import PeopleList from '../components/PeopleList'
import PeopleDetail from '../components/PeopleDetail'

import Portal from './Portal'
import Modal from '../components/Modal'

import API from '../../utils/api'


class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      page: 1,
      modal: false,
      currentPeople: []
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)

  }

  handleCloseModal(event) {
    this.setState({
      modal: false
    })
  }

  handleOpenModal(people) {
    this.setState({
      modal: true,
      currentPeople: people
    })
  }

  async componentDidMount() {
    const { page } = this.state
    const people = await API.getPeopleList(page)
    this.setState({
      people
    })
    
  }

  render() {
    const { people, page, modal, currentPeople } = this.state
    return (
      <HomeLayout>
        <PeopleList 
          data={ people }
          handleOpenModal={ this.handleOpenModal }
        />
        {
          modal && 
            <Portal>
              <Modal 
                handleClick = { this.handleCloseModal }
              >
                <PeopleDetail 
                  people={ currentPeople }
                />
              </Modal>
            </Portal>
        }
      </HomeLayout>
    )
  }
}

export default Home