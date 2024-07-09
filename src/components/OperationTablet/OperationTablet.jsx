import { Box, TableContainer, TableTitle, Table, ScrollBox } from 'components/DynamicTable/DynamicTable';
import { getBgColorByType, getColorByType } from 'helpers/colorType';
import React from 'react'
import styled from 'styled-components';

const OperationTablet = ({ columns, data, title }) => {


    const Text = styled.div`
    width: 80px;
     color: ${props => props.color};
     padding: 4px 10px;
    background-color:  ${props => props.bgcolor};
    border-radius: 40px;
    text-align: center;
      ${props => props.$isError && `
            text-decoration: line-through;
        `}
    `;

    return (
        <ScrollBox>
            <Box><TableTitle>{title}</TableTitle></Box>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th style={{ borderLeft: "none", borderRight: "none" }} key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={{ borderLeft: "none", borderRight: "none" }}><Text color={getColorByType(row.type)} bgcolor={getBgColorByType(row.type)}>{row.type}</Text></td>
                                <td style={{ borderLeft: "none", borderRight: "none" }}>{row.name}</td>
                                <td style={{ borderLeft: "none", borderRight: "none" }}><Text color={getColorByType(row.type)} $isError={row.type === 'Error'}>{row.amount}</Text></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer ></ScrollBox >
    );
};



export default OperationTablet;
