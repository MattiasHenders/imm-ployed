// Scroll to the top feature
    mybutton = document.getElementById("top");

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

// Redirecting to creating a new post
    function createNew(){
        window.location.href = "employer_jobpost.html";
    }
