
import Pagination from 'components/Pagination/Pagination';
import { getRowValue } from 'helpers/getRowValue';
import React, { useState } from 'react';
import styled from 'styled-components';

export const TableContainer = styled.div`

`;
export const TableTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
 display: block;

   border-radius: 8px 8px 0 0;
 position: sticky;
  top: 0;
  padding: 14px;
  width: 100%;
  background: #E7F1ED;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Table = styled.table`
  min-width: 300px; 
  width:100%;
  border-collapse: collapse;
 
  th, td {
    border: 1px solid #ddd;
    padding: 14px 10px;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    border-top: none; 
    border-left: none;
    min-width: 100px; 
    @media (min-width: 768px) {
    padding: 20px;
    font-size: 16px;
     min-width: 150px; 
  }
  }

  tr:last-child td{
    border-bottom: none; 
  }
  tr:last-child {
     border-radius: 0 0 8px 8px;
  }
  th {
    border-top: none;
    color: rgba(29, 30, 33, 0.40);
  }

  th:last-child {
   border-right: none;
 
  }

  th:first-child {
    
  }

  td:last-child {
     border-right: none;
  
  }

  td:first-child {
border-radius: 0 0 8px 8px;
  }
`;

export const Box = styled.div`
height: 100%;
 padding-bottom:20px;

overflow-x: auto;
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

 
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
     @media (min-width: 768px) {
   flex-direction: row;
   align-items: center;
  }
`;

export const Name = styled.h4`
  margin: 0;
`;

export const Container = styled.div`

 border-radius: 0 0 8px 8px;
 border: 1px solid rgba(29, 30, 33, 0.10);
  background: #FFF;
overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }


`;

const DynamicTable = ({ columns, data, title }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box>



      <Table>
        <TableTitle>{title}</TableTitle>
        <Container>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {getRowValue(row, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody></Container>
      </Table>





      <Pagination totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />

    </Box>
  );
};

export default DynamicTable;
