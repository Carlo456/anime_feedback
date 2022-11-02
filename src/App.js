import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//providers
import { FeedbackProvider } from "./context/FeedbackContext";

//pages
import AboutPage from "./pages/AboutPage";

//components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <AboutIconLink/>
        <div className="container">
          <Routes>
          
            <Route exact path="/" element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
          
        </div>
      </Router>
  </FeedbackProvider>  
  );
};

export default App;
