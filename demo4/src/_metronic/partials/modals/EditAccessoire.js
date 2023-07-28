import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditAccessoire(props){
    
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[Accessoires,setAccessoires]=useState(props.accessoires);
  const[Id,setId]=useState(props.id);
  const [employee,setEmployee]=useState(props.employee);
  const [Code,setCode]=useState(props.code);
  const[Intitule,setIntitule]=useState(props.intitule)

  const [formValue, setFormValue] = useState({
    id:Id,
    Employee: employee,
    Code: Code,
    Intitule:Intitule,
    cbCreateur:props.item.cbCreateur,
    cbMarq:props.item.cbMarq,
    cbModificateur:props.item.cbModificateur
  });

const handleAccessoireInputChange=(event)=>{
const { name, value } = event.target;
setFormValue((prevState) => {
  return {
    ...prevState,
    [name]: value,
  };
});

}
const editAccessoire=(prAccessoire,prflag)=>{
let  AccessoireNewReference=[...Accessoires];//creation de copie de  nouveau objet
const index=AccessoireNewReference.findIndex((item)=>item.name == prAccessoire.name);
AccessoireNewReference[index].isEditing=prflag;
setAccessoires(AccessoireNewReference);
}

const passConfirmUpdate = () => {
props.confirmUpdate(formValue)
setShow(false)
}



  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Modifier</button>
     
      <Modal show={show}onHide={handleClose}backdrop="static"keyboard={false}>
        <Modal.Header closeButton>
         <h3>Modifier</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
                <form id='editsalarie'action="Role">
                  
                  <div className="mb-10">
                    <label >Employé</label>
                    <input  className="form-control" type="text"   
                    id ="employee"
                    required="required" 
                    name="Employee"
                    value={formValue.Employee}
                    onChange={handleAccessoireInputChange}
                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Intitulé</label>
                    <input  className="form-control" type="text"   
                    id ="intitule"
                    required="required"
                    name="Intitule"
                    onChange={handleAccessoireInputChange}
                    value={formValue.Intitule} 
                    />
                    
                  </div>
                  <div className="mb-10">
                    <label >Code</label>
                    <input  className="form-control" type="number"   
                    id ="code"
                    name="Code"
                    value={formValue.Code}
                    onChange={handleAccessoireInputChange}
                    required="required" 
                    
            
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
export default EditAccessoire;