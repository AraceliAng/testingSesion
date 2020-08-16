import React, { useState }  from 'react';

const Ticket = (props) => {
    const [count, setCount] = useState(0);

    const increment = () =>{  // esta funcion solo incrementa

        setCount(count => count + 1) //linea logica de ejecucion.... Es lo que se hará
    
    }

    return(
        <div>
            <h2 className="title">{props.name}</h2>
            {/* el evento onclick no hace nada por si solo, se le tiene que poner una funcion */}
            <button onClick={increment}> Add </button> 
            <h2 className="total">{count}</h2>
        </div>
    )
}

export default Ticket;