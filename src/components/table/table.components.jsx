import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './table.styles.css';

const Table = props => (
  <div className="table">
    <Card className="card">
      <CardContent>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tr>
            <td>USD</td>
            <td>{props.USDrates}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{props.EURrates}</td>
          </tr>
          <tr>
            <td>HKD</td>
            <td>{props.HKDrates}</td>
          </tr>
          <tr>
            <td>CAD</td>
            <td>{props.CADrates}</td>
          </tr>
        </table>
      </CardContent>
    </Card>
  </div>
);

export default Table;
