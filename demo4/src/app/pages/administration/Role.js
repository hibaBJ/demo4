import React, { useEffect, useState } from "react";
import AjoutRole from "../../../_metronic/partials/modals/AjoutRole";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditEmployee from "../../../_metronic/partials/modals/EditEmployee";



export function  Role(){

 
//List Role
 const [Role,setRole]=useState([]);

 useEffect(()=>{fetch("https://localhost:7091/api/Role/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setRole(responseJSon)})
    },[])

const getRoles = () => {
  fetch("https://localhost:7091/api/Role/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setRole(responseJSon)})
    
}
//SEARCH
const [SearchParameterName,setSearchParameterName]=useState('');
const handleInputChange=(event)=>{
  setSearchParameterName(event.target.value.toString());
}

const searchItems=()=>{
  let URL=SearchParameterName!=""?("https://localhost:7091/api/Role/Search?prName"+SearchParameterName):"https://localhost:7091/api/Role/GetAll";
  axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
  setRole(response.data);
})
}

/**UPDATE */
const updateEmployee= (formValue)=>{
  console.log(formValue);
  axios.put("https://localhost:7091/api/Role/Update",formValue).then(response=>{
    getRoles()
  
  })
}

const saveRole = (formValue) => {
  axios.post("https://localhost:7091/api/Role/Save",formValue).then(response=>{
    getRoles()
})
}
/**DELETE */
const deleteRole=(prRole)=>{
  axios.delete("https://localhost:7091/api/Role/Delete",{data:prRole}).then( response =>{
 // let RoleNewReference=[...Role];
 // const index=RoleNewReference.findIndex((item)=> item.name == prRole.name);
 // RoleNewReference.splice(index,1);//permet de supprimer qu'un seul item
 // setRole(RoleNewReference);
 getRoles();
  });
}




  return (
    <div className="Role">
    <div className="card card-xxl-stretch">
    <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Roles</span>
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
          <AjoutRole  getSaveEvent={saveRole}/>
     
         
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
                  <th>Role</th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
              {Role.map(item=>
              <tr key={item.id}>

              <td>{item.employee}</td>
              <td>{item.role}</td>
              
              <td>
              
                
               <IconButton >
                     <EditEmployee  id={item.id} item={item} employee={item.employee} role={item.role} confirmUpdate={updateEmployee} />
                    </IconButton>
              
                  
                  <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteRole.bind(this,item)} >
                      Supprimer
                      </button>
                  
            
                
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
  )}
export default Role;

  
