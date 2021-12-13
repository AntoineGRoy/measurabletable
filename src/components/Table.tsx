import React from "react";
import Row from "./Row";
import "../App.css";

import { RowObject } from "../App";

interface Props {
  rows: RowObject[];
  tableHead: Array<string>;
  tableAPIvalues: Array<string>;
}

const Table: React.FC<Props> = (props: Props) => {
  return (
    <div className="table-container">
      <h2>Users Table</h2>
      <table>
        <tbody>
          <tr key="tableHead">
            {[...props.tableHead].map((head, index) => (
              <th key={head + index}>{head}</th>
            ))}
          </tr>
          {props.rows.map((row, index) => (
            <Row
              key={"row_" + index}
              tableAPIvalues={props.tableAPIvalues}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
