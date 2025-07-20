const TodoOutput1 = () => {
  let todoTask = "Go to gym";
  let todoDate = "12/07/2025";
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Single Todo Item */}
        <div className="row align-items-center text-center mb-3">
          <div className="col-sm-5 text-start fw-medium">{todoTask}</div>
          <div className="col-sm-4 text-muted">{todoDate}</div>
          <div className="col-sm-3">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoOutput2 = () => {
  let todoTask = "Complete homework";
  let todoDate = "15/07/2025";

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Single Todo Item */}

        <div className="row align-items-center text-center mb-3">
          <div className="col-sm-5 text-start fw-medium">{todoTask}</div>
          <div className="col-sm-4 text-muted">{todoDate}</div>
          <div className="col-sm-3">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoOutput3 = () => {
  let todoTask = "Prepare for interview";
  let todoDate = "18/07/2025";

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {/* Single Todo Item */}

        <div className="row align-items-center text-center mb-3">
          <div className="col-sm-5 text-start fw-medium">{todoTask}</div>
          <div className="col-sm-4 text-muted">{todoDate}</div>
          <div className="col-sm-3">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};



export {TodoOutput1, TodoOutput2, TodoOutput3};