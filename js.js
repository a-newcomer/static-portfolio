window.onload = function() {
	
            let mainNav = document.getElementById('js-menu');
            let navBarToggle = document.getElementById('js-navbar-toggle');
            let menuHam = document.querySelector( '#js-navbar-toggle i.fa-bars' );
            let menuTimes = document.querySelector( '#js-navbar-toggle i.fa-times' );

            navBarToggle.addEventListener('click', function () {

                 if (window.innerWidth < 768) {
                        //This drops the menu down at mobile size
                        mainNav.classList.toggle('active');
                        //these two switch out the menu toggle icon bars and x
                        menuHam.classList.toggle('switchBars');
                        menuTimes.classList.toggle('switchTimes');
                  }
                        
             });

            let navBar = document.querySelector( '.navbar' );

            window.addEventListener('scroll', function () {

                  if(window.pageYOffset > 70 && window.innerWidth > 768) {
                       navBar.classList = 'navbar small'; 
                  } else {
                        navBar.classList = 'navbar'; 
                  }

            });

        }