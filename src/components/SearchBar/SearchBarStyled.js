import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 300px;
  height: 100vh;
  padding: 48px 16px;
  box-sizing: border-box;
  border-right: 1px solid #c8c8c8;
  background: #f6f6f6;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #5a5a5a;
`;

export const ButtonMapOpen = styled.button`
  width: 100%;
  height: 36px;
  margin-bottom: 34px;
  font-size: 14px;
  color: #979797;
  border-radius: 4px;
  border: 1px solid #808080;
  cursor: pointer;
  &:hover {
    border: 1px solid #256AD2;
  }
`;

export const MapBox = styled(Box)`
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  /* width: 400, */
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
`;

export const Icon = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
`;
