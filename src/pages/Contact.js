import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

Modal.setAppElement('#root')
export default function Contact() {
  const [ModalisOpen, setModalisOpen] = useState(false)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="contact-page">
      <h1 className="head-contact">If you have any questions, just use the form below</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
     <h2>Contact</h2>

      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("category")} className="select">
        <option value="">Select...</option>
        <option value="Chelsea">Chelsea</option>
        <option value="Fc Women">Fc Women</option>
      </select>

      <button type="submit" className="contact-btn">Send</button>
    </form>
    <button onClick={() => setModalisOpen(true)} className="fact-btn">Fun Fact</button>
        <Modal isOpen={ModalisOpen} onRequestClose={() => setModalisOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: 'white',
              },
              content: {
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '3px',
                width: '700px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
                

              }
            }
          }>
          <h2>Chelsea Fun Facts</h2>
          <p>Chelsea once played a Premier League game wearing the oppositions away kit.. Yikes!</p>
          <div>
            <button onClick={() => setModalisOpen(false)}>Close</button>
          </div>
        </Modal>
    </div>
  );
}


