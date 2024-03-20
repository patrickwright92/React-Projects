import { useState } from "react"
import data from './data'
import './styles.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleSelected, setMultipleSelected] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultipleSelected = [...multipleSelected];
        const findIndexOfCurrentId = copyMultipleSelected.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if(findIndexOfCurrentId == -1) copyMultipleSelected.push(getCurrentId)
        else copyMultipleSelected.splice(findIndexOfCurrentId, 1)

        setMultipleSelected(copyMultipleSelected)
    }

    console.log(selected, multipleSelected)
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
            {
                data && data.length > 0 ?  
                data.map(dataItem=> <div className="item">
                    {/* arrow function automatically binds the event handler to
                        the component instance, therefore no requirement to bind
                        to the constructor */}
                    <div 
                        onClick={
                            enableMultiSelection 
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)
                        } 
                        className="title"
                        >
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ? 
                        multipleSelected.indexOf(dataItem.id) !== -1 &&
                        <div className="content">{dataItem.answer}</div> :
                        selected === dataItem.id && <div className="content">{dataItem.answer}</div>

                    }
                </div>)
                : <div>No data found</div>
            }   
        </div>
    </div>
}