import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import axios from "axios";

function EditGroupe(props){
    console.log(props.item);
    
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  
  const handleShow = () => setShow(true);

  const[Groupe,setGroupe]=useState(props.groupe);
  const[Id,setId]=useState(props.id);
  const [name,setName]=useState(props.name);
  const [specialite,setSpecialite]=useState(props.specialite);
  const [membres,setMembres]=useState(props.membres);


  
    const [formValue, setFormValue] = useState({
        id:Id,
        Name: name,
        Specialite: specialite,
        Membres:membres,
        cbCreateur:props.item.cbCreateur,
        cbMarq:props.item.cbMarq,
        cbModificateur:props.item.cbModificateur
      });

  const handleGroupeInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

  }
const editGroupe=(prGroupe,prflag)=>{
   let  GroupeNewReference=[...Groupe];//creation de copie de  nouveau objet
   const index=GroupeNewReference.findIndex((item)=>item.name === prGroupe.name);
   GroupeNewReference[index].isEditing=prflag;
   setGroupe(GroupeNewReference);
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
                <form id='editgroupe' action="Groupes">
                  
                  <div className="mb-10">
                    <label >Nom</label>
                    <input  className="form-control" type="text"   
                    id ="name"
                    required="required" 
                    value={formValue.Name}
                      name="Name"
                      onChange={handleGroupeInputChange}/>
                  </div>
                  <div className="mb-10">
                    <label>Specialite</label>
                    <input className="form-control" type="text" 
                    id="specialite"
                    required="required" 
                    name="Specialite"
                     value={formValue.Specialite}
                    onChange={handleGroupeInputChange}
                    />
                  </div>
                  <div className="mb-10">
                    <label>Membres</label>
                    <input className="form-control" type="text" 
                    id="membres"
                    required="required" 
                    name="Membres"
                    value={formValue.Membres}
                    onChange={handleGroupeInputChange}
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
export default EditGroupe;