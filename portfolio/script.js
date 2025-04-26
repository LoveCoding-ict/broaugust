function toggleProjectDetail(projectId){
    const projectDetail = document.getElementById(projectId);
    if(projectDetail.style.display === "block"){
        projectDetail.style.display = "none";
    }else{
        projectDetail.style.display = "block";
    }
}
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
