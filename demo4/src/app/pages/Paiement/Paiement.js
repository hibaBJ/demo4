import {React,useState,useEffect} from "react";
import AjoutSalarié from "../../../_metronic/partials/modals/AjoutSalarié";
import axios from "axios";
import { IconButton } from "@mui/material";
//import DeleteIcon from '@mui/icons-material/Delete';
//import EditIcon from '@mui/icons-material/Edit';
import EditSalarie from "../../../_metronic/partials/modals/EditSalarie";


export function Paiement(){


const [Paiement,setPaiement]=useState([]);

 useEffect(()=>{fetch("https://localhost:7091/api/Paiement/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setPaiement(responseJSon)})
   },[])
   const getPaiement = () => {
    fetch("https://localhost:7091/api/Paiement/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setPaiement(responseJSon)}) 
  }
  /**SEARCH */
//  const [SearchParameterName,setSearchParameterName]=useState('');
//const handleInputChange=(event)=>{
//  setSearchParameterName(event.target.value.toString());
//}
//
//const searchItems=()=>{
//  let URL=SearchParameterName!=""?("https://localhost:7091/api/Paiement/Search?prName"+SearchParameterName):"https://localhost:7091/api/Paiement/GetAll";
//  axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
//  setPaiement(response.data);
//})
//}
/**Ajout */
const savePaiement = (formValue) => {
  axios.post("https://localhost:7091/api/Paiement/Save",formValue).then(response=>{
    getPaiement()
})
}
/**Delete */
const deletePaiement=(prPaiement)=>{
  axios.delete("https://localhost:7091/api/Paiement/Delete",{data:prPaiement}).then( response =>{
 // let PaiementNewReference=[...Paiement];
 // const index=PaiementNewReference.findIndex((item)=> item.name == prPaiement.name);
 // PaiementNewReference.splice(index,1);//permet de supprimer qu'un seul item
 // setPaiement(PaiementNewReference);
 getPaiement();
  });
}
/**Update */
const updateSalaire= (formValue)=>{
  console.log(formValue);
  axios.put("https://localhost:7091/api/Paiement/Update",formValue).then(response=>{
    getPaiement()})
  }

    return (
        <div className="paiement">
              <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Gestion de Paiement  paiemnt</span>
      </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutSalarié getSaveEvent={savePaiement}/>
     
        </div>
        </div>
      </div>
        {/**begin header */}
        {/**end header */}
      
        {/**body */}
        <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className="table table-row-dashed table-row-gray-300 gy-7">
            <thead>
               <tr className="fw-bolder fs-6 text-gray-800">
                  <th>Employé</th>
                  <th>Salaire </th>
                  <th> Coefficient</th>
                  <th>Prime </th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
                {Paiement.map(item=>
                <tr key={item.id}>
                    <td>{item.employee}</td>
                    <td>{item.salaire}</td>
                    <td>{item.coefficient}</td>
                    <td>{item.prime}</td>
              <td>
             
                    <IconButton >
                    <EditSalarie   id={item.id} item={item} employee={item.employee} salaire={item.salaire}
                    prime={item.prime} coefficient={item.coefficient}
                    confirmUpdate={updateSalaire}
                    />
                    </IconButton>
              
                    <button type="button" className=" btn btn-light-danger" 
                    onClick={deletePaiement.bind(this,item)} >Supprimer</button>
                  
            
                
              </td>
            </tr>
               )}
                  
            </tbody>
          </table>
        </div>
        </div>
        {/**end body */}
    
</div>
        </div>
    )
}export default Paiement;
