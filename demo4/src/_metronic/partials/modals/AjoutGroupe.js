import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutGroupe(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Name: '',
    Specialite: '',
    Membres:'',
   CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
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

  const confirmNewGroupe=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }


  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Ajouter</button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         <Modal.Title>Ajouter Groupe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutgroupe'action="Groupes">
                  <div className="mb-10">
                    <label className="">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id ="name"
                      required="required" 
                      value={formValue.Name}
                      name="Name"
                      onChange={handleGroupeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Spécialité</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialite"
                      value={formValue.Specialite}
                      name="Specialite"
                      onChange={handleGroupeInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Membres</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleGroupeInputChange}
                      id="membres"
                      value={formValue.Membres}
                      name="Membres"

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
          onClick={confirmNewGroupe}>
            Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutGroupe;