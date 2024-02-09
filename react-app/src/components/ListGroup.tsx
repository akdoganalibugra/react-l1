import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];

  items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
