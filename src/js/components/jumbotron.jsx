import React from "react";

const Jumbotron = () => {
    return (
        <div className="container my-4">  {/* Agregamos container para alinearlo */}
            <div className="p-5 bg-light rounded shadow">
                <h1 className="display-5">A Warm Welcome!</h1>
                <p className="fs-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!           
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!                    
                </button>
            </div>            
        </div>
    );
};

export default Jumbotron;
