const darkMode = () => {
  const toggleBtn = document.querySelectorAll(".header__sun");
//   state
  const theme= localStorage.getItem('theme');
// on-mount 
theme && document.body.classList.add('light-mode');
// handler
const handleTheme=()=>{
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
}
// events
  toggleBtn.forEach(btn => 
    btn.addEventListener("click", handleTheme )
  );
};

export default darkMode;
