import React, { useState ,useEffect} from "react";
import axios  from "axios";
import { IconButton } from "@mui/material";
import AjoutTache from "../../../_metronic/partials/modals/AjoutTache";
import EditTache from "../../../_metronic/partials/modals/EditTache";


export function Taches(){
  const [Tache,setTache]=useState([]);
  useEffect(()=>{fetch("https://localhost:7091/api/Taches/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setTache(responseJSon)})
   },[])
   const getTaches = () => {
  fetch("https://localhost:7091/api/Taches/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setTache(responseJSon)})  
}
//SEARCH
//const [SearchParameterName,setSearchParameterName]=useState('');
//const handleInputChange=(event)=>{
//  setSearchParameterName(event.target.value.toString());
//}
//
//const searchItems=()=>{
//  let URL=SearchParameterName!=""?("https://localhost:7091/api/Taches/Search?prName"+SearchParameterName):"https://localhost:7091/api/Taches/GetAll";
//  axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
//  setTache(response.data);
//})
//}
/**AJOUT */
const saveTache= (formValue) => {
  console.log(formValue);
  axios.post("https://localhost:7091/api/Taches/Save",formValue).then(response=>{
    getTaches()
})
}
/**UPDATE */
const updateTache= (formValue)=>{
  console.log(formValue);
  axios.put("https://localhost:7091/api/Taches/Update",formValue).then(response=>{
    getTaches()
  })}

  /**DELETE */
  const deleteTache=(prTache)=>{
    axios.delete("https://localhost:7091/api/Taches/Delete",{data:prTache}).then( response =>{
    //let TacheNewReference=[...Tache];
    //const index=TacheNewReference.findIndex((item)=> item.name == prTache.name);
    //TacheNewReference.splice(index,1);//permet de supprimer qu'un seul item
    //setTache(TacheNewReference);
    getTaches()
    });
  }
     return (
        <div className="Tache">
           <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Gestion des Taches</span>
      </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutTache getSaveEvent={saveTache}/>
     
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
                  <th>Nom</th>
                  <th>Type </th>
                  <th> Module</th>
                  <th>Projet </th>
                  <th>Durée </th>
                  <th>Temps estimés </th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
                {Tache.map(item=>
                <tr key={item.id}>
                    <td>{item.nom}</td>
                    <td>{item.type}</td>
                    <td>{item.module}</td>
                    <td>{item.projet}</td>
                    <td>{item.duree}</td>
                    <td>{item.temps_estime}</td>

              <td>
               
                    <IconButton >
                    <EditTache id={item.id} item={item}
                     type={item.type} module={item.module} 
                     projet={item.projet}
                     duree={item.duree}
                     temps_estime={item.temps_estime}
                     nom={item.nom}
                     confirmUpdate={updateTache}/>
                     </IconButton>
              
                    
                  
              
                <button type="button" className="btn btn-light-danger" style={{}}
                    onClick={deleteTache.bind(this,item)} >Supprimer</button>
                
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
}


  export default Taches;