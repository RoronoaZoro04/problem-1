import React from "react";
import AreaChart from "./AreaChart";
import AreaChart2 from "./AreaChart2";

function Tank() {
  return (
    <div className="Tank">
      <span className="Mug1">
        <h5>Tickets Solved by Agent</h5>
        <br></br>
        <div className="List">
          <div className="clm1">
            Tanner Hodge - <br></br>
            <br></br>
            Lynda Shames -<br></br>
            <br></br>
            Luke Burke -<br></br>
            <br></br>
            Kai Gaines -<br></br>
            <br></br>
            Kenzei Fields -<br></br>
            <br></br>
            Sophie Mortimer -<br></br>
            <br></br>
            Leanne Coy -<br></br>
            <br></br>
            Kayla Park -<br></br>
            <br></br>
            Sarah Matthews -<br></br>
            <br></br>
            James Murdock -<br></br>
            <br></br>
          </div>
          <div className="clm2">
            <span className="n1">117</span>
            <span className="n2">65</span>
            <span className="n3">59</span>
            <span className="n4">56</span>
            <span className="n5">54</span>
            <span className="n6">51</span>
            <span className="n7">40</span>
            <span className="n8">32</span>
            <span className="n9">29</span>
            <span className="n10">23</span>
          </div>
        </div>
      </span>
      <span className="Mug2">
        <h5>First Response Time</h5>
        <div className="First">
          <hr></hr>1h 17min (Month: 1h 38min)<hr></hr>
        </div>
        <div className="Chart">
          <AreaChart />
        </div>
      </span>
      <span className="Mug3">
        <h5>Full Resolution Time</h5>
        <div className="Full">
          <hr></hr>1h 43min (Month: 2h 25min)<hr></hr>
        </div>
        <div className="Chart">
          <AreaChart2 />
        </div>
      </span>
    </div>
  );
}

export default Tank;
