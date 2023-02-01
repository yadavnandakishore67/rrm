import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../common/footer";
import Header from "../../common/header";
import Routers from '../../routes/route';
import { getUserDataRequested } from "../../store/backend.action";


function Container() {
    const dispatch = useDispatch<any>()
    useEffect(()=>{
       const id = localStorage.getItem('user_Id');
       if(id){
        dispatch(getUserDataRequested(id))
       }
    },[])
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routers />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Container;
