import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutEmploye() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Ajouter un employé</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un employé</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutattachement'action="Attachements">
                <div class="row">
                    <div class="col">
                     <input type="text" class="form-control" placeholder="Prénom"/>
                    </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nom"/>
                </div>
            </div>
            <div class="row">
                    <div class="col">
                     <input type="email" class="form-control" placeholder="Email Personnel"/>
                    </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Email de Société"/>
                </div>
            </div>
            <div class="row">
                    <div class="col">
                     <input type="text" class="form-control" placeholder="Pays"/>
                    </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Ville"/>
                </div>
            </div>
            <div class="row">
                    <div class="col">
                     <input type="tel" class="form-control" placeholder="Téléphone"/>
                    </div>
               
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
export default AjoutEmploye;