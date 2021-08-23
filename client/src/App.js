import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

import ImageSlider from "./components/ImageSlider";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>

      {!data ?
        <div className="loading">
          <Spinner animation="border" variant="info" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        :
        < ImageSlider />
      }

    </>
  );
}

export default App;
