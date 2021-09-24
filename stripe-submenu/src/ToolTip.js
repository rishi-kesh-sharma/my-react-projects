import React from 'react'
import "./ToolTip.css"
const ToolTip = (props) => {
    return (
             <ul className="tooltip">
                 {
                     props.links.map((link)=>{
                         const {label,icon,url}=link;
                         return <li> <i>{icon}</i><a href={url}>{label}</a></li>
                     })
                 }
             </ul>
        
    )
}

export default ToolTip;
