const Time = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return (
    <>
      <h2 className="mt-3">
          Date: <span className="text-info">{date}</span>
        </h2>
      <h2 className="mt-3">
          Time: <span className="text-info">{time}</span>
        </h2>
    </>
  );
};

export default Time;
