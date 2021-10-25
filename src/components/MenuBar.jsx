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
            window.removeEventListener("scroll",null);
        };
    }, []);
    return (
        <div className="nav__bar">
            <header className={`${show && "head__bg__show"}`}>
                <Link to="/">                    
                    <p className="logo"><span>PROF</span>PLUS</p>
                </Link>
                <div className={`nav__link ${show && "head__link_color"} ${clicked ? "active": ""}`}>
                    <ul>
                        <li><Link className={`link ${show && "head__link_color"}`} to="/#cours_section">Cours +</Link></li>
                        <li><Link className={`link ${show && "head__link_color"}`} to="/#abouts_section">Savoir +</Link></li>
                        <li><Link className={`link ${show && "head__link_color"}`} to="/">Comptence +</Link></li>
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
