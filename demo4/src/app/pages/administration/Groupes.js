import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import AjoutGroupe from '../../../_metronic/partials/modals/AjoutGroupe';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import EditGroupe from '../../../_metronic/partials/modals/EditGroupe';


 export function Groupes(){
  const [Groupe,setGroupe]=useState([]);

  useEffect(()=>{fetch("https://localhost:7091/api/Groupe/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setGroupe(responseJSon)})
    },[]);

    const getGroupes = () => {
      fetch("https://localhost:7091/api/Groupe/GetAll").then(response=> { return response.json()})
    .then(responseJSon=>{setGroupe(responseJSon)})
        
    }
 /**SEARCH */

   const [SearchParameterName,setSearchParameterName]=useState('');
   const handleInputChange=(event)=>{
    setSearchParameterName(event.target.value.toString());
  }
   const searchItems=()=>{
    let URL=SearchParameterName!=""?("https://localhost:7091/api/Groupe/Search?prName"+SearchParameterName):"https://localhost:7091/api/Groupe/GetAll";
    axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
    setGroupe(response.data);
  })
  }
    /*Ajout*/
    const saveGroupe = (formValue) => {
      axios.post("https://localhost:7091/api/Groupe/Save",formValue).then(response=>{
        getGroupes()
    })
    }
    
    /**UPDATE */
    
    const updateGroupe= (formValue)=>{
      console.log(formValue);
      axios.put("https://localhost:7091/api/Groupe/Update",formValue).then(response=>{
        getGroupes()
        
      })
    }
    /**DELETE */
    const deleteGroupe=(prGroupe)=>{
      axios.delete("https://localhost:7091/api/Groupe/Delete",{data:prGroupe}).then( response =>{
      // let GroupeNewReference=[...Groupe];
      // const index=GroupeNewReference.findIndex((item)=> item.name == prGroupe.name);
      // GroupeNewReference.splice(index,1);//permet de supprimer qu'un seul item
      // setGroupe(GroupeNewReference);
      getGroupes();
      });
    }

    return (
        <div >
 
    <div className="Groupe">
    <div className="card card-xxl-stretch">
    <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Groupes</span>
      </h3>
      <div className='card-toolbar'>
          {/* begin::Menu */}
         
          {/* begin::Menu 2 */}
       
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutGroupe getSaveEvent={saveGroupe}/>
         
        </div>
        </div>
      </div>
        {/**begin header */}
        {/**end header */}
      
        {/**body */}
        <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className="table table-row-dashed table-row-gray-300 gy-7">
          <tr className='fw-bold text-muted'>
                 
                    <th  className='min-w-150px'>Nom Du Groupe</th>
                    <th  className='min-w-140px'>Spécialité</th>
                    <th  className='min-w-120px'>Les Membres</th>
                    <th  className='min-w-100px ' >Action</th>
                  </tr>
            <tbody>
                  {Groupe.map(item=>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.specialite}</td>
                    <td>{item.membres}</td>
                    <td>
                 
                    <IconButton  >
                    <EditGroupe item={item} id={item.id} name={item.name} specialite={item.specialite} membres={item.membres} confirmUpdate={updateGroupe}></EditGroupe>
                  </IconButton>
                  <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteGroupe.bind(this,item)} >Supprimer</button>
                    
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





        </div>
      );
    }
    
    export default Groupes;
    
   
 
