import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

function Write() {
    return (
        <form>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>이름
                            <input type="text" name='name'/>
                        </TableCell>
                        <TableCell>생년월일
                            <input type="text" name='birth'/>
                        </TableCell>
                        <TableCell>성별
                            <input type="text" name='gender'/>
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