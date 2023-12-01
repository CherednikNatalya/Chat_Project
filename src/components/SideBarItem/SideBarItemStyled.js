import styled from 'styled-components';

export const SideBarBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 56px;
    height: 76px;
    cursor: pointer;
    &:active {
        svg {
            fill: #256AD2;
        }
    }
`; 

export const SideBarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    /* border: 1px solid #222222; */
`; 

export const Text = styled.p`
    /* font-family: Roboto; */
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.011em;
`;