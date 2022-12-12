import { GetCurrentLanguage } from '../api/getLanguage';
import Navbar from "../components/Navbar"
import Router, { useRouter } from 'next/router'
import NProgress from "nprogress"


import '../styles/globals.css'
import "../styles/Nprogress.css"
import Footer from '../components/Footer';

Router.events.on('routeChangeStart', () => NProgress.start()); 

Router.events.on('routeChangeComplete', () => NProgress.done()); 

Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

  const lang = GetCurrentLanguage()

  return (
    <>
      <Navbar lang={lang} />
      <Component {...pageProps} s/>
      <Footer lang={lang} />
    </>
  )
}

export default MyApp
