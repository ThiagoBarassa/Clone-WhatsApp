import React from 'react';
import './chatListItem.css';


export default () => {

    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                        <div className="chatListItem--name">Thiago Barassa</div>
                        <div className="chatListItem--date">22:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Okldsjçdjaslkdjsakdjaslkjdaskldjlsakjdlsajdsaljdsladjsladjlksadjksaljd
                            ksjadlsjdkljsadljsaldkjslkdjslkjdlksajdlkasjdklsjdlksajdklajdsa
                            dsdjslakdjlskjdlsajskjsalalkdjlkaa
                        </p>
                    </div> 
                    </div>
                    
                </div>
            </div>
        
    );
}