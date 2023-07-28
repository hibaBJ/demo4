import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function EditTache(props){
    
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[Tache,setTache] =useState(props.tache);

  const[nom,setNom]=useState(props.nom);
  const [type,setType]=useState(props.type);
  const[module,setModule]=useState(props.module);
  const[projet,setProjet]=useState(props.projet);
  const[duree,setDuree]=useState(props.duree);
  const[temps_estime,setTemps_estime]=useState(props.temps_estime);
  const[Id,setId]=useState(props.id)

  const[formValue,setFormValue]=useState({
    id:Id,
    Nom:nom,
    Type:type,
    Module:module,
    Projet:projet,
    Duree:duree,
    Temps_estime:temps_estime,
    cbCreateur:props.item.cbCreateur,
    cbMarq:props.item.cbMarq,
    cbModificateur:props.item.cbModificateur
  })
  const handleTacheInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

  }
  const editTache=(prTache,prflag)=>{
    let  TacheNewReference=[...Tache];//creation de copie de  nouveau objet
    const index=TacheNewReference.findIndex((item)=>item.name == prTache.name);
    TacheNewReference[index].isEditing=prflag;
    setTache(TacheNewReference);
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
                <form id='edittache'action="Taches">
                  
                  <div className="mb-10">
                    <label >Nom</label>
                    <input  className="form-control" type="text"   
                    id ="nom"
                    required="required" 
                    name="Nom"
                    onChange={handleTacheInputChange}
                    value={formValue.Nom}
                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Type</label>
                    <input  className="form-control" type="text"   
                    id ="type"
                    required="required" 
                    name="Type"
                    onChange={handleTacheInputChange}
                    value={formValue.Type}
                    
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label >Module</label>
                    <input  className="form-control" type="text"   
                    id ="module"
                    required="required" 
                    name="Module"
                    onChange={handleTacheInputChange}
                    value={formValue.Module}
                 
                  
                    />
                  </div>
                  <div className="mb-10">
                    <label>Projet</label>
                    <input className="form-control" type="text" 
                    id="projet"
                    required="required" 
                    name="Projet"
                    onChange={handleTacheInputChange}
                    value={formValue.Projet}
                    
                    />
                  </div>
                  <div className="mb-10">
                    <label>Durée</label>
                    <input className="form-control" type="number" 
                    id="duree"
                    required="required" 
                    name="Duree"
                    onChange={handleTacheInputChange}
                    value={formValue.Duree}
                    />
                  </div>
                  <div className="mb-10">
                    <label>Temps estimés</label>
                    <input className="form-control" type="number" 
                    id="temps_estime"
                    required="required" 
                    name="Temps_estime"
                    onChange={handleTacheInputChange}
                    value={formValue.Temps_estime}
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
            onClick={passConfirmUpdate}>
              Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditTache;