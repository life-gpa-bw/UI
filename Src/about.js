
class TabLink {                       
    constructor(element) {
  
       this.element = element                      
                                                   
         
      this.data = this.element.dataset.tab;                                
                                                      
      
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${element.dataset.tab}']`);
                                                                                               
         
      this.tabItem = new TabItem(this.itemElement);                                           
     
      element.addEventListener('click', () => this.select() );                             
    };                                                                                    
                                                                                         
    select() {                                                                          
                               
      let links = document.querySelectorAll('.tabs-link');
                                                       
                      
      Array.from(links).forEach( item => item.classList.remove('tabs-link-selected'));
                                              
     
      this.element.classList.add('tabs-link-selected');
                                                       
  
      this.tabItem.select();                  
    }                                         
  }                                           
                                              
  class TabItem {                            
    constructor(element) {                                                                                             
     
      this.element = element;                          
    }                                                  
                                           
    select() {                                                                                      
                                      
      const items = document.querySelectorAll('.tabs-item');                         
        
 
      items.forEach( item => item.classList.remove('tabs-item-selected'))                                               
             
                                                           
      this.element.classList.add('tabs-item-selected');
    }                                      
  }                                                                                                                    
                                                                                                                       
                                                                            
  links = document.querySelectorAll('.tabs-link');                                                                     
  links.forEach(link => new TabLink(link));   
                            
                             
//   var changeColor = setInterval(setColor, 1500);
                             
   
//   function setColor() {
//     var x = document.getElementById('one');
//     var y = document.getElementById('two');
//     var z=  document.getElementById('three');
                                     
//     x.style.backgroundColor = x.style.backgroundColor == "black" ? "yellow" : "black";
//     y.style.backgroundColor = y.style.backgroundColor == "yellow" ? "black" : "yellow";
//     z.style.backgroundColor = z.style.backgroundColor == "white"  ? "black" : "white" ;
//   }                                  
                                     
// function stopColor() {            
//   clearInterval(changeColor);     
// }                                 
                                     