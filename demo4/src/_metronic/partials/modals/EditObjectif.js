import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditObjectif(props){
  console.log(props.item);
    
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Objectifs,setObjectifs]=useState(props.objectifs);
  const [Projet,setProjet]=useState(props.projet);
  const [Taches,setTaches]=useState(props.taches);
  const [Temps_estime,setTemps_estime]=useState(props.temps_sestime);
  const[Id,setId]=useState(props.Id);
   
  const [formValue, setFormValue] = useState({
    id:Id,
    Projet: Projet,
    Taches: Taches,
    Temps_estime:Temps_estime,
    Objectifs:Objectifs,
   // cbCreateur:props.item.cbCreateur,
   // cbMarq:props.item.cbMarq,
    //cbModificateur:props.item.cbModificateur
  });

const handleObjectifInputChange=(event)=>{
const { name, value } = event.target;
setFormValue((prevState) => {
  return {
    ...prevState,
    [name]: value,
  };
});

}
const editObjectif=(prObjectif,prflag)=>{
let  ObjectifNewReference=[...Objectifs];//creation de copie de  nouveau objet
const index=ObjectifNewReference.findIndex((item)=>item.name == prObjectif.name);
ObjectifNewReference[index].isEditing=prflag;
setObjectifs(ObjectifNewReference);
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
                <form id='editobjectifs'action="Role">
                  
                  <div className="mb-10">
                    <label >Projet</label>
                    <input  className="form-control" type="text"   
                    id ="projet"
                    required="required" 
                    name="Projet"
                    value={formValue.Projet}
                    onChange={handleObjectifInputChange}
                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Taches</label>
                    <input  className="form-control" type="text"   
                    id ="taches"
                    name="Taches"
                    onChange={handleObjectifInputChange}
                    value={formValue.Taches}
                    required="required"
                    />
                  </div>
                  <div className="mb-10">
                    <label >Objectifs</label>
                    <input  className="form-control" type="text"   
                    id ="objectifs"
                    required="required" 
                    name="Objectifs"
                    onChange={handleObjectifInputChange}
                    value={formValue.Objectifs}
                 
                  
                    />
                  </div>
                  
                  <div className="mb-10">
                    <label>Temps estimés</label>
                    <input className="form-control" type="date" 
                    id="temps_estime"
                    name="Temps_estime"
                    value={formValue.Temps_estime}
                    onChange={handleObjectifInputChange}
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
export default EditObjectif;