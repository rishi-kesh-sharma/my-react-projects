import React from 'react'
import './SideBarContent.css'
import { Cancel, Menu } from '@material-ui/icons'
import data from "./data"
const SideBarContent = (props) => {
    const clickHandle=()=>{
       props.sideBarDataCommunicator(false);
    }
   
    return (
        <div className="sidebar-content">
            {
                data.map((dataItem)=>{
                    const {page,links}=dataItem;
                    return(
                        <div>
                        <h3>{page}</h3>
                        {
                            links.map((dataItemLink)=>{
                                console.log(dataItemLink);
                                const {label,icon,url}=dataItemLink;
                                console.log(url);
                                return(
                                    <ul>
                                        <li><i>{icon}</i><a href={url}>{label}</a></li>
                                    </ul>
                                )
                            })
                        }
                        </div>

                    )
                })
            }
            
                   
            <div className='remove-icon-container' onClick={clickHandle}>
                   <Cancel  />
            </div>

        </div>
    )
}

export default SideBarContent

