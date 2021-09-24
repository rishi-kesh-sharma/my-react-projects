import React,{useState} from 'react'
import "./SideBar.css"
import { Menu } from '@material-ui/icons';
import SideBarContent from './SideBarContent';
const SideBar = () => {
    const [showSideBar,setShowSideBar]=useState(false);
    const clickHandle=()=>{
        console.log("hello clicked")
       setShowSideBar (true);
        
    }
    const sideBarDataCommunicator=(value)=>{
        setShowSideBar(value);
    }
    return (
        <div>
            <div className="menu-icon-container" onClick={clickHandle} >
                <Menu/>
            </div> 
            {
                showSideBar&&<SideBarContent sideBarDataCommunicator={sideBarDataCommunicator}/>
            }
        </div>
    )
}

export default SideBar
