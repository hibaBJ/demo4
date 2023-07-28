import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function EditSalarie(props){
    
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[Paiement,setPaiement]=useState(props.paiement);

const[Id,setId]=useState(props.id);
const[employee,setEmployee]=useState(props.employee);
const[Salaire,setSalaire]=useState(props.salaire);
const[Prime,setPrime]=useState(props.prime);
const[Coefficient,setCoefficient]=useState(props.coefficient);

  const [formValue, setFormValue] = useState({
    id:Id,
    Employee: employee,
    Salaire: Salaire,
    Prime:Prime,
    Coefficient:Coefficient,
    cbCreateur:props.item.cbCreateur,
    cbMarq:props.item.cbMarq,
    cbModificateur:props.item.cbModificateur
  });

const handlePaiementInputChange=(event)=>{
const { name, value } = event.target;
setFormValue((prevState) => {
  return {
    ...prevState,
    [name]: value,
  };
});

}
const editPaiement=(prPaiement,prflag)=>{
let  PaiementNewReference=[...Paiement];//creation de copie de  nouveau objet
const index=PaiementNewReference.findIndex((item)=>item.name == prPaiement.name);
PaiementNewReference[index].isEditing=prflag;
setPaiement(PaiementNewReference);
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
                    onChange={handlePaiementInputChange}
                    value={formValue.Employee}
                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Salaire</label>
                    <input  className="form-control" type="text"   
                    id ="salaire"
                    required="required" 
                    name="Salaire"
                    value={formValue.Salaire}
                    onChange={handlePaiementInputChange}

                    
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Coefficient</label>
                    <input  className="form-control" type="text"   
                    id ="coefficient"
                    required="required"
                    name="Coefficient"
                    value={formValue.Coefficient}
                    onChange={handlePaiementInputChange} 

                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label>Prime</label>
                    <input className="form-control" type="text" 
                    id="prime"
                    required="required" 
                    name="Prime"
                    value={formValue.Prime}
                    onChange={handlePaiementInputChange}

                  
                    
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
export default EditSalarie;