import React from 'react'
import '../styles/modal.css'

const Modal = props => {
  return (
    <div>
      <div className='Modal'>
        { props.children }
        <button
          className="Modal-close"
          onClick={ props.handleClick }
        />
      </div>
      <div className="Modal-fadebox">&nbsp;</div>
    </div>
  )
}

export default Modal