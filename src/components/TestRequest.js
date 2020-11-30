import React, { useState } from 'react'
import CommonService from '../services/common.service.js'

const TestRequest = () => {
  const [ message, setMessage ] = useState('')

  const requestTestMessage = () => {
    CommonService.getTestMessage()
      .then(response => {
        console.log(response.data);
        setMessage(response.data.message)
      })
      .catch(e => {
        console.log('error occuredd', e);
      })
  }
  
  return (
    <>
      <h4>Server Response: {message ? message : 'No data.'}</h4>
      <button
        className="btn btn-success"
        onClick={requestTestMessage}
      >
        Request
      </button>
    </>
    
  )
}

export default TestRequest;