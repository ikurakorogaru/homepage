document.querySelectorAll('*').forEach(el => {
  if ([...el.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim())) {
    el.classList.add('text-blend');
  }
});
