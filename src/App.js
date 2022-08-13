import React from "react";
import "./App.css";
import {
    About,
    Contact,
    Footer,
    Header,
    Hero,
    Portfolio,
    Technologies,
} from "./components";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <main>
                <Portfolio />
                <About />
                <Technologies />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
