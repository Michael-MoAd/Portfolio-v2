// // Smooth scrolling for anchor links
// document.querySelectorAll('a.nav-link').forEach(anchor => {
//    anchor.addEventListener('click', function(e) {
//        e.preventDefault();

//        const targetId = this.getAttribute('href').substring(1);
//        const targetSection = document.getElementById(targetId);

//        if (targetId !== '') {
//            if (targetId === 'home') {
//                window.scrollTo({
//                    top: 0,
//                    behavior: 'smooth'
//                });
//            } else {
//                window.scrollTo({
//                    top: targetSection.offsetTop,
//                    behavior: 'smooth'
//                });
//            }

//            // Set active class for clicked link
//            document.querySelectorAll('a.nav-link').forEach(link => {
//                link.classList.remove('active');
//            });
//            this.classList.add('active');
//        }
//    });
// });

// // Highlight active link based on scroll position
// window.addEventListener('scroll', () => {
//    const fromTop = window.scrollY;

//    document.querySelectorAll('a.nav-link').forEach(link => {
//        const section = document.getElementById(link.getAttribute('href').substring(1));

//        if (section) {
//            if (
//                (section.offsetTop <= fromTop + 1) &&
//                (section.offsetTop + section.offsetHeight > fromTop)
//            ) {
//                link.classList.add('active');
//            } else {
//                link.classList.remove('active');
//            }
//        } else {
//            if (fromTop === 0) {
//                link.classList.add('active');
//            } else {
//                link.classList.remove('active');
//            }
//        }
//    });
// });
