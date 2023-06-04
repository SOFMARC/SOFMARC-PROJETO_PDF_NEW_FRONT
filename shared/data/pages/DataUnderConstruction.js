import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';


    const AfterComplete = () => <span>You are good to go!</span>;
    // Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterComplete />
    }else {
        // Render a countdown
        return (
          <React.Fragment>
          <div id="launch_date" className="is-countdown">
            <ul className="countdown">
              <li><span className="number">{days}</span>
              <br/>
              <span className="time">Days</span>
              </li><li><span className="number">{hours}</span>
              <br/><span className="time">Hours</span>
              </li><li><span className="number">{minutes}</span><br/>
              <span className="time">Minutes</span></li>
              <li><span className="number">{seconds}</span><br/>
              <span className="time">Seconds</span></li>
              </ul></div>
          </React.Fragment>
        );
      }
    };
  export function DayCounter() {
          return (
            <Countdown date={Date.now() + 12999800000} renderer={rendering} />
          );
        }
