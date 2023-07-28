import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutTache(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let newDate = new Date()

  const [formValue, setFormValue] = useState({
    Nom : '',
    Taches: '',
    Type:'',
    Module:'',
    Projet:'',
    Duree:'',
    Temps_estime:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  const handleTacheInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

  }
  const confirmNewTache=()=>{
    props.getSaveEvent(formValue)
    setShow(false)
   }

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> + Ajouter une Tache</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une tache</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div className="modal-body">
                <form  id='ajoutmodal'action="Taches">
                  <div className="mb-10">
                    <label className="">Nom de la tache</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleTacheInputChange}
                      id='nom'
                      name='Nom'
                      value={formValue.Nom}

                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Taches</label>
                    <textarea className='form-control' id='taches'
                     name='Taches' value={formValue.Taches}rows="10"
                     onChange={handleTacheInputChange} >

                     </textarea>
                  </div>
                  <div className="mb-10">
                    <label className="">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleTacheInputChange}
                      id='type'
                      name='Type'
                      value={formValue.Type}


                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Module</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleTacheInputChange}
                      id='module'
                      value={formValue.Module}
                      name='Module'
                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Projet</label>
                    <input
                      type="text"
                      className="form-control"
                        onChange={handleTacheInputChange}
                        name='Projet'
                        id='projet'
                        value={formValue.Projet}
                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Durée</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleTacheInputChange}
                      id='duree'
                      name='Duree'
                      value={formValue.Duree}
                    />
                  </div>
                  <div className="mb-10">
                    <label className="">Temps_estimé</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={handleTacheInputChange}
                      id ="temps_estime"
                      name='Temps_estime'
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
          <button  className="btn btn-primary"onClick={confirmNewTache}>Soumettre</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AjoutTache;