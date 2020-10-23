import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Wrapper>
            <Route exact path="/" component={employeeDirectory} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
