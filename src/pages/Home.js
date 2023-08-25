import { useState } from "react";

const Home = () => {

    const [color, setColor] = useState("yellow");
    return (



        <>

            <div style={{ backgroundColor: "red", color: "white", borderRadius: "10px", pdding: "20px", textAlign: "center" }} >

                <h1 style={{ backgroundColor: color }} >Welocome to Homepage</h1>
                <form className="FormmStyle">
                    <h3>Update your details</h3>
                    <input type="text" />
                </form>
            </div >
            <button
                type="button"
                onClick={() => setColor("blue")}

            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </>



    );
};

export default Home;