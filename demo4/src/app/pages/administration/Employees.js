import React,{useState,useEffect} from "react";
import { IconButton } from "@mui/material";
import axios from "axios";
import { KTSVG } from "../../../_metronic/helpers";
import { UsersListFilter } from "../../modules/apps/user-management/users-list/components/header/UsersListFilter";
import AjEmployee from "../../../_metronic/partials/modals/AjEmployee";
import EditEmp from "../../../_metronic/partials/modals/EditEmp";
import { UsersListPagination } from "../../modules/apps/user-management/users-list/components/pagination/UsersListPagination";
import { UsersListSearchComponent } from "../../modules/apps/user-management/users-list/components/header/UsersListSearchComponent";



export function Employees(){
  
/**GET */
const [Employee,setEmployee]=useState([]);

useEffect(()=>{fetch("https://localhost:7091/api/Employee/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setEmployee(responseJSon)})
   },[])

const getEmployees = () => {
 fetch("https://localhost:7091/api/Employee/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setEmployee(responseJSon)})
   
}
//SEARCH
const [SearchParameterName,setSearchParameterName]=useState('');
const handleInputChange=(event)=>{
 setSearchParameterName(event.target.value.toString());
}

const searchItems=()=>{
 let URL=SearchParameterName!=""?("https://localhost:7091/api/Employee/Search?prName"+SearchParameterName):"https://localhost:7091/api/Employee/GetAll";
 axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
 setEmployee(response.data);
})
}
/**UPDATE */
const updateEmployee= (formValue)=>{
  console.log(formValue);
  axios.put("https://localhost:7091/api/Employee/Update",formValue).then(response=>{
    getEmployees()
    
  })
}
/**Ajout */
const saveEmployee = (formValue) => {
  axios.post("https://localhost:7091/api/Employee/Save",formValue).then(response=>{
    getEmployees()
})
}
/**DELETE */
const deleteEmployee=(prEmployee)=>{
  axios.delete("https://localhost:7091/api/Employee/Delete",{data:prEmployee}).then( response =>{
 //let EmployeeNewReference=[...Employee];
 //const index=EmployeeNewReference.findIndex((item)=> item.name == prEmployee.name);
 //EmployeeNewReference.splice(index,1);//permet de supprimer qu'un seul item
 //setEmployee(EmployeeNewReference);
 getEmployees();
  });
}
    return (
        <div className="Employees">
        <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Employées</span>
      </h3>
      
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          { /*<UsersListSearchComponent></UsersListSearchComponent>*/}
             <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
    
      <UsersListFilter/>
        <AjEmployee getSaveEvent={saveEmployee}/>

         
         {/**  <div>
            <label className="form-label"></label>
            <input className="" placeholder="Entrer nom"type="text" value={SearchParameterName} onChange={handleInputChange.bind(this)}></input>
            <button type="button" className=""onClick={searchItems.bind(this)}>Chercher</button>
          </div>*/}
     
        </div>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
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
                  <th>Nom Complet</th>
                  <th>Role </th>
                  <th>Email société </th>
                  <th>Téléphone</th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
              {Employee.map(item=>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.email}</td>
                    <td>{item.telephone}</td>
                    <td>
                     
                      <IconButton >
                     <EditEmp id={item.id} item={item} name={item.name} 
                     email={item.email} telephone={item.telephone}
                     role={item.role} confirmUpdate={updateEmployee} />
                    </IconButton>
                    <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteEmployee.bind(this,item)} >Supprimer</button>
                     
                    </td>
                </tr>
                )}
            <UsersListPagination/>
            </tbody>
           
          </table>
        </div>
        </div>
        {/**end body */}
    
</div>
         </div>
          
    )
}
export default Employees;