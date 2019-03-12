
class mobileNav {
    constructor(element) {
        this.element=element; 
        this.button = this.element.querySelector('.mobile-menu-btn');
        this.content = this.element.querySelector('.mobile-menu-content');
        this.button.addEventListener('click', () => this.toggleContent());
    }

    toggleContent() {
        this.content.classList.toggle('mobile-menu-hidden');
    }
}


let mobilenavs = document.querySelectorAll('.mobile-menu').forEach(mobilenav => new mobileNav(mobilenav));



  
  