import React from "react";

function ContainerCards() {
    return (
        <div className="card mb-3" style={{maxWidth: 280, minWidth: 250}}>
            <img src="/img/pano1.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex w-100 justify-content-between ali align-items-center">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">R$ 30,00</h6>
                </div>
                <p className="card-text text-start">Some quick example text content.</p>
                <div className="d-flex w-100 justify-content-end"><a href="#" className="btn btn-primary">Go somewhere</a></div>
            </div>
        </div>
    )
}

export default ContainerCards;