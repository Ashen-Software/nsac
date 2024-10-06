import './home.css';
import WhatIs from '../../components/WhatIs/WhatIs';
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main";
import Contenido from "../../components/Contenido/Contenido";

function Home(){
    return(
        <div className='home'>
            <Header/>
            <Main/>
            <WhatIs/>
            <Contenido/>
    </div>
    )
}

export default Home;