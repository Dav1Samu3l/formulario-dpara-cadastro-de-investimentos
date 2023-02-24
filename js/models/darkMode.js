// tema dack
  function togle() {
    const toggleThemeBtn = document.querySelector('.toggle-theme');
    toggleThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
}
togle()

