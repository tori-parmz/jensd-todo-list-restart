import { Grid, TextField } from '@mui/material';
import React from 'react';
import { postNewTask } from '../actions';

export const InputComponent = ({dispatch}) => {
    const [title, setTitle] = React.useState('');
    const [isValidateError, setIsValidateError] = React.useState(false);
    const [helperText, setErrorHelperText] = React.useState(null);

    const submitTask = () => {
        if (title === '') {
            setIsValidateError(true);
            setErrorHelperText('Title is required');
        } else {
            setIsValidateError(false);
            setErrorHelperText(null);
            dispatch(postNewTask(title));
            setTitle('');
        }
    }
    return (
        <Grid item xs={12}>
            <TextField onChange={(e) => {setTitle(e.target.value)}}
            id='outlined-full-width'
            value={title}
            label='Title'
            placeholder='Enter title'
            helperText={helperText}
            fullWidth
            margin='normal'
            autoFocus
            onKeyPress={(event) => {
                if(event.key === 'Enter') {
                    submitTask();
                }
            }}
            error={isValidateError}
            InputLabelProps={{
                shrink: true,
            }}
            variant='outlined'
            />
        </Grid>

    )
}