import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { todoServerAPI } from '../apiActions';
import '../store';
import { Item } from './Item';

export const ItemsList = (props) => {
    console.log(props.state)
    const [items, setItems] = useState([]);
    useEffect(() => {
        todoServerAPI.getTasks().then((data) => {setItems(data)});
    }, []);
    const store = props.state;
    return (
        <>
        <Grid container >
            {store.map(e => <Item key={e.id}
            id={e.id}
            isCompleted={e.isCompleted}
            title={e.title}
            description={e.description}
            dispatch={props.dispatch} />
            )}
        </Grid>
        </>
    );
}