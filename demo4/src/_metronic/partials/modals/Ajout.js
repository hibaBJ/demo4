import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Ajout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> + Ajouter</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/*<Modal.Title>Nouveau Salarié</Modal.Title>*/}
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajout'action="Pointage">
                  
                  <div className="mb-10">
                    <label className="required form-label">Employé</label>
                    <input
                      type="text"
                      className="form-control"

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Nombre d'heures</label>
                    <input
                      type="text"
                      className="form-control"

                    />
                  </div>
                </form>
                </div>
        </Modal.Body>
        {/*modal footer*/ }
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button className="btn btn-primary" form='ajout'>Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Ajout;