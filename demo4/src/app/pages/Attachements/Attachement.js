import React,{useEffect,useState} from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AjoutAttachement from "../../../_metronic/partials/modals/AjoutAttachement";
import EditAttachement from "../../../_metronic/partials/modals/EditAttachement";


export function Attachements(){
    //List Role
 const [Attachement,setAttachement]=useState([]);
 
useEffect(()=>{fetch("https://localhost:7091/api/Attachements/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setAttachement(responseJSon)})
   },[])

  const  getAttachement = () => {
    fetch("https://localhost:7091/api/Attachements/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setAttachement(responseJSon)})
      
  }
//SEARCH

const [SearchParameterName,setSearchParameterName]=useState('');
const handleInputChange=(event)=>{
  setSearchParameterName(event.target.value.toString());
}
  const searchItems=()=>{
    let URL=SearchParameterName!=""?("https://localhost:7091/api/Attachements/Search?prName"+SearchParameterName):"https://localhost:7091/api/Attachements/GetAll";
    axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
    setAttachement(response.data);
  })
  }
   
   /**UPDATE */
   const updateAttachement=(formValue)=>{
    console.log(formValue)
    axios.put("https://localhost:7091/api/Attachements/Update",formValue).then(response=>{
      getAttachement()
    })
   }
   /**AJOUT */
   const saveAttachement= (formData,formValue) =>{
    axios.post("https://localhost:7091/api/Attachements/UploadFile",formData).then(response=>{
    })
    console.log('service',formValue)
    axios.post("https://localhost:7091/api/Attachements/Save",formValue).then(response=>{
      getAttachement()
    })
   }

   
/**DELETE  */
const deleteAttachement=(prAttachement)=>{
  console.log(prAttachement)
  axios.delete("https://localhost:7091/api/Attachements/Delete",{data:prAttachement}).then( response =>{
    // let AttachementNewReference=[...Attachement];
    // const index=AttachementNewReference.findIndex((item)=> item.name == prAttachement.name);
    // AttachementNewReference.splice(index,1);//permet de supprimer qu'un seul item
    // setAttachement(AttachementNewReference);
    getAttachement()

  });
}

    return (
    <div className="Attachement">
    <div className="card card-xxl-stretch">
    <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Attachements</span>
      </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          
          <AjoutAttachement getSaveEvent={saveAttachement}/>
     
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
                  <th>Les Attachements</th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
              {Attachement.map(item=>
                <tr key={item.id}>
                  <td>{item.employee}</td>
                  <td>{item.attachement}</td>
              <td>
                
               <IconButton >
                    <EditAttachement id={item.id} item={item} employee={item.employee} attachement={item.attachement} confirmUpdate={updateAttachement} ></EditAttachement>
                    </IconButton>
              
                    <button type="button" className="btn btn-light-danger "
                     onClick={deleteAttachement.bind(this,item)} >Supprimer
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
  )
};
export default Attachements; 
