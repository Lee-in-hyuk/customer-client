import React from 'react';
import './main.scss'
import List from '../components/List';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
    const [ lists, setLists ] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/lists/")
        .then(function(result){
            const lists = result.data.lists;
            console.log(lists);
            console.log(result);
            setLists(lists);
        }).catch(function(err){
            console.log(err);
        })
    },[])
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>나이</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {lists.map(list=>{
                        return(
                            <List key={list.id} id={list.id} name={list.name} age={list.age} gender={list.gender} job={list.job}/>
                          )
                    })}
            </TableBody>
        </Table>
    );
}

export default Main;