import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AjoutRole(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Employee: '',
    Role: '',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleRoleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const confirmNewRole=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> + Ajouter</button>
     
      <Modal show={show}onHide={handleClose}backdrop="static"keyboard={false}>
        <Modal.Header closeButton>
         <h3>Ajouter role</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
                <form  id='ajout'action="Role">
                  
                  <div className="mb-10">
                    <label >Employé</label>
                    <input  className="form-control" type="text"   
                    id ="employee"
                    required="required" 
                    value={formValue.Employee}
                    placeholder="saisir le nom"
                    name="Employee"
                    onChange={handleRoleInputChange}
                    />
                  </div>
                  <div className="mb-10">
                    <label>Role</label>
                    <input className="form-control" type="text" 
                    id="role"
                    required="required" 
                    placeholder="saisir le role" 
                    name="Role"
                    value={formValue.Role}
                    onChange={handleRoleInputChange}
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
          <button className="btn btn-primary" 
            
            onClick={confirmNewRole}>Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutRole;