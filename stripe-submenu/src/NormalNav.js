import React ,{useState} from 'react'
import "./NormalNav.css"
import ToolTip from './ToolTip' 
import data from "./data"
const NormalNav = () => {
    const [showTooltip,setShowTooltip]=useState({
        products:false,
        developers:false,
        company:false
        
    });
    const mouseOverHandle=(e)=>{
     
       let target=e.target.innerText; 
        setShowTooltip( (prev)=>{
        let{products,developers,company}=prev;
        ( target=="Products")?products=true:((target=="Developers")?developers=true:company=true);
        return({products:products,developers:developers,company:company})
        });
    }
    const onMouseOutHandle=(e)=>{
    //     const normalNavContainer=document.querySelector(".normal-nav-container");
    //    normalNavContainer.addEventListener("mouseenter",()=>{
    //        console.log("hello");
    //     //    const xpos= normalNavContainer.getBoundingClientRect().x;
    //     //    const ypos= normalNavContainer.getBoundingClientRect().y;
    //     //    const height= normalNavContainer.getBoundingClientRect().height;
    //     //    const width= normalNavContainer.getBoundingClientRect().width;
           
    //     //  var eve = window.event;
     
    //     //  var posX = eve.clientX;
    //     //  var posY = eve.clientY;
    //     //    const  isWithin=posX>xpos&&posX<xpos+width&&posY>ypos&&posY<ypos+height;
    //     //    console.log(isWithin);
            
    //     })

        setShowTooltip( (prev)=>{
               
           return({products:false,developers:false,company:false})
           });
    }

    const {products,developers,company}=showTooltip;
    const myArray=[ {type:"products",value:products},{type:"developers",value:developers},{type:"company",value:company}];  
      return (
        <div className="normal-nav-container">
            
            {
                data.map((dataItem)=>{
                    const {page,links}=dataItem;
                    return(
                        <div>
                            <p onMouseOver={mouseOverHandle}  onMouseOut={onMouseOutHandle}> {page}</p>
                             {
                                myArray.map((elem)=>{
                                    const {type,value}=elem;
                                 return  value&&type==page&&<ToolTip links={links}/>
                                })
                            }

                        </div>
                         
                         )
                         
                        })
                        
                    }
                        
                    <div className="tooltip-container">
                    </div>

            
        </div>
    )
}

export default NormalNav
