import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App">
      <Header />
      <Ticket name="Super Bowl Tickets" />
      <Footer />
    </div>
  );
}

export default App;
