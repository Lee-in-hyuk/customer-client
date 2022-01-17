import React from 'react';
import './main.scss'
import List from '../components/List';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
    const customers = [
        {
            id:1,
            name: "성시원",
            age: 28,
            gender: "여성",
            job: "방송국 막내 스태프"
        }
    ]
    axios.get("http://localhost:8080/lists/")
    // .then(function(){
    //     const customers = [
    //         {
    //             id:1,
    //             name: "성시원",
    //             age: 28,
    //             gender: "여성",
    //             job: "방송국 막내 스태프"
    //         }
    //     ]
    // }).catch(function(error){
    //     console.log(error);
    // })
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
                    {customers.map(customer=>{
                        return(
                            <List key={customer.id} id={customer.id} name={customer.name} age={customer.age} gender={customer.gender} job={customer.job}/>
                          )
                    })}
            </TableBody>
        </Table>
    );
}

export default Main;