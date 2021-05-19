/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

export default function TagSelect({ tags }) {
  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={tags}
      defaultValue={[]}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="freeSolo"
          placeholder="Favorites"
        />
      )}
    />
  );
}
