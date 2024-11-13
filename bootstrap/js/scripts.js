/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function fetchCatImage(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cataas.com//cat?type=xsmall", true)
    xhr.responseType = "blob";
    
    xhr.onload = function(){
      if (xhr.status === 200) {
        const imageURL = URL.createObjectURL(xhr.response)
        const catDiv = document.getElementById("CatCard")
        catDiv.innerHTML = `<img src="${imageURL}" alt="random cat" />`
      }
      else {
        console.error("failed to load image")
      }
    };
    xhr.send();
    
  }
  
  window.onload = function(){ 
    fetchCatImage();
  }

