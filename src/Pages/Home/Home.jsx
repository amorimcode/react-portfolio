import React from 'react';

import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto.jsx';
import Name from '../../components/Name/Name.jsx'
import GlobalStyle from './style'


function Home() {
    return (
        <>
            <GlobalStyle>
            </GlobalStyle>
            <ProfilePhoto />
            <Name></Name>
        </>
    )
}

export default Home;