import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

class SSErrorCollapse extends PolymerElement {
  static get template() {
    return html `
        <style>
            .collapsible{

              margin:0;
              width: 100%;
              border: none;
              outline:none;
              font-size: 15px;
              cursor: pointer;
            }    
            
            .active{
              background-color: #ddd;
            } 
            
            .collapse-content{
              padding: 0 18px;
              display: block;
              overflow: hidden;
              max-height: 0;
              background-color: white;
              transition: max-height 1s;
              line-height: 38px;
            }    

 
            iron-icon{
              position:absolute;
              right:0;
              width:17px;
            } 
            
            paper-button{
              padding:18px;
              margin:0;
              font-weight:bold;
            }

          
            hr{
              opacity:0.3;
            }
            
            

            .hide{
              display:none;
            }
            
        </style>

    <paper-button class="collapsible">Console<iron-icon class="open" icon="add"></iron-icon><iron-icon icon="remove"></iron-icon></paper-button>
    <div class="collapse-content active" items="{{errorinfo}}">
    <hr>
      <div class="collasped-item">Occurance ID: [[errorinfo.errorid]]</div>
      <div class="collasped-item">Date: [[item.datestamp]]</div>
      <div class="collasped-item">User: [[item.user]]</div>
      <hr>
    </div>
       
    <paper-button class="collapsible collapsible2">Enviroment<iron-icon class="open2" icon="add"></iron-icon><iron-icon icon="remove"></iron-icon></paper-button>
    
    <div class="collapse-content" items="{{errorinfo}}">
    <hr>
      <div class="collasped-item">Browser: [[item.browser]]</div>
      <div class="collasped-item">Operating System: [[item.os]]</div>
      <div class="collasped-item hardware">Hardware Specs: [[item.hardware]]
        

      </div>

     <hr>
    </div>
   

    `;
  }
  static get is() {
    return 'extra-info-list';
  }
  static get properties() {
    return {
      errorinfo: {
        value() {
          return [{
            errorid: '4232',
            datestamp: '04-10-2018 1:57 PM',
            user: 'Harry',
            browser: "Chrome",
            os: "Windows 10",
            hardware: ["Screen Size", "Cores"]
          }, ];
        }
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    var coll = this.shadowRoot.querySelector(".collapsible");
    var coll2 = this.shadowRoot.querySelector(".collapsible2");
    var hideIcon = this.shadowRoot.querySelector(".open");
    var hideIcon2 = this.shadowRoot.querySelector(".open2");

    coll.addEventListener('click', function () {
      this.classList.toggle("active");
      
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        hideIcon.classList.add("hide");
      } else {
        content.style.maxHeight = "0px";
        hideIcon.classList.remove("hide");
      }
    });

    coll2.addEventListener('click', function () {
      this.classList.toggle("active");
      
      var content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        hideIcon2.classList.add("hide");
      } else {
        content.style.maxHeight = "0px";
        hideIcon2.classList.remove("hide");
      }
    });
  }



}

window.customElements.define('ss-collapse', SSErrorCollapse);