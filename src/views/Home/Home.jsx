import './home.css';
import WhatIs from '../../components/WhatIs/WhatIs';
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main";

function Home(){
    return(
        <div className='home'>
        <Header className="elemento-superior"/>
        <Main/>
        <WhatIs className="elemento-inferior"/>
</div>
    )
}

export default Home;