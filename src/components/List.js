import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

function List({id,name,age,gender,job}) {
    
    return (
        <TableRow>
            <TableCell><p>{id}</p></TableCell>
            <TableCell><h2>{name}</h2></TableCell>
            <TableCell><p>{age}</p></TableCell>
            <TableCell><p>{gender}</p></TableCell>
            <TableCell><p>{job}</p></TableCell>
        </TableRow>
    );
}

export default List;