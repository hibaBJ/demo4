import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import axios from "axios";

function EditAttachement(props){
    console.log(props.item);
    
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  
  const handleShow = () => setShow(true);

  const[Attachement,setAttachement]=useState(props.attachement);
  const[Id,setId]=useState(props.id);
  const [employee,setEmployee]=useState(props.employee);

  
    const [formValue, setFormValue] = useState({
        id:Id,
        Employee: employee,
        Attachement: Attachement,
        cbCreateur:props.item.cbCreateur,
        cbMarq:props.item.cbMarq,
        cbModificateur:props.item.cbModificateur
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
const editAttachement=(prAttachement,prflag)=>{
   let  AttachementNewReference=[...Attachement];//creation de copie de  nouveau objet
   const index=AttachementNewReference.findIndex((item)=>item.name === prAttachement.name);
   AttachementNewReference[index].isEditing=prflag;
   setAttachement(AttachementNewReference);
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
                      onChange={handleAttachementInputChange}/>
                  </div>
                  <div className="mb-10">
                    <label>Attachement</label>
                    <input type="text" className='form-control' 
                    id="attachement"
                    required="required" 
                    placeholder="saisir le role" 
                    name="Attachement"
                     value={formValue.Attachement}
                    onChange={handleAttachementInputChange}
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
export default EditAttachement;