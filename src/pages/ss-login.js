import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@firebase/app';
import '@firebase/auth';
import '@polymer/paper-toast/paper-toast.js';

class SSLogin extends PolymerElement {
  static get template() {
    return html`
      <style>

            .background-section{
                width: 100%;
                background-color: #2c3c4f;
                background-size: cover;
                box-sizing: border-box;
                height: 100vh;    
            }

            .logo {
                margin-bottom: 20px;
            }


            .form{
                position: absolute;
                margin: auto;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: #c2dbeb;
                width: 277px;
                height: 435px;
                border-radius: 8px;
                 padding-top: 15px;
                padding-bottom: 15px;
                padding-left: 30px;
                padding-right: 30px; 
            }
    
            .login-block {
               
            }
    
            .login-block paper-input {
                width: 100%;
                height: 42px;
                margin-bottom: 28px;
                outline: none;
            }   
    
    
            .login-block input:active, .login-block input:focus {
                border: 1px solid #ff656c;
            }
    

            #btnLogin{
                margin-top:40px;
                margin-left:0px;
                margin-right:0px;
                text-transform: capitalize;
                width: 100%;
                height: 40px;
                background: #2489CA; 
                color: #fff;
                font-size: 14px;
                outline: none;
                cursor: pointer;
            }

            #btnLogin:hover{
                background: #2DA7F6;
            }

            a {
                display:inline-block; 
                font-size:11px;
                font-style:italic;
            }

            #createAcc{
                float:left;
            }

            #forgotPwd{
                float:right;
            }

            .hide{
                display: none;
            }
            
            paper-toast{
                margin-left:220px;
                margin-bottom:60px;
            }

            #errorMsg{
                color:red;
                font-style:italic;
                font-size: 14px;
                padding-top: 12px;
            }
          
  
        </style>


    <section class="background-section" > 
        <form>
            <div class="form" id="login_div">    
                <div class="logo">
                    <img src="./images/logo.svg">
                </div>
                <div class="login-block">
                    <paper-input id="txtEmail" name="email" type="email" always-float-label label="Email" auto-validate error-message="Please provide an email">
                    </paper-input>

                    <paper-input id="txtPassword" name="password" type="password" always-float-label label="Password" auto-validate error-message="Please provide a password">
                    </paper-input>

                    <p id="errorMsg"></p>

                   
                    <paper-button raised id="btnLogin"><a>Login</a></paper-button>
                    <paper-toast id="toast" text="You are logged in"></paper-toast>
                       
                    <paper-button raised id="btnSignUp" >Sign Up(test)</paper-button>
                    
                </div>
            </div> 
        </form>
    </section> 
  
    `;
  }
  connectedCallback() {
      super.connectedCallback();

    const txtEmail = this.shadowRoot.querySelector('#txtEmail');
    const txtPassword = this.shadowRoot.querySelector('#txtPassword');


    const loginbutton = this.shadowRoot.querySelector('#btnLogin');
    const signupbutton = this.shadowRoot.querySelector('#btnSignUp');
    const logoutbutton = this.shadowRoot.querySelector('#btnLogout');
    loginbutton.addEventListener('click', this._onClick.bind(this));
    signupbutton.addEventListener('click', this._signUp.bind(this));
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
           
            
         
        } else{
         
    
        }
    });
   
  }


static get properties(){
    return{
        user: {
            type: Object
        },

        statusKnown: {
            type: Object
        }
    }
}

_onClick(){
    const txtEmail = this.shadowRoot.querySelector('#txtEmail');
    const txtPassword = this.shadowRoot.querySelector('#txtPassword');
    console.log(txtEmail.value);
    const email = txtEmail.value;
    const pass = txtPassword.value;
    
    if(email == "" || pass == ""){
        alert("Please ensure you have entered an email and password");
        return false;
    }
   
    else{
    firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){ 
    console.log("congrats you have logged in");
    window.location.href="dashboard";
    this.$.toast.open(); }); }
}

  
/* validateForm(){
    var x = document.
} */

_signUp(){
    const txtEmail = this.shadowRoot.querySelector('#txtEmail').value;
    const txtPassword = this.shadowRoot.querySelector('#txtPassword').value;
    const eMessage = this.shadowRoot.querySelector('#errorMsg');
   
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(eMessage);

    firebase.auth().createUserWithEmailAndPassword(txtEmail, txtPassword).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        eMessage.innerHTML = errorMessage;
        

    });
    console.log("congrats you have signed a new user");

}

}

window.customElements.define('ss-login', SSLogin);
