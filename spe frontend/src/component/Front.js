import React, { useState } from 'react';
import Modal from 'react-modal';
import AddParcel from './AddParcel';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '320px',
      width: '50%',
    },
  };
  
const Front = () => {
    const[isModalOpen , setModalOpen] = useState(true);
    const modalOpen = () => {
        setModalOpen(true);
    }
    const modalClose = () => {
        setModalOpen(false);
    }
    return(
    <div>
      <marquee>Welcome to IIIT Bangalore Parcel Ease</marquee>
        <h1>IIIT Bangalore Parcel Ease</h1>
        <button onClick={setModalOpen}>Parcel Entry</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Example Modal">
            <AddParcel/>
        </Modal>
    </div>
    );
}
export default Front;