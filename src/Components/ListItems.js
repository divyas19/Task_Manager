import "./ListItems.css";

export default function ListItems({ items, onDelete, toggleDone }) {
  //Counter for tasks added
  let count = 1;

  return (
    <div className="table-container">
      {items.length === 0 && <h1 className="no-tasks">No Items</h1>}
      {items.length !== 0 && (
        <table className="table parent-item items-container">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((values) => {
              return (
                <tr>
                  <th scope="row">{count++}</th>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        checked={values.done}
                        onChange={(e) =>
                          toggleDone(values.id, e.target.checked)
                        }
                        maxlength="100"
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {values.title}
                    </label>
                  </td>
                  <td>
                    <button
                      className="del-btn"
                      onClick={() => onDelete(values.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
