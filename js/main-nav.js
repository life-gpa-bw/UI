class Dropdown {
    constructor(element) {


        this.element = element;


        this.button = document.querySelector(".nav-btn");

        this.content = document.querySelector(".links");
        this.link = document.querySelectorAll(".link");
                                                   
                                 
        this.navBG = document.querySelector(".navBG");
          
        
        this.button.addEventListener('click', () => {
            this.toggleContent();
        }) 
         
        this.link[0].addEventListener('click', () => {
            this.toggleContent();
        });
        this.link[1].addEventListener('click', () => {
            this.toggleContent();
        });
      
    }   
                                                                                    
    toggleContent() {                                                                              
                                                                                                   
                                                                                            
        this.content.classList.toggle("dropdown-selected");                              
        this.navBG.classList.toggle("dropdown-selected2");                               
    }                                                                                   
}                                                                                      
                                                                                      
                                                                                     
                                                                                    
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));
                                                                          
//                                                                       
                                                 
                                                                        
                                              