import ClockHeading from "./components/ClockHeading";
import ClockSubHeading from "./components/ClockSubHeading";
import Time from "./components/Time";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <center className="container d-flex justify-content-center mt-4">
      <div className="text-center p-5 rounded shadow-lg">
        <ClockHeading />
        <ClockSubHeading />
        <Time />
      </div>
    </center>
  );
};

export default App;
