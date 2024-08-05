import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const Pagination = ({ count = 100, itemsPerPage = 100, onPageChange }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [localPaginationItems, setLocalPaginationItems] = useState(
    JSON.parse(localStorage.getItem('pagination') ?? '[]')
  );

  const location = useLocation();
  const paginationItems = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('pagination') ?? '[]');
    const itemExists = items.find((item) => item.route === location.pathname);
    if (itemExists && iterateItems().includes(Number(itemExists.page))) {
      setSelectedItem(Number(itemExists.page));
    //   if (onPageChange) onPageChange(Number(itemExists.page));
    }
  }, [location.pathname,]);

//   useEffect(() => {
//     if (onPageChange) onPageChange(selectedItem);
//     const pageExist = localPaginationItems.find((page) => page.route === location.pathname);
//     if (pageExist) {
//       pageExist.page = selectedItem.toString();
//     } else {
//       setLocalPaginationItems([
//         ...localPaginationItems,
//         { route: location.pathname, page: selectedItem.toString() },
//       ]);
//     }
//     localStorage.setItem('pagination', JSON.stringify(localPaginationItems));
//   }, [localPaginationItems, location.pathname, onPageChange, selectedItem]);

  useEffect(() => {
    localStorage.setItem('pagination', JSON.stringify(localPaginationItems));
  }, [localPaginationItems]);

  const getPageNumber = (num) => {
    setSelectedItem(num);
    onPageChange(num)
  };

  const nextPage = () => {
    if (selectedItem < paginationItems) {
      setSelectedItem(selectedItem + 1);
      onPageChange(selectedItem+1)

    }
  };

  const prevPage = () => {
    if (selectedItem > 1) {
      setSelectedItem(selectedItem - 1);
      onPageChange(selectedItem-1)
    }
  };

  const iterateItems = () => {
    let items = [];
    for (let i = 1; i <= paginationItems; i++) {
      items.push(i);
    }
    return items;
  };

  return (
    <div className="pagination-container">
      <div
        onClick={prevPage}
        className={selectedItem > 1 ? 'cursor-pointer' : 'cursor-not-allowed'}
      >
        {'<'}
      </div>
      {iterateItems().map((_, idx) => (
        <div
          key={idx}
          className={`paginate-buttons ${selectedItem === idx + 1 ? 'active-page' : ''}`}
          onClick={() => getPageNumber(idx + 1)}
        >
          <p>{idx + 1}</p>
        </div>
      ))}
      <div
        onClick={nextPage}
        className={selectedItem < paginationItems ? 'cursor-pointer' : 'cursor-not-allowed'}
      >
        {'>'}
      </div>
    </div>
  );
};

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number,
    modelValue: PropTypes.number,
    onPageChange: PropTypes.func,
  };
  
  Pagination.defaultProps = {
    itemsPerPage: 20,
    modelValue: 1,
    onPageChange: () => {},
  };

export default Pagination;
