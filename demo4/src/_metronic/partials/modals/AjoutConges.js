import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AjoutConges(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newDate = new Date()
  const [formValue, setFormValue] = useState({
    Employee: '',
    Nombre: '',
    type:null,
  
    Date_debut:'',
    Date_fin:'',
    CbCreateur : 'cb Createur optional',
    cbModificateur :  newDate
  });
  
/**Get type congés * */
const [TypeConges,setTypeConges]=useState([]);
useEffect(()=>{fetch("https://localhost:7091/api/TypeConges").then(response=> {return response.json()})
.then(responseJSon=>{setTypeConges(responseJSon)})
 },[])
 const getTypeConges = () => {
  fetch("https://localhost:7091/api/TypeConges").then(response=> { return response.json()})
.then(responseJSon=>{setTypeConges(responseJSon)})
    
}
  const handleCongesInputChange=(event)=>{
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const confirmNewConges=()=>{
    console.log('tessst',formValue)
    props.getSaveEvent(formValue)
    setShow(false)
   }

  return (
    <>
    <button  onClick={handleShow} className="btn btn-light-primary"> Ajouter un Congés</button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remplir un Congés</Modal.Title>
        </Modal.Header>
       
        
       
        <Modal.Body>
        <div className='modal-body'>
                   <form  id='ajoutconges'action="Conges">
                 
                 <div className="mb-10">
                    <label className="">Employé</label>
                    <input
                     type="text"
                     className="form-control"
                    placeholder="Saisir le nom "
                    id='employee'
                    name='Employee'
                    value={formValue.Employee}
                    onChange={handleCongesInputChange}
                     />
                 </div>
              <div className="mb-10">
                <label className="">Date de début </label>
                  <input
                    type="date"
                    className="form-control form-control-solid"
                    id='date_debut'
                    name='Date_debut'
                    value={formValue.Date_debut}
                    onChange={handleCongesInputChange}
                />
              </div>
                  <div className="mb-10">
                  <label className="">Date de fin</label>
                  <input
                    type="date"
                    className="form-control form-control-solid"
                    id='date_fin'
                    name='Date_fin'
                    value={formValue.Date_fin}
                    onChange={handleCongesInputChange}
                  />
                </div>
                <div className="mb-10">
                  <label className="">Nombre</label>
                  <input
                    type="number"
                    className="form-control form-control-white"
                    placeholder="Séléctionner le nombre"
                    id='nombre'
                    name='Nombre'
                    value={formValue.Nombre}
                    onChange={handleCongesInputChange}
                  />
                </div>

              
            
                  
                  <div className="mb-10">
                    <label className="">Type</label>
                    <select className="form-select form-select-white"  
                  aria-label="Select example" id='type' name="type" onChange={handleCongesInputChange}>
                    Type de Congés
                  <option >séléctionner un type </option>
                  {TypeConges.map(item =>(

                  <option  value={item.cbMarq}> {item.type} </option>
                  ))}

                  </select>
                  </div>
              
                
                </form>
                </div>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <button  className="btn btn-primary"
          onClick={confirmNewConges}
          >Soumettre</button>
        
        </Modal.Footer>
        </Modal>
        </>
        )} export default AjoutConges;