         // Hero Section JS
        document.addEventListener('DOMContentLoaded', function() {
            // You can add any hero-specific JS here if needed
        });

        
        //About Us section
// Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // You can use AOS or other animation libraries here
            // Example with AOS:
            // AOS.init({
            //     duration: 800,
            //     easing: 'ease-in-out',
            //     once: true
            // });
            
            // Or with basic JavaScript animations:
            const aboutElements = document.querySelectorAll('.about-content, .about-image');
            aboutElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });