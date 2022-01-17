import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

function Write() {
    return (
        <form>
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