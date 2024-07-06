document.addEventListener('DOMContentLoaded', () => {
    function positionLinks() {
        const links = document.querySelectorAll('.main-links .link-btn');
        const container = document.querySelector('.circular-navbar');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const imgContainer = document.querySelector('.img-container')
        const imgContainerWidth = imgContainer.clientWidth;
        const imgContainerHeight = imgContainer.clientHeight;
    
        const image = document.querySelector('.character');
        const imageHeight = image.clientHeight;
        const imageWidth = image.clientWidth;
    
        const radius = imgContainerWidth / 2; 
        const centerX = containerWidth / 2
        const centerY = containerHeight / 2 + imageHeight / 8;
    
        const angleStep = Math.PI / (links.length - 1);
    
        links.forEach((link, index) => {
            const angle = Math.PI + index * angleStep; 
            // console.log(angle)
            const x = centerX + radius * Math.cos(angle);
            const y = centerY - radius * Math.sin(angle);
            // console.log(x, y)

            link.style.left = `${x}px`;
            link.style.top  = `${y}px`;
        });
    }
  
    positionLinks();
    window.addEventListener('resize', positionLinks);
});