const Random = () => {
  let rNum = Math.random() * 100;

  return (
    <>
      <h2>this is my random number:- {Math.round(rNum)}</h2>
    </>
  );
};

export default Random;
