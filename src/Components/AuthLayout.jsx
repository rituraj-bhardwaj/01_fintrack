import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Protected = ({childern, authentication = true}) => {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const authStatus = useSelector(state => state.auth.status);
    useEffect(() => {        
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
        
    }, [authStatus, navigate])
    // console.log("loader ", loader);


  return loader ? <h1>loading...</h1> : <>{childern} </>;
};

export default Protected;