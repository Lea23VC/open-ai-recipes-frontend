'use client';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IngredientList } from '@/ts/types/ingredients.type';
import { use, useContext } from 'react';
import { useIngredientsContext } from '@/context/IngredientsContext';
import { nanoid } from 'nanoid';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function IngredientsSelector({
  ingredientList,
}: {
  ingredientList: IngredientList;
}) {
  const { state, dispatch } = useIngredientsContext();

  return (
    <Autocomplete
      onChange={(event, value) => {
        dispatch({
          type: 'UPDATE',
          payload: {
            label: ingredientList.label,
            ingredients: value as string[],
            key: ingredientList.key,
          },
        });
      }}
      className="!w-full"
      multiple
      id="ingredients-selector"
      options={ingredientList.ingredients || []}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option}>
          <Checkbox
            key={nanoid()}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label="Ingredientes" />}
    />
  );
}
