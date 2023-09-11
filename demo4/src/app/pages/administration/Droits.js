import React from "react";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export function Droits() {
return (
  <div className="card card-xxl-stretch">
    <div className='card-header border-0 pt-5'>
      <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Gestion des droits d'Accés</span>

      </h3>
      </div>
    <div className="card-body py-3">
      <div className='accordion' id='kt_accordion_1'>
        {/**item1 */}
      <div className='accordion-item'>
        <h2 className='accordion-header' id='kt_accordion_1_header_1'>
        <button
          className='accordion-button fs-4 fw-bold collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_accordion_1_body_1'
          aria-expanded='false'
          aria-controls='kt_accordion_1_body_1'
        >
          Employée
        </button>
      </h2>
    <div
      id='kt_accordion_1_body_1'
      className='accordion-collapse collapse'
      aria-labelledby='kt_accordion_1_header_1'
      data-bs-parent='#kt_accordion_1'
    >
    <div className='accordion-body'>
      <div className="mb-3">
         <input  className="form-check-input"type="checkbox" id="checkbox1"></input>
         <label for="checkbox3" >Ajouter employée</label><br/>
       </div>
       <div className="mb-3">
         <input className="form-check-input" type="checkbox" id="checkbox2"></input>
         <label for="checkbox3">Exporter </label><br/>
       </div>
       <div className="mb-3">
        <input  className="form-check-input" type="checkbox" id="checkbox3"></input>
        <label for="checkbox3">Filtrer employée</label><br/>
       </div>
       <input  className="form-check-input" type="checkbox" id="checkbox4"></input>
       <label for="checkbox3">Supprimer employée</label>
  
    </div>
  </div>
</div>
{/**item2 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_2'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_2'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_2'
    >
      Groupes
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_2'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_2'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
      <input  className="form-check-input" type="checkbox" id="checkbox1"></input>
      <label for="checkbox3">Ajouter Groupe</label><br/>
      </div>
      <div className="mb-3">
         <input   className="form-check-input"type="checkbox" id="checkbox2"></input>
         <label for="checkbox3">Modifier Groupe </label><br/>
       </div>
       <input   className="form-check-input"type="checkbox" id="checkbox3"></input>
       <label for="checkbox3">Supprimer Groupe</label><br/>
       
  
    </div>
  </div>
</div>
{/**item3 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_3'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_3'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_3'
    >
       Role
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_3'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_3'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
        <input   className="form-check-input"type="checkbox" id="checkbox1"></input>
        <label for="checkbox3">Ajouter Role</label><br/>
      </div>
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3"> Modifier Role</label><br/>
    </div>
  </div>
</div>

{/**item4 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_4'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_4'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_4'
    >
       Taches
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_4'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_4'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
           <input   className="form-check-input"type="checkbox" id="checkbox1"></input>
           <label for="checkbox3">Ajouter Tache</label><br/>
      </div>
      <div className="mb-3">
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Modifier Tache</label><br/>
       </div>
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Supprimer Tache</label><br/>
      
    </div>
  </div>
</div>
{/**item5*/}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_5'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_5'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_5'
    >
       Objectifs
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_5'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_5'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
       <input  className="form-check-input" type="checkbox" id="checkbox1"></input>
       <label for="checkbox3">Ajouter Objectifs</label><br/>
       </div>
       <div className="mb-3">
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Consulter Objectifs</label><br/>
       </div>
       <input   className="form-check-input"type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Supprimer Objectifs</label><br/>
    </div>
  </div>
</div>
{/**item6 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_6'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_6'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_6'
    >
      Attachements
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_6'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_6'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
        <input  className="form-check-input" type="checkbox" id="checkbox1"></input>
        <label for="checkbox3">Ajouter Attachements</label><br/>
       </div>
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Consulter les Attachements</label><br/>
    </div>
  </div>
</div>
{/**item7 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_7'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_7'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_7'
    >
       Accessoires
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_7'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_7'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
    <input  className="form-check-input" type="checkbox" id="checkbox1"></input>
       <label for="checkbox3">Ajouter Accessoires</label><br/>
      
    </div>
  </div>
</div>
{/**item8 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_8'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_8'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_8'
    >
       Congés
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_8'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_8'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
         <input   className="form-check-input"type="checkbox" id="checkbox1"></input>
         <label for="checkbox3">Ajouter Congés</label><br/>
       </div>
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Modifier Congés</label><br/>
    </div>
  </div>
</div>
{/**item9 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_9'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_9'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_9'
    >
      Pointage
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_9'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_9'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
         <input  className="form-check-input" type="checkbox" id="checkbox1"></input>
         <label for="checkbox3">Ajouter Employée</label><br/>
       </div>
       <input   className="form-check-input"type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Supprimer Employée</label><br/>
    </div>
  </div>
</div>
{/**item10 */}
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_10'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_10'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_10'
    >
      Paiement
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_10'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_10'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <div className="mb-3">
         <input  className="form-check-input"type="checkbox" id="checkbox1"></input>
         <label for="checkbox3">Ajouter Salarié</label><br/>
       </div>
       <div className="mb-3">
           <input   className="form-check-input"type="checkbox" id="checkbox2"></input>
           <label for="checkbox3">Consulter salaire</label><br/>
       </div>
       <input  className="form-check-input" type="checkbox" id="checkbox2"></input>
       <label for="checkbox3">Supprimer salaire</label><br/>
    </div>
  </div>
</div>
{/**item11 */}

</div>
      </div>
   </div>
  );
}
export default Droits;