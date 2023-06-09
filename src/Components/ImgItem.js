import "./ImgItem.css"

const ImgItem = (props) => {
    

    return(
        <div className="IItem">
            <img className="Iimg" src={props.data.thumb}/>
            <h3 className="Ititle">{props.data.title}</h3>
            <div className="IpriceTag">
                <h3 className="Isale">${props.data.salePrice}</h3>
                {props.data.salePrice !== props.data.normalPrice ? 
                    <h6 className="Inormal">${props.data.normalPrice} </h6>
                :<a/>}
                
            </div>
        </div>
    );
}

export default ImgItem;