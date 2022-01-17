import React from 'react';
import './main.scss'
import List from '../components/List';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

function Main() {
    const customers = [
        {
            id:1,
            name: "성시원",
            birth: "1997.01.01",
            gender: "남성",
            job: "방송국 막내 스태프"
        }
    ]
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {customers.map(customer=>{
                        return(
                            <List key={customer.id} id={customer.id} name={customer.name} birth={customer.birth} gender={customer.gender} job={customer.job}/>
                          )
                    })}
            </TableBody>
        </Table>
    );
}

export default Main;