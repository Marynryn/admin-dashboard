import React from 'react';
import styled from 'styled-components';

export const TableContainer = styled.div`
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(29, 30, 33, 0.10);
  background: #FFF;
  overflow-x: auto; /* Горизонтальный скролл */

  /* Стилизация горизонтального скролла */
  &::-webkit-scrollbar {
    padding-bottom: 15px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  &::-webkit-scrollbar-thumb {
  border-radius: 14px;
background: #E6E6E6;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

 
  padding-left: 14px; 
  padding-right: 14px; 
`;
export const TableTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const Table = styled.table`
  min-width: 300px; 
  width:100%;
  border-collapse: collapse;
  background: #FFF;

  th, td {
    border: 1px solid #ddd;
    padding: 14px 8px;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    border-top: none; 
    border-left: none; 
  }

  tr:last-child td {
    border-bottom: none; 
  }

  th {
    border-top: none;
    color: rgba(29, 30, 33, 0.40);
  }

  th:last-child {
    border-right: none;
    padding-right: 0;
  }

  th:first-child {
    padding-left: 0;
  }

  td:last-child {
    border-right: none;
    padding-right: 0;
  }

  td:first-child {
    padding-left: 0;
  }
`;

export const Box = styled.div`
  border-radius: 8px 8px 0 0;
 
  padding: 14px;
  width: 100%;
  background: #E7F1ED;
`;

const BoxName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.h4`
  margin: 0;
`;

export const ScrollBox = styled.div`
  width: calc(100% - 60px);
  overflow-x: auto; 
 
`;

const DynamicTable = ({ columns, data, title }) => {
    return (
        <ScrollBox>
            <Box>
                <TableTitle>{title}</TableTitle>
            </Box>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>
                                        {column === 'Name' && row.image ? (
                                            <BoxName>
                                                <img className="avatar" src={row.image} alt="Avatar" width={36} height={36} />
                                                <Name>{row.name}</Name>
                                            </BoxName>
                                        ) : (
                                            row[column.toLowerCase()]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ScrollBox>
    );
};

export default DynamicTable;
