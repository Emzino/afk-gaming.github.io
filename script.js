

// Get button
let mybutton = document.getElementById("myBtn");

// Scroll Func
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    mybutton.style.opacity = "100%"

  } else {
    mybutton.style.opacity = "0%"

  }
}

function topFunction() {
  mybutton.style.transform = "translatex(225px)"
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 
const filterBtns = document.querySelectorAll(".filter-btn");
const postItems = document.querySelectorAll(".post-item");

// Add the active class to the "All" filter button by default
filterBtns[0].classList.add("active");

filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    // Remove the active class from all buttons
    filterBtns.forEach(btn => {
      btn.classList.remove("active");
    });
    // Add the active class to the clicked button
    this.classList.add("active");
    
    // Get the filter from the clicked button
    const filter = this.dataset.filter;
    
    // Filter the post items
    postItems.forEach(post => {
      if (filter === "all") {
        post.style.display = "flex";
      } else {
        if (post.dataset.category === filter) {
          post.style.display = "flex";
        } else {
          post.style.display = "none";
        }
      }
    });
  });
});



//#endregion

filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    // Get the filter from the clicked button
    const filter = this.dataset.filter;
    
    // Update the header based on the filter
    const header = document.querySelector("#header1");
    header.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
    
    // Filter the post items
    const postItems = document.querySelectorAll(".post-item");
    postItems.forEach(post => {
      if (filter === "all") {
        post.style.display = "flex";
      } else {
        if (post.dataset.category === filter) {
          post.style.display = "flex";
        } else {
          post.style.display = "none";
        }
      }
    });
  });
});

function Clone() {


  var clone = document.getElementById('advertisements').cloneNode(true); // "deep" clone
  document.getElementById("advertisements").appendChild(clone);
}


function Delete2(button) {
  var parent = button.parentNode;
  var grand_father = parent.parentNode;
  document.getElementById("advertisements").style.backgroundColor = "white";
  document.getElementById("advertisements").style.backgroundSize = "contain";
  document.getElementById("advertisements").style.backgroundRepeat = "no-repeat";
  document.getElementById("advertisements").style.backgroundPositionX = "center";
  document.getElementById("advertisements").style.opacity= "0%";
  document.getElementById("advertisements").style.height= "0px";

}


function Delete(button) {
  var parent = button.parentNode;
  var grand_father = parent.parentNode;
  document.getElementById("advertisement").style.backgroundColor = "white";
  document.getElementById("advertisement").style.backgroundSize = "contain";
  document.getElementById("advertisement").style.backgroundRepeat = "no-repeat";
  document.getElementById("advertisement").style.backgroundPositionX = "center";
  document.getElementById("advertisement").style.opacity= "0%";
  document.getElementById("advertisement").style.height= "0px";

}





