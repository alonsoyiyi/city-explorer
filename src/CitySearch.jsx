import React from "react";
import { Button, Form } from "react-bootstrap";

class CitySearch extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

    };

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="cityName">
                    <Form.Label>Ingresa la direccion a Explorar: </Form.Label>
                    <Form.Control onChange type="text" placeholder="Ingresa Direccion" />
                </Form.Group>
                <Button variant="primary" type="submit"></Button>
            </Form>
        )
    }
}
export default CitySearch;