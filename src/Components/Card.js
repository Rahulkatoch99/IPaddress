import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../Css/Card.css";
import "../App";

export function Card() {
  //   const [ip, setip] = useState("");
  //   const [location, setlocation] = useState("");
  //   const [isp, setisp] = useState("");
  //   const [user, setuser] = useState([]);

  //   async function handelClick(e) {
  //     e.preventDefault();

  //     var formdata = new FormData();
  //     alert(category);
  //     formdata.append("ip", ip);
  //     formdata.append("location", location);
  //     formdata.append("isp", isp);
  //     // formdata.append("enName[]", name);
  //     // formdata.append("categoryId", category);
  //     // formdata.append("images", file);
  //   }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"></div>
        <div className="col">
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
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>jsn</td>
                </tr>
              </tbody>
            </Table>
          </figure>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
