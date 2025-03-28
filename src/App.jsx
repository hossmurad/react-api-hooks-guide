import React, {useRef} from 'react';

const App = () => {
    let pTagReff = useRef(null);
    let imgTagReff = useRef(null);
    let  valueTagReff = useRef(null);


    const change = ()=>{
        pTagReff.current.innerHTML = '<h1>I hate you</h1>';
    }

    const change2 = ()=>{
        imgTagReff.current.src ="https://placehold.co/600x400?text=Hello+World"
    }

    const change3 = ()=>{

        let data = valueTagReff.current.value;
        alert(data)
    }



    return (
        <div>
            <p ref={pTagReff}>I love You</p>
            <button onClick={change}>Change</button>

            <br/>
            <img src="https://placehold.co/600x400/000000/FFF" ref={imgTagReff}/>
            <br/>
            <button onClick={change2}>img Change</button>

            <br/>
            <textarea rows={4} ref={valueTagReff}/>
            <button onClick={change3}>Get vale</button>
        </div>
    );
};

export default App;