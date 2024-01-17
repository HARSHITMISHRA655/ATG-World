import React from 'react';
import './card.css';

function Card({tag, img, title, text, name, profileImg, views, date, location, company}) {
    return (
        <div className="container-fluid" style={{border:"1px solid #E0E0E0",borderRadius:"4px",margin:"16px 16px"}}>
            {tag!=='Job' && <img className="card-img" src={`/${img}`} />}
            <div className="container-fluid" style={{display:"flex",flexDirection:"column",padding:"16px", gap:"16px"}}>
                <div style={{display:"flex"}}>
                    <img className="article-img" src={`/${tag}.svg`} alt={tag} />
                </div>
                <div className="title-dot">
                    <span className="card-title">{title}</span>
                    <img className="three-dot" src="/three-dots.svg" alt="dots" />
                </div>
                {(tag==="Article" || tag==='Education') && <div>
                    <span className="card-text">{text}</span>
                </div>}
                {(tag==="Event") && <>
                    <div className="date-location">
                        <div className="calender">
                            <img src="/calender.svg" alt="calendar" />
                            <span className="card-text">{date}</span>
                        </div>
                        <div className="calender">
                            <img src="/location.svg" alt="location" />
                            <span className="card-text">{location}</span>
                        </div>
                    </div>
                    <div>
                        <button className="button">Visit Website</button>
                    </div>
                </>
                }
                {(tag==="Job") && <>
                    <div className="date-location">
                        <div className="company">
                            <img src="/bag.svg" alt="bag" />
                            <span className="card-text">{company}</span>
                        </div>
                        <div className="company">
                            <img src="/location.svg" alt="location" />
                            <span className="card-text">{location}</span>
                        </div>
                    </div>
                    <div>
                        <button className="button">Visit Website</button>
                    </div>
                </>
                }
                <div className="row" style={{marginTop:"16px", marginBottom:"8px"}}>
                    <div className="col-md-8">
                        <div className="profile">
                            <img className="profile-img" src={`/${profileImg}`} alt="profile" />
                            <span className="card-name">{name}</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row" style={{display:"flex", justifyContent:"space-around"}}>
                            <div className="col-8" style={{display:"flex"}}>
                                <div className="visibility-row">
                                    <img src="/visibility_24px.svg" alt="eye" />
                                    <span className="card-views">{views}</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="share-img-div">
                                    <img className="share-img" src="/baseline-share-24px.svg" alt="share" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;