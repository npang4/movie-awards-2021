import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./Ballot.css";
import 'bootstrap/dist/css/bootstrap.css';

const Ballot = () => {

  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/getBallotData`)
      .then(response => {
        return response.json();
      })
      .then(actualData => {
        console.log(actualData);
        setData(actualData);
      })
      .catch(e => {
        console.log(e);
      })
  })



  const customStyles = {
    content: {
      top: '40%',
      left: '35%',
      right: 'auto',
      bottom: 'auto',

    }
  }


  return (
    <div className='ballot'>
      {data.items?.map((item) => (
        <div className='ballot-info'>
          <h1 className='nominee-title'>{item.title}</h1>
          {item.items.map((insideItem) => (
            <div id='movie-info' >

              <h3>{insideItem.title}</h3>
              <img src={insideItem.photoUrL} />
              <input id={insideItem.id} class="form-check-input" type="checkbox" name="option1"></input>
            </div>
          ))}
        </div>
      ))}

      <button id='submit-button' onClick={() => setIsOpen(true)} > Submit Votes!</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <div>
          <h2 style={{ fontFamily: 'Helvetica' }}> Your votes have been submitted!</h2>
        </div>

      </Modal>


    </div>
  )
}


export default Ballot;