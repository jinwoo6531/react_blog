import React, { Fragment } from 'react';
import { Row, Spinner } from 'reactstrap';

export const GrowingSpinner = () => {
  return (
    <Fragment>
      <Row className="d-flex justify-content-center m-5">
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="primary"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="secondary"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="success"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="danger"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="warning"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="info"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="light"
        />
        <Spiiner
          style={{ width: '2rem', height: '2rem' }}
          type="grow"
          color="dark"
        />
      </Row>
    </Fragment>
  );
};

export default Spinner;
