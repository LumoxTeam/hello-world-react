import React, { Component } from 'react'
import HomeLayout from '../components/Home';
import API from '../../utils/api'


class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      page: 1
    }
  }

  async componentDidMount() {
    const { page } = this.state    
    const people = await API.getPeopleList(page)
    this.setState({
      people
    })
  }

  render() {
    const { people, page } = this.state
    return (
      <HomeLayout 
        data={ people }
      />
    )
  }
}

export default Home