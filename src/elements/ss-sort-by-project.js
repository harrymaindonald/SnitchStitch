import {
    html,
    PolymerElement
  } from '@polymer/polymer/polymer-element.js';
  
  import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
  class SSSortByProject extends PolymerElement {
  
    static get template() {
        return html `
        <style>
           
        span{
            font-weight:bold;
            
        }
            
        </style>
   
   <paper-dropdown-menu label="Projects">
                    <paper-listbox slot="dropdown-content" selected="1">
                    <template is="dom-repeat" items="{{projects}}" class="single-user">
                            <paper-item>[[item._id]]</paper-item>
                          
                    </template>       
                       
                    </paper-listbox>
                </paper-dropdown-menu>
    `;
    }
    static get properties() {
        return {
            projects: {
                type: Array
                
            }

        };
    }

    connectedCallback() {
        super.connectedCallback();

    
       

          this.set('projects',[]);
        
    
         firebase.firestore().collection("Projects")
          .onSnapshot((querySnapshot) => {
              querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                  let newElem = this.makeElem(change);
                  this.push('projects', newElem);
                }
                if (change.type === "modified") {
                  let modifiedElement = this.makeElem(change);
                  let index = this.getElemIndex(change.doc.id);
                  this.set(`projects.${index}`, modifiedElement);
                }
                if (change.type === "removed") {
                  let deletedElement = this.getElemIndex(change.doc.id);
                  this.splice('projects', deletedElement, 1);
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
        let index = this.elems.findIndex((browser) => {
          if(browser.$id == id) {
            return true;
          }
        });
        return index;
      }
  
  
  }
  
  window.customElements.define('ss-sort-by-project', SSSortByProject);