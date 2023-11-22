import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const AutocompleteInput = styled(Autocomplete)`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
`;

export const TextFieldInput = styled(TextField)`
  border: 1px solid #9c9c9c;
  &:placeholder {
    color: #9c9c9c;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 9.5px;
  left: 16px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;
`;
