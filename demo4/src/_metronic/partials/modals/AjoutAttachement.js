import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutAttachement(props) {


  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Employee: '',
    Attachement: '',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleAttachementInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

  }

  const confirmNewAttachement=()=>{
    const formData = new FormData();
 
    // Update the formData object
    formData.append(
        "myFile",
        selectedFile,
        selectedFile.name
    );
    formValue.Attachement=selectedFile.name

    props.getSaveEvent(formData,formValue)
    

    setShow(false)
   }

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Ajouter </button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutattachement'action="Attachements">
                  <div className="mb-10">
                    <label className="">Employé</label>
                    <input
                      type="text"
                      className="form-control"
                      id='employee'
                      name='Employee'
                      onChange={handleAttachementInputChange}
                      value={formValue.Employee}
                    />
                  </div>
                   {/*<div className="mb-10">
                    <label className="required form-label">Attachements</label>*/}
                     <div className='mb-10'>
                    <label className=''>Attachements</label>
                    <input type="file" className='form-control'
                    onChange={handleFileChange}
                    ></input>
                    
                  </div>
                  
                </form>
                </div>
        </Modal.Body>
    
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button  className="btn btn-primary"
          onClick={confirmNewAttachement}>Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutAttachement;