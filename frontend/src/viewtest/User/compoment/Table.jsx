// Table.jsx
import React from 'react';
import TableItem from './TableItem';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tên xe</th>
          <th>Ngày thuê</th>
          <th>Ngày trả</th>
          <th>Tổng tiền</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableItem
            key={index}
            carName={item.carName}
            startDate={item.startDate}
            endDate={item.endDate}
            totalAmount={item.totalAmount}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
