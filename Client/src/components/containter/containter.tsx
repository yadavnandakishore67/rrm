import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../common/footer";
import Header from "../../common/header";
import Routers from '../../routes/route';


function Container() {
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
