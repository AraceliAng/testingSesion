import React from 'react';
import {shallow} from 'enzyme';
import Ticket from './Ticket';



it("Debe de devolver el incremento del evento cuando se haga un Click al boton", ()=>{

    const wrapper = shallow( <Ticket />);
    const total = wrapper.find("h2.total").text() //el wrapper encuentra un h2 pero que tenga un classname "total"... text va a convertir a texto lo que se vaya a buscar 
    expect(total).toBe("0")

    ///test de una simulacion de un usuario virtual que esta usando la aplicacion 
    const button = wrapper.find("button"); //busca la eqitqueta boton
    button.simulate("click");//simula el onclick o el evento del boton
    // button.simulate("click"); // se copia las veces que se necesite esta simulacion 
   

    const total2 = wrapper.find("h2.total").text()
    expect(total2).toBe("1") // tiene que esperarse 1 ya que simula que un usuario hace click y por lo tanto tiene que ser el primer resultado
    // expect(total2).toBe("2") // se pone el total que se espera de las veces que se escriba la simulacion

})


it("Nos debe devolver un props", ()=>{

    const wrapper = shallow(<Ticket name={"Super Bolw Tickets"} />);
    const title = wrapper.find("h2.title").text() //el wrapper encuentra un h2 pero que tenga un classname "total"... text va a convertir a texto lo que se vaya a buscar 
    expect(title).toBe("Super Bolw Tickets")

})