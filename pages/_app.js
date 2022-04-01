import '../styles/globals.css'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'

function Loading(){
  const router=useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart=(url)=>(url !==router.asPath) && setLoading(true)
    const handleComplete=(url)=>(url ===router.asPath) && setLoading(false)
  
    router.events.on('routerChangeStart',handleStart)
    router.events.on('routerChangeComplete',handleComplete)
    router.events.on('routerChangeError',handleComplete)
    return () => {
      
    router.events.off('routerChangeStart',handleStart)
    router.events.off('routerChangeComplete',handleComplete)
    router.events.off('routerChangeError',handleComplete)
    }
  }, [])

  return loading && 
  <div className="">
    Loading....
  </div>
  
}





function MyApp({ Component, pageProps }) {
  return (<><Loading/><Component {...pageProps} /></>)
}

export default MyApp
