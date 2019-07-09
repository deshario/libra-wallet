import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const LoadingData = () => {
    return (
        <Loading>
            <Spinner animation="border" variant="primary" />
        </Loading>
    )
}

export default LoadingData

const Loading = styled.div`
    position: absolute !important;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1700;
    background-color: #2B2B2B;
    display: block;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > div.spinner-border {
        width: 10rem!important;
        height: 10rem!important;
        border: 1em solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
    }
`