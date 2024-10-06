import './home.css';
import WhatIs from '../../components/WhatIs/WhatIs';
import Header from "../../components/Header/Header"

function Home(){
    return(
        <div className='home'>
        <Header/>
        <WhatIs/>
</div>
    )
}

export default Home;