import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Name: '',
    Role: '',
    Email:'',
    Telephone:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleEmployeeInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const confirmNewEmployee=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }

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
          <Modal.Title>Ajouter un  Employee</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <div className='modal-body'>
                   <form  id='ajoutemp'action="Employee">
                  <div className="mb-10">
                    <label className="required form-label">Nom Complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id='name'
                      name='Name'
                      value={formValue.Name}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Télèphone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id='telephone'
                      name='Telephone'
                      onChange={handleEmployeeInputChange}
                      value={formValue.Telephone}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      id='role'
                      name='Role'
                      value={formValue.Role}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Email société</label>
                    <input
                      type="email"
                      className="form-control"
                      id='email'
                      name='Email'
                      value={formValue.Email}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                 
                 
                </form>
                </div>
         
        </Modal.Body>
                 

    
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button  className="btn btn-primary"
          onClick={confirmNewEmployee}
          >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjEmployee;