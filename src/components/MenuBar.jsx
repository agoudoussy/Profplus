import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import './MenuBar.css'

function MenuBar(props) {
    const [show, setShow] = useState(false);
    const [clicked, setClicked]=useState(false);
    const handleClick=()=>setClicked(!clicked);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
            console.log(show);
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className="nav__bar">
            <header className={`${show && "head__bg__show"}`}>
                <a href="">                    
                    <p className="logo"><span>PROF</span>PLUS</p>
                </a>
                <div className={`nav__link ${show && "head__link_color"} ${clicked ? "active": ""}`}>
                    <ul>
                        <li><a className={`link ${show && "head__link_color"}`} href="/#cours_section">Cours +</a></li>
                        <li><a className={`link ${show && "head__link_color"}`} href="/#abouts_section">Savoir +</a></li>
                        <li><a className={`link ${show && "head__link_color"}`} href="/">Comptence +</a></li>
                    </ul>
                </div>
                <div className="toogle__icone" onClick={handleClick}>
                <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>
            </header>
        </div>
    )
}

export default MenuBar
