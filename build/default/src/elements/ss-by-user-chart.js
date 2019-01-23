import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-spinner/paper-spinner.js";

class SSByUserChart extends PolymerElement {
  static get template() {
    return html`
          <style include="shared-styles">
            .user-chart{
                font-size:14px;
                
            }
            
            /*chart heading styling*/
            .heading-row{
                overflow:auto;
                width:100%;
                display:table;
                border-bottom:1px solid #dcdcdc;
                padding-bottom:10px;
                padding-left:10px;
            }

            .heading-row > div {
                display:table-cell;
                font-weight:bold;
            }
            .errors-heading{
                width:100px;
            }
            .last-seen-heading{
                width:145px;
            }
            /*chart contents styling*/
            .user-info-row{
              
                padding-left: 10px;
                width: 100%;
                display:table;
                border-bottom: 1px solid #efefef;
                
            }

        

            

             .user-info-row:hover{
                background:#eeeeef;
            }
            
            .user-info-row > div{
                display:table-cell;
                padding-top:12px;
                padding-bottom:12px;
                padding-right:0px;
                
            }
            /* indivdual segment background color
            .user-info-row{
                background-color: #F0F0F0;
            }

            .user-info-row:nth-child(odd){
                background-color:#ddd;
            } */

            .errors-item{
                width:100px;
            }
            .last-seen-item{
                width:145px;
            }


            
            .spinner{
                text-align:center;
            }

            paper-spinner{
                padding: 23px;
            }
            
            
            a{
            text-decoration:none;
            color: inherit;
            cursor: auto;
          }
      
          </style>

            <div class="user-chart"> 
                
                <div class="heading-row">
                    <div class="headings errors-heading">Errors</div>
                    <div class="headings last-seen-heading">Last Seen</div>
                    <div class="headings user-heading">User</div>
                </div>

                <template is="dom-if" if="{{!users.length}}">
                    <div class="spinner">
                        <paper-spinner active></paper-spinner>
                    </div>
                </template>
                
                <template is="dom-if" if="{{users.length}}">
                    <template is="dom-repeat" items="{{users}}" class="single-user">
                        <a href="[[rootPath]]userdetail/[[item._id]]">
                            <div  class="user-info-row">
                                <div class="info-item errors-item">[[item.errorNo]]tba</div>
                                <div class="info-item last-seen-item">[[item.lastSeen]]tba</div>
                                <div class="info-item stand-out">[[item.name]] [[item.version]]</div>      
                            </div>  
                        </a> 
                    </template>
                  </template>
                

            </div>
       
   
     
  
      `;
  }

  static get properties() {
    return {
      users: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    var db = firebase.firestore();
    this.set('users', []);
    var collectorRef = db.collection("Projects").doc("TestingProject").collection("collector_OS"); //in future once errors amount is added into db change order by to errors amount -hm

    collectorRef.onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let newElem = this.makeElem(change);
          this.push('users', newElem);
          console.log("New!", change);
        }

        if (change.type === "modified") {
          let modifiedElement = this.makeElem(change);
          let index = this.getElemIndex(change.doc.id);
          this.set(`users.${index}`, modifiedElement);
          console.log("Modified!", change);
        }

        if (change.type === "removed") {
          let deletedElement = this.getElemIndex(change.doc.id);
          this.splice('users', deletedElement, 1);
          console.log("Removed!", change);
        }
      });
    });
  }

  makeElem(change) {
    let data = change.doc.data();
    data.$id = change.doc.id;
    return data;
  }

  getElemIndex(id) {
    let index = this.elems.findIndex(user => {
      if (user.$id == id) {
        return true;
      }
    });
    return index;
  } //routing


  _clickBrowser() {
    console.log(arguments);
    this.set('route.path', 'browserdetail');
  }

  _clickInstance() {
    this.set('route.path', 'userdetail');
  }

}

window.customElements.define('ss-by-user-chart', SSByUserChart);