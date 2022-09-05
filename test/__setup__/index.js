const react = document.createElement('div');
react.id = 'react';
react.style.height = '100vh';
document.body.appendChild(react);

window.matchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});
