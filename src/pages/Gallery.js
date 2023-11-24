import React from "react"
/*../../src/assets/robo.png*/
import Img1 from "../../src/img/1.jpg";
import Img2 from "../../src/img/2.jpg";
import Img3 from "../../src/img/3.jpg";
import Img4 from "../../src/img/4.jpg";
import Img5 from "../../src/img/5.jpg";

const Gallery = () => {
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
                        <img src={item.imgSrc} style={{width:'100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery