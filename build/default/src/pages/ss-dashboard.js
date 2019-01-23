/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import '../shared-styles.js';
import '../elements/ss-linechart.js';
import '../elements/ss-affected-browsers.js';
import '../elements/ss-sort-by-project.js';
import '../elements/ss-top-occurances.js';
import "../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../node_modules/@polymer/paper-item/paper-item.js"; // import '../elements/ss-sort-by-project.js';

class SSDashboard extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      
        :host {
          display: block;
          overflow:auto;
        }
   
        .top-bar{
          display:flex;        
          flex-direction: row;   
        }
        
        .titles{
          width: 30%;
          align-self:center;
          margin-left: 1rem;
          display:flex;
          font-style:italic;
       
        }

        .title{
            font-weight:bold;
           
        }
        
        .quick-info{
            width:40%;
            display:flex;
            flex-flow:row;
            justify-content:center;
            align-items:center;
            border:1px solid #e5e5e5;

        }

        .stats{
          text-align:center;
          width: 50%;
        }
        
        

        .main-content{
        margin: 0px 24px 24px 24px;
        padding: 30px;
        color: #757575;
        height: 440px;
        border-radius: 2px;
        background-color: #FFFFFF;
        box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .more-info{
          display:flex;
          flex-flow:row;
      }
        
      .more-info-item{
          margin-top:0;
          flex-basis: 50%;
          
      }

      .more-info-item h3{
          margin-top:0;
          border-bottom: 1px solid #f7f7f7;
      }

      .top-occurances{
          margin-right:12px;
          
      }
      
      .affected-browsers{
          margin-left:12px;
      }

      .list{
          width:100%;
          font-size: 14px;
         
      }

      .list a{
          text-decoration: none;
          padding-left:5px;
      }

      .message{
          width:80%;
          text-align:left;   
      }
      

      
      .count{
          text-align:right;
      }

      .select-project{
          padding-left: 10px;
          width:30%;
         
        text-align: left;
      }
      
      iron-icon{
          padding-bottom:5px;
      }

      #user{
          align-self:center;
          padding-left:10px;
          font-size: 20px
      }
    
      @media only screen and (max-width: 640px){
          .stats{
            font-size: 14px;
          }
        }

         @media only screen and (max-width: 1050px){
          .more-info{
            display:block;
           
            }

            .top-bar{
                display:block; 
            }
            .quick-info{
                width:100%;
            }

          .top-occurances{
          margin-right:24px;  
            }

        .affected-browsers{
          margin-left:24px;
            }

      

         }

      </style>

<app-route route="{{route}}" pattern="/:ID" data="{{routeData}}" tail="{{subroute}}">
    <div class="wrapper">
        <div class="card top-bar">
            <div class="titles">       
                <h2>Hello,</h2>
                <span class="stand-out" id="user"></span>
            </div> 
            <div class="select-project">
                <p class="title">Select Project:</p>
<ss-sort-by-project></ss-sort-by-project>
              <!--   <select id="project" name="project">        
                    <option value=""></option>
                    <option value="UFG">UFG</option>
                    <option value="Actively">Actively</option>
                    <option value="Leigh Jackson">Leigh Jackson</option>
                </select> -->

            </div>
            <div class="quick-info">
                    <div class="stats">
                        <div class="title"><p>Total Errors</p></div>
                        <div class="value-info stand-out"><p id="totalInfo">15</p></div>   
                    </div>

                    <div class="stats">
                        <div class="title"><p>Users Impacted</p></div>
                        <div class="value-info stand-out"><p id="usersInfo">4</p></div>
                    </div>
                </div>
         
            </div>


             <div class="more-info">
            <div class="card more-info-item top-occurances">
                <ss-top-occurances></ss-top-occurances>
            </div>

            <div class="card more-info-item affected-browsers">
               <ss-affected-browsers></ss-affected-browsers>
            </div>
        </div>

        <div class="main-content">
            <ss-linechart></ss-linechart>
        </div>

       
    </div> 
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
    const username = this.shadowRoot.querySelector('#user');
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email);
        username.innerHTML = user.email;
      } else {// No user is signed in.
      }
    });
    var db = firebase.firestore();
    this.set('projects', []);
    db.collection("Projects").onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
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
    let index = this.elems.findIndex(browser => {
      if (browser.$id == id) {
        return true;
      }
    });
    return index;
  }
  /* when a project from the select drop down is selected, it will find its information based on project name selected and display the data in html*/


  _change() {
    console.log("pressed");
    var projects = [{
      project: "Actively",
      totalUsersImpacted: 34,
      totalErrorsOccured: 12
    }, {
      project: "Leigh Jackson",
      totalUsersImpacted: 3,
      totalErrorsOccured: 58
    }, {
      project: "UFG",
      totalUsersImpacted: 20,
      totalErrorsOccured: 44
    }];
    var i;
    var selectedProject = this.shadowRoot.querySelector('#project').value;

    for (i = 0; i < projects.length; i++) {
      if (projects[i].project == selectedProject) {
        console.log(projects[i].project + " " + projects[i].totalErrorsOccured + " " + projects[i].totalUsersImpacted);
        this.shadowRoot.querySelector('#totalInfo').innerHTML = projects[i].totalErrorsOccured;
        this.shadowRoot.querySelector('#usersInfo').innerHTML = projects[i].totalUsersImpacted;
      }
    }
  }

}

window.customElements.define('ss-dashboard', SSDashboard);