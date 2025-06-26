
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
    

    
    // Menu mobile
    const mobileMenuButton = document.querySelector('header button.md\\:hidden');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuButton && sidebar) {
        mobileMenuButton.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });
    }
});