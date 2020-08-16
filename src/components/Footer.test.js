import React from 'react'; //ambiente react
import {shallow} from 'enzyme';  //filtra el componente, testea el componente que se esta utilizando
import Footer from './Footer'; //componente que se le hara el testing

//it: esto, ('')lo que va a testear


//en el arrow function: es donde va a ir lo que se quiera testear
//wrapper es la construccion que esta corriendo en el componente llamado. Se puede llamar de otra manera pero es una palabra estandarizada
//shallow: es lo que quiero testear. encapsula el componente que se va a renderexir
// const span: dice que el wrapper debe buscar el span en el shallow que encapsula footer para que busque el span y eso es lo que se quiere testear
// const result: devuelve el resultado del metodo de text vacio del span
//expect es un metodo


//it dentro del it ira lo que quiero que se va a testear
it('Debe devolver un numero telefonico de servicio al cliente', ()=>{
    const wrapper = shallow(<Footer />);//donde le indico el componente dentro del metodo shallow
    const span = wrapper.find('span'); // le indico que busque el tag donde esta lo que quiero testear
    const result = span.text(); // se declara el resultado esperado

    expect(result).toBe('Servicio al cliente: 1-800-555-444');//se declara lo que tiene que devolver si o si

})