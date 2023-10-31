import React from "react";
import { Link } from "react-router-dom";

import '../css/index.css';

function IndexPage(){
    return(
        <>
        <section class="main">
            <div class="main-icon">
                <img src={require('../images/chair-blue-bg.JPG')} alt="chair" />
            </div>
            <ul class="main-links">
                <li class="link-btn">
                    <Link to={""} class="link-path">
                        <i class="link-icon fa-brands fa-twitch"></i>
                    </Link>
                </li>
                <li class="link-btn">
                    <Link to={""} class="link-path">
                        <i class="link-icon fa-brands fa-instagram"></i>
                    </Link>
                </li>
                <li class="link-btn">
                    <Link to={""} class="link-path">
                        <i class="link-icon fa-solid fa-circle-dollar-to-slot"></i>
                    </Link>
                </li>
                <li class="link-btn">
                    <Link to={""} class="link-path">
                        <i class="link-icon fa-brands fa-youtube"></i>
                    </Link>
                </li>
                <li class="link-btn">
                    <Link to={""} class="link-path">
                        <i class="link-icon fa-solid fa-envelope"></i>
                    </Link>
                </li>
            </ul>
        </section>
        </>
    )
}

export default IndexPage;