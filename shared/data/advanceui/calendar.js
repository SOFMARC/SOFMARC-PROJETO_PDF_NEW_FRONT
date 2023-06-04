import React, { Fragment, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Breadcrumb, Button, Col, Row, Card } from 'react-bootstrap';

function Calendars() {
  // dragg-start
  const initialstate1 = {
    calendarEvents: [
      { title: "Atlanta Monster", start: new Date("2019-04-04 00:00"), id: "1001" },
      { title: "My Favorite Murder", start: new Date("2019-04-05 00:00"), id: "1002" },],
    events:
      [
        { title: "Meeting", id: "1" },
        { title: "Party", id: "2" },
        { title: "Long Event", id: "3" },
        { title: "Lunch", id: "4" },
        { title: "Tea", id: "5" },
        { title: "Gym", id: "6" },
      ],
  }

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
 const INITIAL_EVENTS = [
{
id: createEventId(),
title: 'All-day event',
start: todayStr
},
{
id: createEventId(),
title: 'Timed event',
start: todayStr + 'T12:00:00'
}
]
function createEventId() {
return String(eventGuid++)
}
  const [state, _setState] = useState(initialstate1)
  console.log(_setState)
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id
        };
      }
    });
  }, []);

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  };
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };
  return (
    <Fragment>
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <Row className="" id="wrap">
                <Col xl={2} id="external-events">
                  <h4>Draggable Events</h4>
                  <div id="external-events-list">
                    {state.events.map((event) => (
                      <div
                        className="fc-event fc-h-event"
                        title={event.title}
                        data={event.id}
                        key={event.id}
                      >
                        <div className="fc-event-main">{event.title}</div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col xl={10} id="calendar-wrap">
                  <div id="calendar">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        // listWeek,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={state.weekendsVisible}
                      initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                      select={handleDateSelect}
                      // eventContent={renderEventContent} // custom render function
                      eventClick={handleEventClick}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Calendars.propTypes = {};

Calendars.defaultProps = {};

export default Calendars;
