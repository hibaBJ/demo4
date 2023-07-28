import {React,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutAccessoire(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Employee: '',
    Code: '',
    Intitule:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleAccessoiresInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const confirmNewAccessoires=()=>{
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
          <Modal.Title>Ajouter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutaccessoire'action="Accessoires">
                  <div className="mb-10">
                    <label className="">Code</label>
                    <input
                      type="number"
                      className="form-control"
                      id="code"
                      name="Code"
                      value={formValue.Code}
                      onChange={handleAccessoiresInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Intitulé</label>
                    <input
                      type="text"
                      className="form-control"
                      id="intitule"
                      name="Intitule"
                      value={formValue.Intitule}
                      onChange={handleAccessoiresInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Employé</label>
                    <input
                      type="text"
                      className="form-control"
                      id="emlpoyee"
                      name="Employee"
                      onChange={handleAccessoiresInputChange}
                      value={formValue.Employee}
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
          onClick={confirmNewAccessoires}
         >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutAccessoire;