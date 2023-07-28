import {React,useState,useEffect} from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AjoutObjectif from "../../../_metronic/partials/modals/AjoutObjectif";
import EditObjectif from "../../../_metronic/partials/modals/EditObjectif";

export function Objectifs(props){

  const [Objectif,setObjectif]=useState([]);

useEffect(()=>{fetch("https://localhost:7091/api/Objectifs/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setObjectif(responseJSon)})
   },[])


   const getObjectifs = () => {
    fetch("https://localhost:7091/api/Objectifs/GetAll").then(response=> { return response.json()})
  .then(responseJSon=>{setObjectif(responseJSon)})
      
  }
  //SEARCH
  const [SearchParameterName,setSearchParameterName]=useState('');
  const handleInputChange=(event)=>{
    setSearchParameterName(event.target.value.toString());
  }
  
  const searchItems=()=>{
    let URL=SearchParameterName!=""?("https://localhost:7091/api/Objectifs/Search?prName"+SearchParameterName):"https://localhost:7091/api/Objectifs/GetAll";
    axios.get(URL).then(response=>{response.data.map(item=>{item.isEditing=false;})
    setObjectif(response.data);
  })
  }
/**AJOUT */
  const saveObjectifs=(formValue)=>{
    axios.post("https://localhost:7091/api/Objectifs/Save",formValue).then(response=>{
      getObjectifs()
    })
  }


  /**UPDATE */
  const updateObjectifs=(formValue)=>{
    console.log(formValue)
    axios.put("https://localhost:7091/api/Objectifs/Save",formValue).then(response=>{
      getObjectifs()
    })
  }
  /**DELETE */
  const deleteObjectifs=(prObjectifs)=>{
    axios.delete("https://localhost:7091/api/Objectifs/Delete",{data:prObjectifs}).then( response =>{
  //let ObjectifsNewReference=[...Objectifs];
  //const index=ObjectifsNewReference.findIndex((item)=> item.name == prObjectifs.name);
  //ObjectifsNewReference.splice(index,1);//permet de supprimer qu'un seul item
  //setObjectif(ObjectifsNewReference);
  getObjectifs();
    });
  }


return(
    <div className="objectif">
         <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste des Objectifs</span>
      </h3>
      <div className='card-toolbar'>
      
          <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        
        >
          <AjoutObjectif getSaveEvent={saveObjectifs}/>
     
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
                  <th>Projet</th>
                  <th>Les Taches </th>
                  <th> Objectifs</th>
                  <th>Temps Estimés </th>
                  <th>Action</th>
         
                </tr>
            </thead>
            
            <tbody>
              {Objectif.map(item=>
                <tr key={item.id}>
                  <td>{item.projet}</td>
                  <td>{item.taches}</td>
                  <td>{item.objectifs}</td>
                  <td>{item.temps_estime}</td>
              <td>
               
               <IconButton >
                    <EditObjectif  id={item.id} item={item} projet={item.projet} taches={item.taches}
                    temps_estime={item.temps_estime}
                    objectifs={item.objectifs}
                    confirmUpdate={updateObjectifs}  />
                    </IconButton>
              
                    <button type="button" className=" btn btn-light-danger" 
                    onClick={deleteObjectifs.bind(this,item)} >Supprimer</button>
               
                
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
}export default Objectifs;