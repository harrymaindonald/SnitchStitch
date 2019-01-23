/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<iron-iconset-svg name="ss-icons" size="24">
  <svg>
    <defs>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <g id="menu">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </g>
      <g id="dashboard">
       <path d="m 12,2.666665 c -6.6275,0 -12,5.3725 -12,12 0,2.2 0.59375,4.26084 1.6275,6.03334 0.23375,0.40083 0.6791667,0.63333 1.1433333,0.63333 H 21.229167 c 0.464166,0 0.909583,-0.2325 1.143333,-0.63333 1.03375,-1.7725 1.6275,-3.83334 1.6275,-6.03334 0,-6.6275 -5.3725,-12 -12,-12 z m 0,2.66667 c 0.612917,0 1.1075,0.42208 1.263333,0.98542 -0.04625,0.0942 -0.11,0.17625 -0.14375,0.27791 l -0.384166,1.15292 c -0.21375,0.14542 -0.457084,0.25042 -0.735,0.25042 -0.73625,0 -1.333334,-0.59709 -1.333334,-1.33334 0,-0.73625 0.596667,-1.33333 1.332917,-1.33333 z m -8,12 c -0.73625,0 -1.3333333,-0.59708 -1.3333333,-1.33333 0,-0.73625 0.5970833,-1.33334 1.3333333,-1.33334 0.73625,0 1.3333333,0.59709 1.3333333,1.33334 0,0.73625 -0.5970833,1.33333 -1.3333333,1.33333 z m 2,-6.66667 c -0.73625,0 -1.3333333,-0.59708 -1.3333333,-1.33333 0,-0.73625 0.5970833,-1.33333 1.3333333,-1.33333 0.73625,0 1.3333333,0.59708 1.3333333,1.33333 0,0.73625 -0.5970833,1.33333 -1.3333333,1.33333 z m 10.282083,-3.01708 -2.555416,7.66667 c 0.570416,0.48916 0.94,1.20625 0.94,2.01708 0,0.48833 -0.140834,0.93958 -0.37,1.33333 H 9.7033333 c -0.2291666,-0.39375 -0.37,-0.845 -0.37,-1.33333 0,-1.41417 1.1041667,-2.55958 2.4958337,-2.64958 L 14.385,7.016665 c 0.17375,-0.52333 0.73875,-0.81041 1.265,-0.63208 0.52375,0.17458 0.80625,0.74125 0.632083,1.265 z m 0.610834,2.38333 0.646666,-1.93958 c 0.144584,-0.0537 0.297084,-0.0929 0.460417,-0.0929 0.73625,0 1.333333,0.59709 1.333333,1.33334 0,0.73625 -0.597083,1.33333 -1.333333,1.33333 -0.474167,-4.2e-4 -0.870417,-0.26167 -1.107083,-0.63417 z M 20,17.333335 c -0.73625,0 -1.333333,-0.59708 -1.333333,-1.33333 0,-0.73625 0.597083,-1.33334 1.333333,-1.33334 0.73625,0 1.333333,0.59709 1.333333,1.33334 0,0.73625 -0.597083,1.33333 -1.333333,1.33333 z"></path>
      </g>
      <g id="browser">
      <path d="M 6.362997,10.137943 2.6661684,4.4569932 C 4.9694281,1.5923232 8.4243176,0.01481323 11.956628,2.9323051e-4 14.003432,-0.01420677 16.093785,0.50839323 17.995426,1.6068332 c 2.100031,1.21942 3.696829,2.97113 4.712973,4.98415 l -9.934017,-0.52261 C 9.96305,5.9038432 7.2872041,7.4861932 6.362997,10.137943 Z m 1.5919589,1.86301 c 0,2.2356 1.809704,4.04538 4.0452211,4.04538 2.235516,0 4.04522,-1.80978 4.04522,-4.04538 0,-2.2356098 -1.809704,-4.0453798 -4.04522,-4.0453798 -2.2355171,0 -4.0452211,1.80493 -4.0452211,4.0453798 z M 23.192277,7.6845832 16.4325,8.0329932 c 1.833898,2.1436598 1.862931,5.2357698 0.319359,7.6068698 l -5.424273,8.34238 c 2.250033,0.12098 4.567809,-0.3726 6.66784,-1.59202 5.196851,-3.00016 7.30172,-9.29083 5.196851,-14.7056398 z M 6.4694501,14.304303 1.9548676,5.4247832 C 0.7209784,7.3119832 5.0559873e-8,9.5766232 5.0559873e-8,12.000953 5.0559873e-8,18.001273 4.3936131,22.970903 10.137246,23.851593 l 3.082303,-6.03904 c -2.787137,0.52261 -5.4774995,-1.0065 -6.7500989,-3.50825 z"></path>
      </g>
      <g id="install">
      <path d="m 10.125,0 h 3.75 C 14.498438,0 15,0.50156 15,1.125 V 9 h 4.110937 c 0.834375,0 1.251563,1.00781 0.660938,1.59844 l -7.129688,7.13437 c -0.351562,0.35157 -0.928125,0.35157 -1.279687,0 L 4.2234375,10.59844 C 3.6328125,10.00781 4.05,9 4.884375,9 H 9 V 1.125 C 9,0.50156 9.5015625,0 10.125,0 Z M 24,17.625 v 5.25 C 24,23.49844 23.498438,24 22.875,24 H 1.125 C 0.5015625,24 0,23.49844 0,22.875 v -5.25 C 0,17.00156 0.5015625,16.5 1.125,16.5 h 6.8765625 l 2.2968745,2.29687 c 0.942188,0.94219 2.460938,0.94219 3.403125,0 L 15.998437,16.5 H 22.875 c 0.623438,0 1.125,0.50156 1.125,1.125 z m -5.8125,4.125 c 0,-0.51563 -0.421875,-0.9375 -0.9375,-0.9375 -0.515625,0 -0.9375,0.42187 -0.9375,0.9375 0,0.51562 0.421875,0.9375 0.9375,0.9375 0.515625,0 0.9375,-0.42188 0.9375,-0.9375 z m 3,0 c 0,-0.51563 -0.421875,-0.9375 -0.9375,-0.9375 -0.515625,0 -0.9375,0.42187 -0.9375,0.9375 0,0.51562 0.421875,0.9375 0.9375,0.9375 0.515625,0 0.9375,-0.42188 0.9375,-0.9375 z"></path>
      </g>
      <g id="delete">
      <path d="M 12,0 C 5.372613,0 0,5.37256 0,12 0,18.62744 5.372613,24 12,24 18.627387,24 24,18.62739 24,12 24,5.37261 18.627435,0 12,0 Z m 6.295548,5.70445 c 3.166839,3.16684 3.387097,8.00715 1.0005,11.40179 L 6.89371,4.704 C 10.290677,2.31581 15.130452,2.5394 18.295548,5.70445 Z M 5.704452,18.29555 C 2.537613,15.12871 2.317355,10.2884 4.703952,6.89376 L 17.10629,19.296 C 13.709371,21.68419 8.869548,21.46065 5.704452,18.29555 Z"></path>
      </g>
      <g id="spider">
      <path d="M 6.035156 6.863281 L 7.070312 7.21875 L 7.257812 7.21875 L 7.464844 6.148438 C 7.496094 6 7.539062 5.835938 7.59375 5.664062 L 6.785156 4 L 7.734375 1.070312 C 7.847656 0.726562 7.664062 0.355469 7.332031 0.242188 L 6.726562 0.0351562 C 6.390625 -0.0820312 6.027344 0.105469 5.917969 0.449219 L 4.882812 3.636719 C 4.777344 3.964844 4.800781 4.324219 4.953125 4.636719 Z M 22.894531 14.328125 L 20.785156 11.085938 C 20.550781 10.71875 20.152344 10.5 19.722656 10.5 L 16.609375 10.5 L 19.367188 9.5 C 19.636719 9.410156 19.867188 9.226562 20.023438 8.984375 L 22.164062 5.6875 C 22.359375 5.382812 22.28125 4.976562 21.988281 4.777344 L 21.457031 4.410156 C 21.164062 4.210938 20.765625 4.292969 20.570312 4.59375 L 18.550781 7.703125 L 16.136719 8.53125 L 14.695312 8.53125 L 14.28125 6.40625 C 14.191406 5.953125 13.585938 3.9375 11.5 3.9375 C 9.414062 3.9375 8.808594 5.953125 8.71875 6.40625 L 8.304688 8.53125 L 6.863281 8.53125 L 4.449219 7.703125 L 2.429688 4.59375 C 2.234375 4.292969 1.835938 4.210938 1.542969 4.410156 L 1.011719 4.777344 C 0.71875 4.976562 0.640625 5.382812 0.835938 5.6875 L 2.976562 8.984375 C 3.132812 9.226562 3.363281 9.410156 3.632812 9.5 L 6.390625 10.5 L 3.277344 10.5 C 2.847656 10.5 2.449219 10.71875 2.214844 11.085938 L 0.105469 14.328125 C -0.0898438 14.632812 -0.0078125 15.039062 0.285156 15.238281 L 0.816406 15.605469 C 1.109375 15.804688 1.507812 15.722656 1.703125 15.421875 L 3.617188 12.46875 L 5.496094 12.46875 L 3.070312 16.460938 C 2.941406 16.667969 2.875 16.910156 2.875 17.15625 L 2.875 20.34375 C 2.875 20.707031 3.160156 21 3.515625 21 L 4.152344 21 C 4.503906 21 4.792969 20.707031 4.792969 20.34375 L 4.792969 17.34375 L 7.75 12.484375 C 7.710938 13.058594 7.667969 13.636719 7.667969 14.214844 C 7.667969 16.390625 9.292969 18.375 11.5 18.375 C 13.707031 18.375 15.332031 16.390625 15.332031 14.214844 C 15.332031 13.636719 15.289062 13.058594 15.25 12.484375 L 18.207031 17.34375 L 18.207031 20.34375 C 18.207031 20.707031 18.496094 21 18.847656 21 L 19.484375 21 C 19.839844 21 20.125 20.707031 20.125 20.34375 L 20.125 17.15625 C 20.125 16.910156 20.058594 16.667969 19.929688 16.460938 L 17.503906 12.46875 L 19.382812 12.46875 L 21.296875 15.421875 C 21.492188 15.722656 21.890625 15.804688 22.183594 15.605469 L 22.714844 15.238281 C 23.007812 15.039062 23.089844 14.632812 22.894531 14.328125 Z M 16.214844 4 L 15.40625 5.664062 C 15.460938 5.835938 15.503906 6 15.535156 6.148438 L 15.742188 7.21875 L 15.929688 7.21875 L 16.964844 6.863281 L 18.046875 4.636719 C 18.199219 4.324219 18.222656 3.964844 18.117188 3.636719 L 17.082031 0.449219 C 16.972656 0.105469 16.609375 -0.0820312 16.273438 0.0351562 L 15.667969 0.242188 C 15.335938 0.355469 15.152344 0.726562 15.265625 1.070312 Z M 16.214844 4 "></path>
      </g>
      <g id="alert">
      <path d="M 23.625 12 C 23.625 18.421875 18.417969 23.625 12 23.625 C 5.582031 23.625 0.375 18.421875 0.375 12 C 0.375 5.582031 5.582031 0.375 12 0.375 C 18.417969 0.375 23.625 5.582031 23.625 12 Z M 12 14.34375 C 10.808594 14.34375 9.84375 15.308594 9.84375 16.5 C 9.84375 17.691406 10.808594 18.65625 12 18.65625 C 13.191406 18.65625 14.15625 17.691406 14.15625 16.5 C 14.15625 15.308594 13.191406 14.34375 12 14.34375 Z M 9.953125 6.59375 L 10.300781 12.96875 C 10.316406 13.265625 10.5625 13.5 10.863281 13.5 L 13.136719 13.5 C 13.4375 13.5 13.683594 13.265625 13.699219 12.96875 L 14.046875 6.59375 C 14.066406 6.269531 13.808594 6 13.484375 6 L 10.515625 6 C 10.191406 6 9.933594 6.269531 9.953125 6.59375 Z M 9.953125 6.59375 "></path>
      </g>
      <g id="trash-alt">
      <path d="M 0 3.609375 L 0 2.40625 C 0 1.835938 0.476562 1.375 1.070312 1.375 L 6.070312 1.375 L 6.492188 0.570312 C 6.667969 0.21875 7.039062 0 7.445312 0 L 12.550781 0 C 12.957031 0 13.324219 0.21875 13.507812 0.570312 L 13.929688 1.375 L 18.929688 1.375 C 19.523438 1.375 20 1.835938 20 2.40625 L 20 3.609375 C 20 3.894531 19.757812 4.125 19.464844 4.125 L 0.535156 4.125 C 0.242188 4.125 0 3.894531 0 3.609375 Z M 18.570312 6.015625 L 18.570312 19.9375 C 18.570312 21.078125 17.613281 22 16.429688 22 L 3.570312 22 C 2.386719 22 1.429688 21.078125 1.429688 19.9375 L 1.429688 6.015625 C 1.429688 5.730469 1.667969 5.5 1.964844 5.5 L 18.035156 5.5 C 18.332031 5.5 18.570312 5.730469 18.570312 6.015625 Z M 6.429688 8.9375 C 6.429688 8.558594 6.105469 8.25 5.714844 8.25 C 5.320312 8.25 5 8.558594 5 8.9375 L 5 18.5625 C 5 18.941406 5.320312 19.25 5.714844 19.25 C 6.105469 19.25 6.429688 18.941406 6.429688 18.5625 Z M 10.714844 8.9375 C 10.714844 8.558594 10.394531 8.25 10 8.25 C 9.605469 8.25 9.285156 8.558594 9.285156 8.9375 L 9.285156 18.5625 C 9.285156 18.941406 9.605469 19.25 10 19.25 C 10.394531 19.25 10.714844 18.941406 10.714844 18.5625 Z M 15 8.9375 C 15 8.558594 14.679688 8.25 14.285156 8.25 C 13.894531 8.25 13.570312 8.558594 13.570312 8.9375 L 13.570312 18.5625 C 13.570312 18.941406 13.894531 19.25 14.285156 19.25 C 14.679688 19.25 15 18.941406 15 18.5625 Z M 15 8.9375 "></path>
      </g>
      <g id="ignore">
      <path d="M 11.449219 16.078125 L 12.75 17.988281 C 12.332031 18.027344 11.917969 18.046875 11.5 18.046875 C 6.714844 18.046875 2.515625 15.425781 0.265625 11.5 C -0.0898438 10.882812 -0.0898438 10.117188 0.265625 9.5 C 1.226562 7.828125 2.539062 6.390625 4.101562 5.292969 L 6.378906 8.640625 C 6.179688 9.222656 6.070312 9.847656 6.070312 10.5 C 6.070312 13.566406 8.46875 16.046875 11.449219 16.078125 Z M 22.734375 11.5 C 21.46875 13.703125 19.589844 15.496094 17.335938 16.644531 L 17.335938 16.648438 L 18.992188 19.074219 C 19.296875 19.519531 19.191406 20.132812 18.757812 20.445312 L 18.234375 20.820312 C 17.800781 21.132812 17.203125 21.023438 16.898438 20.578125 L 4.007812 1.925781 C 3.703125 1.480469 3.808594 0.867188 4.242188 0.554688 L 4.765625 0.179688 C 5.199219 -0.132812 5.796875 -0.0273438 6.101562 0.421875 L 8.136719 3.398438 C 9.210938 3.109375 10.339844 2.953125 11.5 2.953125 C 16.285156 2.953125 20.484375 5.574219 22.734375 9.5 C 23.089844 10.117188 23.089844 10.882812 22.734375 11.5 Z M 16.929688 10.5 C 16.929688 7.417969 14.5 4.921875 11.5 4.921875 C 10.785156 4.921875 10.101562 5.0625 9.472656 5.324219 L 10.246094 6.433594 C 11.277344 6.097656 12.441406 6.179688 13.457031 6.738281 L 13.453125 6.738281 C 12.511719 6.738281 11.746094 7.523438 11.746094 8.492188 C 11.746094 9.460938 12.507812 10.25 13.453125 10.25 C 14.398438 10.25 15.164062 9.460938 15.164062 8.492188 C 15.902344 9.90625 15.816406 11.6875 14.835938 13.042969 L 15.605469 14.152344 C 16.429688 13.175781 16.929688 11.898438 16.929688 10.5 Z M 10.460938 14.632812 L 7.367188 10.089844 C 7.167969 12.238281 8.535156 14.121094 10.460938 14.632812 Z M 10.460938 14.632812 "></path>
      </g>

    </defs>
  </svg>
</iron-iconset-svg>`;


document.head.appendChild($_documentContainer.content);