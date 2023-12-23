//  Show or hide the "Scroll to Top" button based on the scroll position
window.onscroll = function() {
    toggleScrollToTop();
    updateScrollProgress();
  };
  
  function toggleScrollToTop() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("scrollProgress").style.width = scrollPercentage + "%";
  }  



  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');
  
  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
      if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#161616';
          body.style.color = 'white';
          body.style.transition = '2s';
          
      }else{
        body.style.background = '#d1d1d1';
        body.style.color = 'black';
        body.style.transition = '2s';
      }
  });
  