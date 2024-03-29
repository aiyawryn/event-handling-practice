import React , {useState} from "react";

function App() {
    
    //state
    const [isMouseOver, setMouseOver] = useState(false);
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function hadleChange(event) {
        setName(event.target.value);
    }

    function handleClick(){
        setHeading(name);
    }

    return (
        <div className="container">
            <h1>Hello {headingText}</h1>

            <input 
                onChange={hadleChange}
                type="text" 
                placeholder="What's your name?" 
                value={name}
            />

            <button style={{backgroundColor: isMouseOver && "black"}}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}>
            Submit
            </button>
        </div>
    );
}

export default App;