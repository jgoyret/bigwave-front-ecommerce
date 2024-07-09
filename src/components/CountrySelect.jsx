import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../styles/CountrySelect.css";

export default function CountrySelect() {
  return (
    <div id="countrySelect">
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 320, backgroundColor: "transparent" }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code})
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            sx={{ backgroundColor: "transparent" }}
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </div>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
  },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PY", label: "Paraguay", phone: "595" },
  {
    code: "US",
    label: "United States",
    phone: "1",
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "VE", label: "Venezuela", phone: "58" },
];
