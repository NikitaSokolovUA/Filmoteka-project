import { Spinner } from 'spin.js';

const target = document.querySelector('.spinner__wrapper');
const opts = {
  lines: 10, // The number of lines to draw
  length: 40, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 0.2, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 2, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#d4ff00', // CSS color or array of colors
  fadeColor: '#0000ff', // CSS color or array of colors
  top: '35%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
//
// // ;
// export { spinner };

const spinner = new Spinner(opts);
export { spinner, target };
