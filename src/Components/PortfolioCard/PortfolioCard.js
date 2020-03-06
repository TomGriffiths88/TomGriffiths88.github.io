import React from 'react';
import "./PortfolioCard.css";
 
const portfolioCard = (props) => {

    const navigate = () => {
        window.open(props.url);
    }

    return(

        <div className="portfolioCard" onClick={navigate}>
            <img src={props.image} alt="img"/>
            <div className="portfolioCard__meta">
                <h3 className="portfolioCard__title">{props.title}</h3>
                <p className="portfolioCard__desc">{props.description}</p>
                <span className="portfolioCard__label" >{props.label}</span>
            </div>
        </div>

    )
}


export default portfolioCard;