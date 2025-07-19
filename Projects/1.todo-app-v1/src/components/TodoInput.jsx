const TodoInput = () => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <form className="row g-3 align-items-center justify-content-center">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
            />
          </div>
          <div className="col-sm-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-success w-100">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
