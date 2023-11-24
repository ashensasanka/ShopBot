import React from "react"
import Img1 from "./img/1.jpg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.png";
import Img4 from "./img/4.jpg";
import Img5 from "./img/5.png";
import './gallery.css'

const Gallery1 = () => {
    let data = [
        {
            id:1,
            imgSrc: Img1
        },
        {
            id:2,
            imgSrc: Img2
        },
        {
            id:3,
            imgSrc: Img3
        },
        {
            id:4,
            imgSrc: Img4
        },
        {
            id:5,
            imgSrc: Img5
        },
    ]
    return(
        <>
        <div className="gallery">
            {data.map((item, index)=>{
                return (
                    <div>
                        <img src={item.imgSrc} style={{width:'100%', marginBottom: '20px'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery1