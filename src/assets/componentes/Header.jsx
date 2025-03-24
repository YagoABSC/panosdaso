import React from "react";
import { useState, useEffect } from "react";

function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (


        <header>
            {isMobile ? (

                <div className="w-100 d-flex justify-content-between ">
                    <i class="bi bi-list"></i>
                    <h1 className="fs-4">Panos da Sô</h1>

                    <span><i class="bi bi-bag-fill"></i></span>

                </div>

            ) : (
                <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fs-4 m-0">Panos da Sô</h1>
                    <nav className="nav nav-pills flex-column flex-sm-row  gap-3 d-flex">
                        <button type="button" className="btn btn-light">Kits de Panos</button>
                        <button type="button" className="btn btn-light">Panos Pequenos</button>
                        <button type="button" className="btn btn-light ">Panos grandes</button>
                    </nav>
                    {/* <button type="button" className="btn btn-success"><i className="bi bi-whatsapp"></i> Entre em contato</button> */}
                    <button className="d-flex gap-1 btn btn-primary">Carrinho <i class="bi bi-bag-fill"></i></button>
                </div>
            )}
        </header>

    );
}

export default Header;