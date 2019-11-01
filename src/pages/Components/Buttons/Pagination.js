import React from 'react';

const Pagination = () => (
  <div>
    <div className="header">
      <h4 className="title">Pagination</h4>
    </div>

    <div className="content">
      <p>
        Color-classes:
      </p>
      <ul>
        <li>pagination</li>
        <li>pagination-primary</li>
        <li>pagination-success</li>
        <li>pagination-info</li>
        <li>pagination-warning</li>
        <li>pagination-danger</li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-primary">
        <li><a href={null}>«</a></li>
        <li><a href={null}>1</a></li>
        <li><a href={null}>2</a></li>
        <li className="active"><a href={null}>3</a></li>
        <li><a href={null}>4</a></li>
        <li><a href={null}>5</a></li>
        <li><a href={null}>»</a></li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-success">
        <li><a href={null}>«</a></li>
        <li><a href={null}>1</a></li>
        <li><a href={null}>2</a></li>
        <li className="active"><a href={null}>3</a></li>
        <li><a href={null}>4</a></li>
        <li><a href={null}>5</a></li>
        <li><a href={null}>»</a></li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-no-border">
        <li><a href={null}>«</a></li>
        <li><a href={null}>1</a></li>
        <li><a href={null}>2</a></li>
        <li className="active"><a href={null}>3</a></li>
        <li><a href={null}>4</a></li>
        <li><a href={null}>5</a></li>
        <li><a href={null}>»</a></li>
      </ul>

    </div>
  </div>
);

export default Pagination;