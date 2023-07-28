import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Nouveau</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un  Profil</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <div className='modal-body'>
                   <form  id='ajoutsalarie'action="Paiement">
                  <div className="mb-10">
                    <label className="required form-label">Nom Complet</label>
                    <input
                      type="text"
                      className="form-control"

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Télèphone</label>
                    <input
                      type="tel"
                      className="form-control"

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">CIN</label>
                    <input
                      type="number"
                      className="form-control"

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Poste</label>
                    <input
                      type="text"
                      className="form-control"

                    />
                  </div>
                  <div className='mb-10'>
                    <label className=''>Salaire</label>
                    <input type="number" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Num CNSS</label>
                    <input type="number" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Email Personnel</label>
                    <input type="email" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Email de Société</label>
                    <input type="email" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Projet</label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Taches</label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='mb-10'>
                    <label className=''>Attachemens</label>
                    <input type="file" className='form-control'></input>
                  </div>
                 
                </form>
                </div>
         
        </Modal.Body>
                 

        
    
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button  className="btn btn-primary"form='ajoutattachement'>Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutProfile;