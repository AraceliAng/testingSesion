import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Ticket from './components/Ticket'; //importacion del componente que se va a testear con shallow
import Header from './components/Header';
import Footer from './components/Footer';

//it es el contexto de un test y cada it es un test
it("Debe hacer el render de los componentes hijos Header, Ticket, Footer",()=>{
    
    const wrapper = shallow(<App />); // shallow permite testear componentes especificos 
    const footer = wrapper.find(Footer); // wrapper busca una etiqueta, componente que se vaya a testear

    expect(footer.exists()).toBe(true) //en expect se debe de pasar si existe footer debe ser true en toBe ya que es un componente que si existe

    
    const ticket = wrapper.find(Ticket);
    expect(ticket.exists()).toBe(true)




    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true)


}) 