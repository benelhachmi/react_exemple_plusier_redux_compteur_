

import React ,{useState,useEffect} from 'react'
import './Navbar.css'
export default function Navbar() {
    const [largeur,setLargeur] =useState(window.innerWidth)
    const [toggleMenu,setTogleMenu] = useState(false);

const toggleNavSmallScreen =() =>{
setTogleMenu(!toggleMenu)
}
const changeWidth =() =>{
    setLargeur(window.innerWidth);
    if(window.innerWidth > 500){
        setTogleMenu(false)
    }
}
useEffect(() => {
    window.addEventListener('resize' ,changeWidth);
    return() => {
        window.removeEventListener('resize',changeWidth)
    }
},[])

    return (
        <div>
            <nav>
                {( largeur > 500 ||toggleMenu )&& (<div className="liste">
                    <div className="items">Accueil</div>
                    <div className="items">Service</div>
                    <div className="items">Contact</div>
                </div>)
                }
                
            </nav>
            <div 
            onClick={toggleNavSmallScreen}
            className="btn">BTN</div>
        </div>
    )
}
