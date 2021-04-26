import React from 'react';

const Pagination = () => {
    return ( 
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center  mb-4">
          <li className="page-item">
            <a className="page-link text-dark" 
               href="#" 
               tabindex="-1">
              Previous
            </a>
          </li>
          <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
          <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
          <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">Next</a>
          </li>
        </ul>
      </nav>
    )
}

export default Pagination;