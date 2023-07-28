import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function EditEmployee(props){
    console.log(props.item);
    
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  
  const handleShow = () => setShow(true);

  const[Role,setRole]=useState(props.role);
  const[Id,setId]=useState(props.id);
  const [employee,setEmployee]=useState(props.employee);
  const [type,setType]=useState(props.type)

  
    const [formValue, setFormValue] = useState({
        id:Id,
        Employee: employee,
        Role: Role,
        Type:type,
        cbCreateur:props.item.cbCreateur,
        cbMarq:props.item.cbMarq,
        cbModificateur:props.item.cbModificateur
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
const editRole=(prRole,prflag)=>{
   let  RoleNewReference=[...Role];//creation de copie de  nouveau objet
   const index=RoleNewReference.findIndex((item)=>item.name == prRole.name);
   RoleNewReference[index].isEditing=prflag;
   setRole(RoleNewReference);
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
                    <label >Employé</label>
                    <input  className="form-control" type="text"   
                    id ="employee"
                    required="required" 
                    placeholder="saisir le nom"
                    value={formValue.Employee}
                    name="Employee"
                    onChange={handleRoleInputChange}/>
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
             onClick={passConfirmUpdate}
           >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditEmployee;