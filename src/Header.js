import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './Header.css';
import Home from './Home.js';
import Experience from './Experience';
import Education from './Education';
import Hobbies from './Hobbies';
import Games from './Games';
import Contact from './Contact';

function Header() {
    return (
        <Router>
            <div className="header">
                <Link to="/home"><Button>Home</Button></Link>
                <Link to="/education"><Button>Education</Button></Link>
                <Link to="/experience"><Button>Experience</Button></Link>
                <Link to="/hobbies"><Button>Hobbies</Button></Link>
                <Link to="/games"><Button>Games</Button></Link>
                <Button onClick={() => window.open('https://pburnsdev.github.io/BlackJack/pburnsdev', 'blank')}>Blackjack in Angular</Button>
                <Link to="/contact"><Button>Contact</Button></Link>
            </div>
            <Route path="/home" component={Home}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/experience" component={Experience}></Route>
            <Route path="/hobbies" component={Hobbies}></Route>
            <Route path="/games" component={Games}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Router>
    )
}

export default Header;