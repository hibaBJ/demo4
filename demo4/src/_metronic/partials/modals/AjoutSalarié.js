import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutSalarié(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Employee: '',
    Salaire: '',
    Prime:'',
    Coefficient:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleSalaireInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const confirmNewSalaire=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }
  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Ajouter un Salarié</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Salarié</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutsalarie'action="Paiement">
                  <div className="mb-10">
                    <label className="">Employé</label>
                    <input
                      type="text"
                      className="form-control"
                      id="employee"
                      name="Employee"
                      value={formValue.Employee}
                      onChange={handleSalaireInputChange}


                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Salaire</label>
                    <input
                      type="text"
                      className="form-control"
                      id="salaire"
                      name="Salaire"
                      value={formValue.Salaire}
                      onChange={handleSalaireInputChange}


                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Coefficient</label>
                    <input
                      type="number"
                      className="form-control"
                      id="coefficient"
                      name="Coefficient"
                      value={formValue.Coefficient}
                      onChange={handleSalaireInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Prime</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prime"
                      name="Prime"
                      value={formValue.Prime}
                      onChange={handleSalaireInputChange}
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
          onClick={confirmNewSalaire}
          >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutSalarié;