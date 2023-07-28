import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutObjectif(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Projet: '',
    Taches: '',
    Objectifs:'',
    Temps_estime:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
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

  const confirmNewObjectif=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }



  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> + Ajouter un objectif</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un objectif</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutobjectif'action="Objectifs">
                  <div className="mb-10">
                    <label className="">Projet</label>
                    <input
                      type="text"
                      className="form-control"
                      id='projet'
                      name='Projet'
                      onChange={handleObjectifInputChange}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Taches</label>
                    <textarea className='form-control' 
                    id='taches'
                    name='Taches'
                    onChange={handleObjectifInputChange}
                    rows='7'></textarea>
                  </div>
                  <div className="mb-10">
                    <label className="">Objectifs</label>
                    <textarea className='form-control'
                     id='objectifs'
                     name='Objectifs'
                     onChange={handleObjectifInputChange}
                     rows="7" ></textarea>
                    
                  </div>
                  <div className="mb-10">
                    <label className="">Temps estimé</label>
                    <input
                      type="date"
                      className="form-control"
                      id='temps_estime'
                      name='Temps_estime'
                      onChange={handleObjectifInputChange}

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
          <button  className="btn btn-primary"
          onClick={confirmNewObjectif}
          >Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutObjectif;