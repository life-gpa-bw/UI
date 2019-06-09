 import React from 'react';
 import Babel from 'babel';
 import reactDOM from'react-dom';
 import NavBtn from  './NavBtn';
import CardContainer from './CardContainer';
import Cards from './Cards';

                                                                                                              
                                                                                                             
class Dropdown extends React.Component() {                                                                                 
            constructor(){
              super(props);
                                                                                                   
                                                                                                         
        this.state=props;   
}                                                              
    render() {
      return (
        <button className='NavBtn' id='root'>
          <CardContainer><Cards /></CardContainer>
        
        </button>
      )
    }                                                                           
                                                    
        this.NavBtn=props;
          
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
        })} ]
      
    }   
                                                                                    
    toggleContent() {                                                                              
                                                                                                   
                                                                                            
        this.content.classList.toggle("dropdown-selected");                              
        this.navBG.classList.toggle("dropdown-selected2");                               
    }                                                                                   
}                                                                                      
                                                                                      
                                                                                     
                                                                                    
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));
                                                                          
//                                                                       
                                                 
class Panel {
    constructor(panel) {
      // get access to button and anything else we need to store on `this`
      this.panel = panel
      this.buttonOpen = panel.querySelector('button.panel-btn-open')
      this.buttonClose = panel.querySelector('button.panel-btn-close')
      this.content = panel.querySelector('.panel-content')
      // this.togglePanel = this.togglePanel.bind(this)
      this.buttonBar = panel.querySelector('.panel-buttons')
      this.buttonBar.addEventListener('click', () => this.togglePanel())
      this.buttonOpen.addEventListener('click', () => this.togglePanel())
       this.buttonClose.addEventListener('click', () => this.togglePanel())
       this.togglePanel()
      console.log('Creating panel:', panel, this.buttonOpen)
    }
    
    togglePanel() {
      this.content.classList.toggle('toggle-on')
      this.buttonOpen.classList.toggle('hide-btn')
      this.buttonClose.classList.toggle('hide-btn')
    }
  }
  
  const panels = document.querySelectorAll('.panel')
  
  panels.forEach(panel => {
    const panelInstance = new Panel(panel)
  })
  
                                                                       
                                              