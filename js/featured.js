var slideIndex = 1;
          showDivs(slideIndex);
          
          function plusDivs(n) {
            showDivs(slideIndex += n);
          }
          
          function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("pokemonSlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
            x[i].classList.remove('pokemon-slide-selected');  
              x[i].classList.add('pokemonSlides');  
            }
            x[slideIndex-1].classList.add('pokemon-slide-selected');
          }

////////////////////////////////////////

class CharacterLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
   this.link = link;
    
    // Get the custom data attribute on the Link
   this.data = document.querySelector(`.character-link[data-tab='${this.link.dataset.tab}']`);
//    console.log(this.data);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.pokemonSlides[data-tab='${this.link.dataset.tab}']`);
    console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    this.characterItem = new CharacterItem(this.itemElement);
    // console.log(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.link.addEventListener('click', () => this.select());
  };

  select() {
    const links = document.querySelectorAll('.character-link');
    this.characterItem.select();
  }
}

class CharacterItem {
  constructor(item) {
    this.item = item;
    // console.log(this.item);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.pokemonSlides');
    // console.log(items);

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function(item){
      item.classList.remove('pokemon-slide-selected');
    });
    // Add a class named "tabs-item-selected" to this element
    this.item.classList.add('pokemon-slide-selected');
}
}

const links = document.querySelectorAll('.character-link');

links.forEach(function(link){
  return new CharacterLink(link);
});