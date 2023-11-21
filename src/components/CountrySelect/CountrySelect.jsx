import * as React from 'react';
import Box from '@mui/material/Box';


import Icons from '../Icons/Icons';
import mapData from '../../data/countries.json';

import { AutocompleteInput, TextFieldInput, ButtonSearch } from './CountrySelectStyled';

export default function CountrySelect() {
  // console.log('mapData', mapData);

  const handleSearch = () => {
    console.log('search clicked');
  }

  return (
    <AutocompleteInput
      id='country-select-demo'
      options={mapData.features}
      autoHighlight
      getOptionLabel={option => option.properties.ADMIN}
      renderOption={(props, option) => (
        <Box
          component='li'
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.properties.ADMIN}
        </Box>
      )}
      renderInput={params => (
        <>
          <ButtonSearch onClick={handleSearch}>
            <Icons name='search' color='#9c9c9c' size='16' />
          </ButtonSearch>
          <TextFieldInput
            {...params}
            sx={{
              '& .MuiOutlinedInput-root': {
                padding: '0 39px 0 40px',
              },
            }}
            placeholder='Search...'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        </>
      )}
    />
  );
}
