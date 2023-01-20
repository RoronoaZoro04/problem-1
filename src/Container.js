import React from "react";

function Container() {
  return (
    <div className="Container">
      <div className="Box">
        <storng className="Name">Created</storng>
        <br></br>
        <br></br> <div className="Num">593</div> <br></br>
        <br></br>to yesterday <br></br>
        <a style={{ color: "rgb(147, 169, 52)" }}>
          <img></img>9%
        </a>
      </div>
      <div className="Box">
        <storng className="Name">Unassigned</storng>
        <br></br>
        <br></br> <div className="Num">7</div> <br></br>
        <br></br>to yesterday <br></br>
        <a style={{ color: "rgb(147, 169, 52)" }}>
          <img></img>30%
        </a>
      </div>
      <div className="Box">
        <storng className="Name">Open</storng>
        <br></br>
        <br></br> <div className="Num">46</div> <br></br>
        <br></br>to yesterday <br></br>
        <a style={{ color: "rgb(147, 169, 52)" }}>
          <img></img>13%
        </a>
      </div>
      <div className="Box">
        <storng className="Name">Solved</storng>
        <br></br>
        <br></br> <div className="Num">526</div> <br></br>
        <br></br>to yesterday <br></br>
        <a style={{ color: "red" }}>
          <img></img>8%
        </a>
      </div>
      <div className="Box">
        <storng className="Name">Escalated</storng>
        <br></br>
        <br></br> <div className="Num">2</div> <br></br>
        <br></br>to yesterday <br></br>
        <a style={{ color: "chocolate" }}>
          <img></img>0%
        </a>
      </div>
      <div className="Box">
        <storng className="Name">Sydney</storng>
        <br></br>
        <br></br>{" "}
        <div className="Num">
          <span style={{ fontSize: "14px" }}>01:41 AM</span>
        </div>{" "}
        <br></br>
        <br></br>Tuesday<br></br>
        <a>
          <img></img>18 Dec 2018
        </a>
      </div>
    </div>
  );
}

export default Container;
