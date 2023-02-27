// tema dack
  function togle() {
    
    const toggleThemeBtn = document.querySelector('.toggle-theme');
    toggleThemeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('dark');
    });
}
togle()

 