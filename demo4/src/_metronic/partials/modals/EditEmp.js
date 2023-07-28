import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function EditEmp(props){
    console.log(props.item);
    
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  
  const handleShow = () => setShow(true);

  const[Role,setRole]=useState(props.role);
  const[Id,setId]=useState(props.id);
  const [Name,setName]=useState(props.name);
  const [Telephone,setTelephone]=useState(props.telephone);
  const[Email,setEmail]=useState(props.email);
  const[employee,setEmployee]=useState(props.employee);


  
    const [formValue, setFormValue] = useState({
        id:Id,
        Name: Name,
        Role: Role,
        Telephone:Telephone,
        Email:Email,
   
        cbCreateur:props.item.cbCreateur,
        cbMarq:props.item.cbMarq,
        cbModificateur:props.item.cbModificateur
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
const editEmployee=(prEmployee,prflag)=>{
   let  EmployeeNewReference=[...Name];//creation de copie de  nouveau objet
   const index=EmployeeNewReference.findIndex((item)=>item.name == prEmployee.name);
   EmployeeNewReference[index].isEditing=prflag;
   setName(EmployeeNewReference);
 }

 const passConfirmUpdate = () => {
  props.confirmUpdate(formValue)
  setShow(false)
 }



  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Modifier</button>
     
      <Modal show={show} onHide={handleClose}backdrop="static"keyboard={false}>
        <Modal.Header closeButton>
         <h3>Modifier</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
                <form id='editemployee'action="Role">
                  
                <div className="mb-10">
                    <label className="required form-label">Nom Complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="Name"
                      value={formValue.Name}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Télèphone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      name="Telephone"
                      value={formValue.Telephone}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      name="Role"
                      value={formValue.Role}
                      onChange={handleEmployeeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="required form-label">Email société</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="Email"
                      onChange={handleEmployeeInputChange}
                      value={formValue.Email}
                      

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
             onClick={passConfirmUpdate}
           >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditEmp;