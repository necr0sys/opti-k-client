const detect = (id) => {
  const element = document.getElementById(id);
  const position = element.getBoundingClientRect();
  if (position.top >= 0 && (position.bottom - element.offsetHeight) + 100 <= window.innerHeight) {
    return true;
  }
  return false;
};

export default detect;
