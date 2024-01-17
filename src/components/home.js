import React, { useState } from 'react';
import './home.css';
import Card from "./card";
import postData from "./data";

function Home(props) {
    const [isJoined, setIsJoined] = useState(true);
    const [activeTab, setActiveTab] = useState('All Posts');

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column" style={{padding:"0px"}}>
                    <div className="image-wrapper">
                        <img src="/Rectangle 2.svg" />
                        <div className="text1">Computer Engineering</div>
                        <div className="text2">142,765 Computer Engineers follow this</div>
                    </div>
                </div>
            </div>
            <div className="row" style={{display:"flex",justifyContent:"center"}}>
                <div className="col-9" style={{display:"flex", justifyContent:"center"}}>
                    {/*<div className="column">*/}
                        <nav className="tab-section">
                            <div className={activeTab === 'All Posts' ? 'tab active' : 'tab'} onClick={() => setActiveTab('All Posts')}>All Posts(32)</div>
                            <div className={activeTab === 'Article' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Article')}>Article</div>
                            <div className={activeTab === 'Event' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Event')}>Event</div>
                            <div className={activeTab === 'Education' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Education')}>Education</div>
                            <div className={activeTab === 'Job' ? 'tab active' : 'tab'} onClick={() => setActiveTab('Job')}>Job</div>
                        </nav>
                    {/*</div>*/}
                    <div className="column">
                        <div className="post-join">
                            <div className="post-group">
                                <div className="post-group-text">
                                    <span className="post-text">Write a Post</span>
                                </div>
                                <div className="post-group-img">
                                    <img className="vector-img" src="/Vector.svg" alt="drop-down" />
                                </div>
                            </div>
                            <div className="join-group">
                                <img src="/join_group.svg" alt="group-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div style={{border:"2px solid #E0E0E0", margin:"0px 16px"}}></div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-8">
                            {postData.map((post) => {
                                return (
                                    <>
                                        {activeTab === 'All Posts' && <Card tag={post.tag} img={post.img} title={post.title} text={post.text} name={post.name} profileImg={post.profileImg} views={post.views} date={post?.date || ""} company={post?.company || ""} location={post?.location || ""} />}
                                        {activeTab === post.tag && <Card tag={post.tag} img={post.img} title={post.title} text={post.text} name={post.name} profileImg={post.profileImg} views={post.views} date={post?.date || ""} company={post?.company || ""} location={post?.location || ""} />}
                                    </>
                                )
                            })}
                        </div>
                        <div className="col-4">
                            {isJoined &&
                                <div className="sidebar">
                                    <div className="sidebar-location">
                                        <div className="side-location">
                                            <img src="/location.svg" alt="location" />
                                            <span className="siderbar-text">Noida, India</span>
                                        </div>
                                        <img src="/edit.svg" alt="edit" />
                                    </div>
                                    <div>
                                        <img className="error-img" src="/error.svg" alt="error" />
                                        <span className="error-text">Your location will help us serve better and extend a personalised experience.</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;