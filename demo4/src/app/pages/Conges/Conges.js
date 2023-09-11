import React,{useState,useEffect} from "react";
import AjoutConges from "../../../_metronic/partials/modals/AjoutConges";
import axios from "axios";



export function Conges(){
  const [Conges,setConges]=useState([]);
  useEffect(()=>{fetch("https://localhost:7091/api/Conges/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setConges(responseJSon)})
   },[])
   const getConges = () => {
    fetch("https://localhost:7091/api/Conges/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setConges(responseJSon)})
      
  }

   /**SEARCH */
// const [SearchParameterName,setSearchParameterName]=useState('');
// const handleInputChange=(event)=>{
//   setSearchParameterName(event.target.value.toString());
// }
// 
// const searchItems=()=>{
//   let URL=SearchParameterName!=""?("https://localhost:7091/api/Conges/Search?prName"+SearchParameterName):"https://localhost:7091/api/conges/GetAll";
//   axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
//   setConges(response.data);
// })
// }
   /**AJOUT */
   const saveConges= (formValue) => {
    axios.post("https://localhost:7091/api/Conges/Save",formValue).then(response=>{
      getConges()
  })
  }
  /**DELETE */
  const deleteConges=(prConges)=>{
    axios.delete("https://localhost:7091/api/Conges/Delete",{data:prConges}).then( response =>{
   //let CongesNewReference=[...Conges];
   //const index=CongesNewReference.findIndex((item)=> item.name == prConges.name);
   //CongesNewReference.splice(index,1);//permet de supprimer qu'un seul item
   //setConges(CongesNewReference);
   getConges();
    });
  }
  
    return (
        <div className="Conges">
        <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Conges</span>
      </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutConges getSaveEvent={saveConges}/>
         
     
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
                  <th>Employé</th>
                  <th>Date de Début </th>
                  <th>Date de Fin </th>
                  <th>Nombre</th>
                  <th>Type</th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
              {Conges.map(item=>
                <tr key={item.id}>
                  <td>{item.employee}</td>
                  <td>{item.date_Debut}</td>
                  <td>{item.date_Fin}</td>
                  <td>{item.nombre}</td>
                  <td>{item.type}</td>
                  <td>
                  
                    <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteConges.bind(this,item)} >
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
          
    )
}
export default Conges;