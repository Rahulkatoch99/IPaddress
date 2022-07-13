import "./App.css";
import React, { useEffect, useState } from "react";
import { Form, FormControl, Button, Table } from "react-bootstrap";
import "./Css/Card.css";
import "./Css/Header.css";
// import axios from "axios";

import MapInfo from "./Components/map";

function App() {
  const [user, setUser] = useState({
    //Because the data is present in the api is object
    ip: "",
    location: {
      country: "",
      region: "",
      city: "",
      lat: 0,
      lng: 0,
      postalCode: "",
      timezone: "",
      geonameId: 0,
    },
    domains: [],
    as: {
      asn: 0,
      name: "",
      route: "",
      domain: "",
      type: "",
    },
    isp: "",
  });
  const [info, setInfo] = useState("");

  const add = (e) => {
    const { id, value } = e.target;
    if (id === "info") {
      setInfo(value);
    }
    console.log("info");
  };

  ////////////////-------------------------------- Start Of axios Here -----------------------------------------////////
  // var data = "";
  // var config = {
  //   method: "get",
  //   url:
  //     "https://geo.ipify.org/api/v2/country,city?apiKey=at_iqoZqtfxZTzKuIVR7NyiWOA3x9YUg&ipAddress=" +
  //     info,
  //   headers: {},
  //   data: data,
  // };

  // async function handelClick(e) {
  //   e.preventDefault();

  //   const response = await axios(config);
  //   // .then(function (response) {
  //   //   console.log(JSON.stringify(response.data));
  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error);
  //   // });

  //   const json = await response.json();
  //   setUser({ ...json });
  //   console.log(json);
  // }

  ////////---------------------------------End Of Axios HERE ---------------------------------------////////////////////////////////

  //-------------------------start of fetch here------------------------------------------///

  var requestOptions = {
    method: "GET",
    body: null,
    redirect: "follow",
  };

  async function handelClick(e) {
    e.preventDefault();
    const response = await fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_iqoZqtfxZTzKuIVR7NyiWOA3x9YUg&ipAddress=" +
        info,
      requestOptions
    );
    const data = await response.json();
    setUser({ ...data });
    console.log(data);
  }

  /////////////-----------------------------------------End of Fetch Here ------------------------------/////////

  // const api = async () => {
  //   const response = await fetch(
  //     "https://geo.ipify.org/api/v2/country,city?apiKey=at_iqoZqtfxZTzKuIVR7NyiWOA3x9YUg&ipAddress=8.8.8.8",
  //     requestOptions
  //   );
  //   const data = await response.json();
  //   setuser({ ...data });
  //   console.log(data);
  // };
  // useEffect(() => {
  //   api();
  // }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {user.ip && (
          <MapInfo
            lat={user.location.lat}
            lng={user.location.lng}
            name={user.location.region}
          /> // component send the  data by the help of props
        )}
        <header className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <h1 className="mb-5">IP Address Tracker</h1>

              <div className="col-md-8">
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search For Any Ip Address And Domain"
                    className="me-2"
                    onChange={add}
                    value={info}
                    id="info"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    type="submit"
                    onClick={(e) => {
                      handelClick(e);
                    }}
                  >
                    Search
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <figure class="snip1578">
                <Table striped>
                  <thead>
                    <tr>
                      <th>IP Address</th>
                      <th>Locations</th>
                      <th>TimeZones</th>
                      <th>ISP</th>
                    </tr>
                  </thead>

                  <tbody>
                    {user.ip && ( //------------------loop to get all the data which is present in user-------------//////////
                      <tr>
                        <td>{user.ip}</td>
                        <td>{user.location.region}</td>
                        <td>{user.location.timezone}</td>
                        <td>{user.isp}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                {/* {user.ip && (
                  <MapInfo
                    lat={user.location.lat}
                    lng={user.location.lng}
                    name={user.location.region}
                  /> // component send the  data by the help of props
                )} */}
              </figure>
            </div>
          </div>
        </div>
        {/* {user.ip && <MapInfo lat={user.location.lat} lng={user.location.lng} />} */}
      </div>
    </div>
  );
}

export default App;
