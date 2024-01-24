import React, { useState } from 'react'

const FAQ = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div>
      <div onClick={handleClick} className={`FAQQuestion ${open ? 'open' : ''}`}>
        <h3 >{props.question}</h3>
        <h1>{">"}</h1>
      </div>
      <div className={`FAQAnswer ${open ? 'open' : ''}`}>
        <h4>{props.answer}</h4>
      </div>
      <hr />
    </div>
  )
}

export default FAQ