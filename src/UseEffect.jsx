import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        callApi();
    }, []);

    const callApi = async () => {
        try {
            let response = await fetch("https://ecommerce-api.codesilicon.com/api/ListProductByCategory/1");
            let responseData = await response.json();
            setData(responseData['data']);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if (data === null) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    {data.map((item, i) => (
                        <div className="col-md-3" key={i}>
                            <div className="card p-2">
                                <img className="card-img-top" src={item.image} alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h4 className="card-text">Price: ${item.price}</h4><br/>
                                    <button className="btn btn-primary" >Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default UseEffect;
