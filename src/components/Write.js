import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

function Write() {
    const navigate = useNavigate();

    const onSubmit = (values) => {
        axios.post("http://localhost:8080/lists/",{
            name: values.name,
            age: parseInt(values.age),
            gender: values.gender,
            job: values.job
        }).then((result)=>{
            console.log(result);
            navigate(-1);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            onSubmit()
        }}>
            <h1>고객 등록하기</h1>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>이름
                            <input type="text" name='name'/>
                        </TableCell>
                        <TableCell>나이
                            <input type="text" name='age'/>
                        </TableCell>
                        <TableCell>성별 : 
                            남<input type="radio" name='gender' value="남"/>
                            여<input type="radio" name='gender' value="여"/>
                        </TableCell>
                        <TableCell>직업
                            <input type="text" name='job'/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <button type='submit'>등록하기</button>
            <button type='reset'>다시 입력</button>
        </form>
    );
}

export default Write;