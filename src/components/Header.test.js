import React from 'react'; 
import {shallow} from 'enzyme'; 
import Header from './Header'; 


describe('Test para el Header', ()=>{

    it('Debe devolver a uno', ()=>{
        const wrapper = shallow(<Header />);
        const a = wrapper.find('a.auno');  //poner  en el find() el nombre de la etiqueta y el nombre de la clase o id.
        const result = a.text(); 
    
        expect(result).toBe('Home');
    
        // expect(wrapper.find('.ados').text().toBe('Nosotros'));

    })

    it('Debe devolver a dos', ()=>{
        const wrapper = shallow(<Header />);
        const a = wrapper.find('a.ados'); 
        const result = a.text(); 
    
        expect(result).toBe('Nosotros');
    })

    it('Debe devolver a tres', ()=>{
        const wrapper = shallow(<Header />);
        const a = wrapper.find('a.atres'); 
        const result = a.text(); 
    
        expect(result).toBe('Blog');
    })
})

// it('Testing del Header', ()=>{
    
// })