import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeDirectory from "./pages/EmployeeDirectory";


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Wrapper>
            <Route exact path="/" component={EmployeeDirectory} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
