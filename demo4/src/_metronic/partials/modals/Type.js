import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Type() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 


  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> +Type </button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         <Modal.Title>Ajouter </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajouttype'action="Conges">
                  <div className="mb-10">
                  <label >Employé</label>
                    <input  className="form-control" type="text"  ></input>
                  </div>
                  <div className="mb-10">
                    <label className="">Type</label>
                    <select className="form-select form-select-white"  
                  aria-label="Select example">
                    Type de Congés
                  <option>séléctionner un type </option>
                  <option  > Annuaire </option>
                  <option  >  Maladie </option>
                  <option >  Repos</option>
                  </select>
                  </div>
                 
                </form>
                </div>
        </Modal.Body>
        {/*modal footer*/ }
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button className="btn btn-primary" 
          >
            Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Type;