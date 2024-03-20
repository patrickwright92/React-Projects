import { useEffect, useState } from "react";




export default function RandomColour() {

    const [typeOfColour, setTypeOfColour] = useState('hex');
    const [colour, setColour] = useState('#000000')

    function randomColourUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColour() {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColour = '#'
        for(let i = 0; i < 6; i++) {
            hexColour += hex[randomColourUtility(hex.length)];
        }
        setColour(hexColour);
    }

    function handleCreateRandomRgbColour() {
        const r = randomColourUtility(256)
        const g = randomColourUtility(256)
        const b = randomColourUtility(256)

        setColour(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if(typeOfColour === 'rgb') handleCreateRandomRgbColour();
        else handleCreateRandomHexColour();
    },[typeOfColour])

    return (
    <div style={{
        width : '100vw',
        height : '100vh',
        background: colour
    }}>
        <button onClick={() => setTypeOfColour('hex')}>Create HEX Colour</button>
        <button onClick={() => setTypeOfColour('rgb')}>Create RGB Colour</button>
        <button 
            onClick={
                typeOfColour === 'hex' 
                    ? handleCreateRandomHexColour 
                    : handleCreateRandomRgbColour
            }
        >
            Generate Random Colour
        </button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <h3>{typeOfColour === 'rgb' ? 'RGB Colour' : 'HEX Colour'}</h3>
            <h1>{colour}</h1>
        </div>
    </div>
    );
}