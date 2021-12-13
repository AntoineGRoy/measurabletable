import React from "react";
import "../App.css";

interface Props {
  row: any;
  tableAPIvalues: Array<string>;
}

const Table: React.FC<Props> = (props: Props) => {
  console.log(props.row);
  return (
    <tr key={"tr_" + props.row.id}>
      {props.tableAPIvalues.map(function (key: string, index: number) {
        console.log(key);
        return <td key={"td_" + key + "_" + index}>{props.row[key]}</td>;
      })}
    </tr>
  );
};

export default Table;
