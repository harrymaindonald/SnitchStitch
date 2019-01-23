/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures, setRootPath } from "../node_modules/@polymer/polymer/lib/utils/settings.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import './elements/ss-footer.js';
import "../node_modules/@polymer/paper-button/paper-button.js";
import './ss-icons.js';
import "../node_modules/@firebase/app/dist/index.esm.js";
import "../node_modules/@firebase/auth/dist/auth.esm.js"; // Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.

setPassiveTouchGestures(true); // Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.

setRootPath(MyAppGlobals.rootPath);

class SSApp extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        :host {
          --app-primary-color: #14213D;
          --app-secondary-color: black;
          --app-drawer-width: 196px;
          --stand-out-text-color: #FCA311;
          --app-drawer-content-container {
            background-color: lime;
          }
          display: block;
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        
        app-header {
          color: #fff;
          font-family:'Viga', sans-serif;
          background-color: var(--app-primary-color);
        }
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }    
        iron-selector iron-icon{
          margin-right: 8px;
        }
        app-drawer {
          --app-drawer-content-container: {
            /* background-color: #BBDEFB; */
          }
        }

        .drawer{
          display:none;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list a {
          display: block;
          padding: 0 24px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 80px;
          font-family:'Viga', sans-serif;
          
        }
        .drawer-list a.iron-selected {
          background-color: #E5E5E5;     
        }   
        .drawer-list a.iron-selected iron-icon{
          color:#f04c36;
        }    
        #titlebar{
          text-align:center;
        }
        .botborder{
          border: none;
          position: relative;
         
        }

      
        .botborder:hover{
          border: none;
        }
        .botborder::after{
          content: '';
          position: absolute;
          width: 0px;
          height: 2px;
          left: 50%;
          bottom:0;
          background-color: black;
          transition: all ease-in-out .2s;
        }
        .botborder:hover::after{
          width:100%;
          left: 0;
        }        
        app-toolbar img{
          max-width:100%;
          height:auto;
          margin-top:24px;
          /* border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
        }
        
        .sign-out{
          font-size: 1.1rem;
          
        }

        .sign-out:hover{
          color:#ff730f;
         
        }
     

      .main-content{
        height:100%;
        margin:0;
        overflow:hidden;
      }

      a{
        text-decoration:none;
        color:white;
      }
     
      

   

        .hide{
                display: none;
            }
      </style>


      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" align="start" swipe-open="[[narrow]]">
          <app-toolbar>
          <img src="./images/logo.svg"/>
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a class="botborder" name="dashboard" href="[[rootPath]]dashboard"><iron-icon icon="ss-icons:dashboard"></iron-icon>Dashboard</a>   
            <a class="botborder" name="dailysummary" href="[[rootPath]]dailysummary"><iron-icon icon="ss-icons:install"></iron-icon>Daily Summary</a>              
            <a class="botborder" name="recent" href="[[rootPath]]recent" route="{{subroute}}"><iron-icon icon="error"></iron-icon>Recent Errors</a>
            <a class="botborder" name="byuser" href="[[rootPath]]byuser"><iron-icon icon="pan-tool"></iron-icon>By User</a>             
            <a class="botborder" name="bybrowser" href="[[rootPath]]bybrowser"><iron-icon icon="ss-icons:browser"></iron-icon>By Browser</a>                     
            <a class="botborder" name="byroute" href="[[rootPath]]byroute"><iron-icon icon="today"></iron-icon>By Route</a>          
            <a class="botborder" name="analytics" href="[[rootPath]]analytics"><iron-icon icon="language"></iron-icon><s>Analytics</s></a>          
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="ss-icons:menu" drawer-toggle=""></paper-icon-button>
              <!-- <div id="titlebar" main-title="">Snitch Stitch</div> -->
              <div id="titlebar" main-title="">[[pageTitle]]</div>
              <a href="[[rootPath]]login"><paper-button class="hide sign-out" id="btnLoginLink">Login</paper-button></a>
              <a href="[[rootPath]]login"><paper-button class="hide sign-out" id="btnLogout">Logout</paper-button></a>

            </app-toolbar>
          </app-header>
          <div class="main-content">
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <ss-dashboard name="dashboard"></ss-dashboard>
            <ss-recent name="recent"></ss-recent>
            <ss-by-browser name="bybrowser"></ss-by-browser>
            <ss-by-user name="byuser"></ss-by-user>
            <ss-by-route name="byroute"></ss-by-route>
            <ss-analytics name="analytics"></ss-analytics>
            <ss-install name="install"></ss-install>
            <ss-view404 name="view404"></ss-view404>
            <ss-error-info name="errorinfo"></ss-error-info>
            <ss-daily-summary name="dailysummary"></ss-daily-summary>
            <ss-browser-detail name="browserdetail" route="{{subroute}}"></ss-browser-detail>
            <ss-user-detail name="userdetail"></ss-user-detail>
            <ss-login name="login"></ss-login>
          </iron-pages></div>
          <ss-footer></ss-footer>
        </app-header-layout>
       
      </app-drawer-layout>
     
      
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      userEmail: {
        type: String,
        notify: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    var db = firebase.firestore();
    const settings = {
      /* your settings... */
      timestampsInSnapshots: true
    };
    db.settings(settings);
    const logoutbutton = this.shadowRoot.querySelector('#btnLogout');
    const loginbuttonlink = this.shadowRoot.querySelector('#btnLoginLink');
    logoutbutton.addEventListener('click', this._logout.bind(this));
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email);
        console.log("logged in"); // this.userEmail= user.email;

        logoutbutton.classList.remove('hide');
        loginbuttonlink.classList.add('hide');
      } else {
        console.log('not logged in');
        logoutbutton.classList.add('hide');
        loginbuttonlink.classList.remove('hide');
      }
    });
  }

  _logout() {
    firebase.auth().signOut();
    console.log("you have logged out");
    this.$.drawer.remove();
  }

  static get observers() {
    return ['_routePageChanged(routeData.page)'];
  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'dashboard';
    } else if (['dashboard', 'recent', 'bybrowser', 'byuser', 'byroute', 'analytics', 'install', 'errorinfo', 'dailysummary', 'login', 'browserdetail', 'userdetail'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    } // Close a non-persistent drawer when the page & route are changed.


    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    } // switch(){
    // }
    // this.pageTitle = 'Brwoser detail';

  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'dashboard':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-dashboard.js');
        break;

      case 'recent':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-recent.js');
        break;

      case 'bybrowser':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-by-browser.js');
        break;

      case 'byuser':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-by-user.js');
        break;

      case 'byroute':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-by-route.js');
        break;

      case 'analytics':
        this.pageTitle = 'Snitch Stitch Analytics';
        import('./pages/ss-analytics.js');
        break;

      case 'install':
        this.pageTitle = 'Snitch Stitch';
        import('./pages/ss-install.js');
        break;

      case 'errorinfo':
        this.pageTitle = 'Error Information';
        import('./pages/ss-error-info.js');
        break;

      case 'dailysummary':
        this.pageTitle = 'Daily Summary';
        import('./pages/ss-daily-summary.js');
        break;

      case 'browserdetail':
        this.pageTitle = 'Browser Details';
        import("./pages/ss-browser-detail.js");
        break;

      case 'userdetail':
        this.pageTitle = 'User Details';
        import('./pages/ss-user-detail.js');
        break;

      case 'login':
        this.pageTitle = 'Snitch Stitch - Login';
        import('./pages/ss-login.js');
        break;

      case 'view404':
        this.pageTitle = 'Snitch Stitch - 404';
        import('./pages/ss-view404.js');
        break;
    }
  }

}

window.customElements.define('ss-app', SSApp);