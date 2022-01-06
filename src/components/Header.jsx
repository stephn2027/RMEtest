import React,{useEffect} from 'react'
import "@fortawesome/fontawesome-free";
import {gsap} from 'gsap';
export default function Header() {
const timeline = gsap.timeline();
useEffect(()=>{
    timeline.from('.text-wrapper',{x:700,opacity:0,duration:1,ease:'back.out(1.4)'})
    .from('.text-sub',{x:700,opacity:0,duration:1,ease:'back.out(1.4)'})
},[]);

    return (
        <div className="header-wrapper">
        <div className="text-wrapper">
            <p><span className="dash">---</span><span className="text-between"><i className="fas fa-quote-left" style={{color:"maroon",fontSize:"clamp(1rem,3.4vw,1.5rem)"}}></i>Your</span><span className="text-center">Personal</span><span className="text-between">Recipes<i className="fas fa-quote-right" style={{color:"maroon",fontSize:"clamp(1rem,3.4vw,1.5rem)"}}></i></span><span className="dash">---</span></p>
            
        </div>
        <div ><span className="text-sub">manage your collections!</span></div>
       
           
            
        </div>
    )
}
