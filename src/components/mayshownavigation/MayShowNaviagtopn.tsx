import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Back from '../back/Back';

export default function MayShowNaviagtopn({children}) {
    const location = useLocation();
    const [show, setShow] = useState(true);
    useEffect(() => {
      
        if(location.pathname.includes("dashboard")) {
            setShow(false);
        }else {
            setShow(true);
        }

    }, [location]);



  return (
    <>{show &&children}
    {!show && <Back />}
    </>
  )
}
