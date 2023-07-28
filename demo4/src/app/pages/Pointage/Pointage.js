import React,{useState,useEffect} from "react";


export function Pointage(){
    /**GET */
    const [Pointage,setPointage]=useState([]);

 useEffect(()=>{fetch("https://localhost:7091/api/Pointage/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setPointage(responseJSon)})
    },[])

const getPointage = () => {
  fetch("https://localhost:7091/api/Pointage/GetAll").then(response=> { return response.json()})
.then(responseJSon=>{setPointage(responseJSon)})
    
}
//const deletePointage=(prPointage)=>{
//  console.log(prPointage)
//  axios.delete("https://localhost:7091/api/Pointage/Delete",{data:prPointage}).then( response =>{
//   
//    getPointage();
//
//  });
//}
    return (
        <div className="Pointe">
         <div className="card card-xxl-stretch">
     <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'>Liste de Pointage</span>
      </h3>
      <div className='card-toolbar'>
      
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
                  <th>Entrée </th>
                  <th>Sortie</th>
                  <th>Entrée_Midi</th>
                  <th>Sortie_Midi</th>
                  <th>Total</th>
                
         
                </tr>
            </thead>
            
            <tbody>
              {Pointage.map(item=>
                <tr key={item.id}>
                  <td>{item.employee}</td>
                  <td>{item.entree}</td>
                  <td>{item.sortie}</td>
                  <td>{item.entreeM}</td>
                  <td>{item.sortieM}</td>
                  <td>{item.total}</td>
                
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
}export default Pointage;
