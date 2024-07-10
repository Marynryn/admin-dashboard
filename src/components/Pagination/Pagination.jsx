import styled from "styled-components";

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
`;

const PageButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#59b17a' : '#ccc')};
  border: none;
  margin: 0 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ active }) => (active ? '#59b17a' : '#aaa')};
  }
`;
const Pagination = ({ totalPages, currentPage, handlePageClick }) => {
    if (totalPages <= 1) {

        return null;
    }


    return (
        <PaginationBox className="pagination">
            {[...Array(totalPages)].map((_, index) => (
                <PageButton
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageClick(index + 1)}
                />
            ))}
        </PaginationBox>
    );
};

export default Pagination;