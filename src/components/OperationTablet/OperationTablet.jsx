import { Table } from 'components/DynamicTable/DynamicTable';
import { getBgColorByType, getColorByType } from 'helpers/colorType';
import React from 'react'
import styled from 'styled-components';


export const Text = styled.div`
  
     color: ${props => props.color};
     padding: 4px;
     max-width: 80px;
    background-color:  ${$props => $props.bgcolor};
    border-radius: 40px;
    text-align: center;
      ${props => props.$isError && `
            text-decoration: line-through;
        `}
    `;
export const Title = styled.h3`
 font-size: 16px;
  font-weight: 600;
  margin: 0;
 display: block;

   border-radius: 8px 8px 0 0;
 position: sticky;
  top: 0;
  padding: 14px;
  width: 100%;
  background: #E7F1ED;`;
const Container = styled.div`

 border-radius: 0 0 8px 8px;
 border: 1px solid rgba(29, 30, 33, 0.10);
  background: #FFF;

`;

const OperationTablet = ({ columns, data, title }) => {

    return (
        <>

            <Title>{title}</Title>
            <Container>
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
                                <td style={{ borderLeft: "none", borderRight: "none" }}><Text color={getColorByType(row.type)} $bgcolor={getBgColorByType(row.type)}>{row.type}</Text></td>
                                <td style={{ borderLeft: "none", borderRight: "none" }}>{row.name}</td>
                                <td style={{ borderLeft: "none", borderRight: "none" }}><Text color={getColorByType(row.type)} $isError={row.type === 'Error'}>{row.amount}</Text></td>
                            </tr>
                        ))}
                    </tbody>

                </Table></Container >
        </>
    );
};



export default OperationTablet;
