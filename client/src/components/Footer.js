import React from 'react'
import {Row,Col} from "reactstrap";
function Footer() {
    const thisYear = () => {
        const year = new Date().getFullYear()
        return year
    }
    return (
        <div id="main-footer" className="text-center p-2">
            <Row>
                <Col >
                <p className="main-footer-font">Copyright &copy; <span>{thisYear()}</span></p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
