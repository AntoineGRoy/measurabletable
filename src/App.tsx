import React from "react";
import logo from "./svg/logo.svg";
import loader from "./svg/loader.svg";
import "./App.css";
import Table from "./components/Table";
import { tableDataMerger } from "./utils/tableDataMerger";

export interface RowObject {
  id: string;
  age?: number;
  firstname?: string;
  lastName?: string;
}
const BASE_URL: string = "http://5c37c33f7820ff0014d927c5.mockapi.io/msr/";

const App: React.FC = () => {
  const [rows, setRows] = React.useState<RowObject[] | null>();
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    //defining the fetch function 
    async function fetchItem(item: string) {
      return fetch(`${BASE_URL}${item}`)
        .then((data) => {
          return data.json();
        })
        .catch((e) => {
          setError(true);
        });
    }
    (async function () {
      try {
        const ages = await fetchItem("ages");
        const names = await fetchItem("names");
        const merged = tableDataMerger(ages, names) as RowObject[];
        setRows(merged);
      } catch (err) {
        setError(true);
      }
    })();
  }, []);

  const tableHead: Array<string> = ["ID", "First Name", "Last Name", "Age"];
  const tableAPIvalues: Array<string> = ["id", "firstName", "lastName", "age"];

  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} className="App-logo" alt="Measurabl" />
        <h1>Users</h1>
      </header>
      <main className="container">
        <article>
          <>
            {!rows && !error && <img alt="loading" src={loader} />}
            {error && (
              <div className="error-message">
                <h2>Something Went Wrong! Please Try Again</h2>
              </div>
            )}
            {rows && !error && (
              <Table
                rows={rows}
                tableHead={tableHead}
                tableAPIvalues={tableAPIvalues}
              />
            )}
          </>
        </article>
      </main>
    </div>
  );
};

export default App;
