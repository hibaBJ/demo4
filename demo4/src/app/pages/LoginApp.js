import  React  from "react";
import axios from "axios"

class LoginApp extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      userEmail:'',
      userPassword:''
    };
  }
  handleLogin = (event) => {
    event.preventDefault(); 
    const { userEmail, userPassword } = this.state;
    const Data={userEmail,userPassword}
 
      axios.post("https://localhost:7091/api/Auth/login",Data)
     .then((response) => {  
      console.log (Data);
    //stockage
      localStorage.setItem('Data', JSON.stringify(response.data));
    //go to dashboard after login 
     window.location.href='/metronic8/react/demo4/dashboard';
          })  
    };
    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };
    
  style={
    fontSize:'15px',
    padding:'5px',
    textAlign:'center'
  }
  
    render(){
      return(
  <div className="Login">
        <div >
      {/**begin heading */}
      
      <div className='text-center mb-10'>
      <h1> Connectez-vous</h1>
      </div>
      <form >
                  <div className="mb-10">
                    <label style={this.style}className=" form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg form-control-solid"
                      value={this.state.userEmail}
                      onChange={this.handleInputChange}
                      autoComplete='off'
                      name="userEmail"
                   
                    />
                  </div>
                  <div className="mb-10">
                    <label  style={this.style} className=" form-label">Mot De Passe</label>
                    <input
                     type="password"
                      value={this.state.userPassword}
                       onChange={this.handleInputChange} 
                      className="form-control form-control-lg form-control-solid"
                      autoComplete='off'
                      name="userPassword"
                    />
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button className="btn btn-primary btn-lg" style={{ backgroundColor: 'rgb(13 121 254)' }}  onClick={this.handleLogin} >
                    Se connecter
                  </button> 
                
                </div> 
         </form>
                </div>
  </div>
      )
    }
};
export default LoginApp;



