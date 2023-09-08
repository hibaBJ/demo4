import React ,{useState,useEffect}from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import AjoutAccessoire from "../../_metronic/partials/modals/AjoutAccessoire";
import EditAccessoire from "../../_metronic/partials/modals/EditAccessoire";

export function Accessoires(){
  const [Accessoires,setAccessoires]=useState([]);
  useEffect(()=>{fetch("https://localhost:7091/api/Accessoires/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setAccessoires(responseJSon)})
    },[])

   const getAccessoires= () => {
    fetch("https://localhost:7091/api/Accessoires/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setAccessoires(responseJSon)})
      
  }

 //  /**SEARCH */
 //   const [SearchParameterName,setSearchParameterName]=useState('');
 //   const handleInputChange=(event)=>{
 //   setSearchParameterName(event.target.value.toString());
 //}
 //
 //const searchItems=()=>{
 // let URL=SearchParameterName!=""?("https://localhost:7091/api/Accessoires/Search?prName"+SearchParameterName):"https://localhost:7091/api/Accessoires/GetAll";
 // axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
 // setAccessoires(response.data);
 //})s
 //}
   /**DELETE */
   const deleteAccessoires=(prAccessoire)=>{
    axios.delete("https://localhost:7091/api/Accessoires/Delete",{data:prAccessoire}).then( response =>{
   //let AccessoireNewReference=[...Accessoires];
   //const index=AccessoireNewReference.findIndex((item)=> item.name == prAccessoire.name);
   //AccessoireNewReference.splice(index,1);//permet de supprimer qu'un seul item
   //setAccessoires(AccessoireNewReference);
   getAccessoires();
    });
  }
   /**AJOUT */
   const saveAccessoires = (formValue) => {
    axios.post("https://localhost:7091/api/Accessoires/Save",formValue).then(response=>{
      getAccessoires()
  })
  }
   /**UPDATE */
   const updateAccessoire= (formValue)=>{
    console.log(formValue);
    axios.put("https://localhost:7091/api/Accessoires/Update",formValue).then(response=>{
      getAccessoires()
    })
  }
    return(
   
            <div className="Accessoire">
              <div className="card card-xxl-stretch">
           <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
         <span className='card-label fw-bold fs-3 mb-1'>Liste des Accessoires</span>
        </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutAccessoire getSaveEvent={saveAccessoires}/>
     
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
                  <th>Intitulé </th>
                  <th> Code</th>
                  <th>Action</th>
                  
         
                </tr>
            </thead>
            <tbody>
              {Accessoires.map(item=>
                <tr key={item.id}>
                  <td>{item.employee}</td>
                  <td>{item.intitule}</td>
                  <td>{item.code}</td>
              <td>
             
               <IconButton >
                    <EditAccessoire  id={item.id} item={item} employee={item.employee} code={item.code} intitule={item.intitule} confirmUpdate={updateAccessoire} />
                    </IconButton>

                    <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteAccessoires.bind(this,item)} >Supprimer</button>
                 
                  
                
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
    
    
      export default Accessoires;
        
        
      
    




       