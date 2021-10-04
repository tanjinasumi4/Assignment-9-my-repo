import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h3>We are providing you 4 special service</h3>
            <Row XS={1} md={2} className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;
