import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 100vh;
    background: #f4f4f4;
`; 

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 56px;
    height: 76px;
    margin-top: 48px;
    cursor: pointer;
`; 

export const ProfileBoxAvatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: #c6c6c6;
`; 

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 48px;
    height: 276px;
`; 

export const FrameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 56px;
    height: 76px;
`; 

export const LogOutBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 56px;
    height: 76px;
    margin-bottom: 48px;
`; 

export const Text = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.011em;
    text-align: left;
    margin: 0;
`;

export const LogOutButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: #c6c6c6;
    border: none;
    cursor: pointer;
`; 