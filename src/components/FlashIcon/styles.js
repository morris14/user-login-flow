import styled, { keyframes } from "styled-components";

const animate = keyframes`
from {
    transform: rotate(-20deg);
}

to {
    transform: rotate(0deg);
}
`;

export default styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        animation: ${animate} 2s forwards;
    }
`;
