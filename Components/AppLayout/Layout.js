import {Navigationbar} from './Navigationbar'
import Footer from './footer'
import Head from 'next/head'
const Layout=({children})=>{
    return(
        <>
        <head>    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        </head>
            <Navigationbar/>
            <main>
                {children}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </main>
            <Footer/>
        </>
    )

}
export default Layout   