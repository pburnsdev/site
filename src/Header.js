import React from 'react';
import Button from 'react-bootstrap/Button'
import './Header.css';

function Header() {
    return (
        <div className="header">
           <Button>Home</Button>
           <Button>Experience</Button>
           <Button>Reading List</Button>
           <Button>Volunteering</Button>
           <Button onClick={() => window.open('https://pburnsdev.github.io/pburnsdev', 'blank')}>Blackjack in Angular</Button>
           <Button>Contact</Button>
        </div>
    )
}

export default Header;