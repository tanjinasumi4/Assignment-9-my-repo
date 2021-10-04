import React from 'react';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Homes from '../Homes/Homes';

const Home = (props) => {
    const [homes, setHomes] = useState([]);
    useEffect(() => {
        fetch('./homeData.JSON')
            .then(res => res.json())
            .then(data => setHomes(data));
    }, []);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    homes.map(home => <Homes
                        key={home.id}
                        home={home}
                    ></Homes>)
                }
            </Row >
        </div>



    );
};

export default Home;