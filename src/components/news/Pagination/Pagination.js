import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const PaginationEl = ({ newsPerPage, AllNews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(AllNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers.length)
  return (
      <>
      <Pagination
      onChange={(e, value)=> paginate(value)}
       count={pageNumbers.length} variant="outlined" />  
            {/* <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)}  className='page-link'>
                    {number}
                    </a>
                </li>
                ))}
            </ul>
            </nav> */}
    </>
  );
};

export default PaginationEl;