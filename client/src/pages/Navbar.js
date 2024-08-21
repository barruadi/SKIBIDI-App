// external.js
export function initialize() {
  document.querySelectorAll('.clickable-div').forEach(element => {
    element.addEventListener('click', () => {
      alert('Element clicked!');
    });
  });
}
