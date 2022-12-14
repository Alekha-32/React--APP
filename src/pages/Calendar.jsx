import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState();
  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };
  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
      <table style={{ width: "100%", background: "white" }}>
        <tbody>
          <tr style={{ height: "50px" }}>
            <td style={{ width: "100%" }}>
              <DatePickerComponent
                value={new Date(2021, 0, 10)}
                showClearButton={false}
                placeholder="Current Date"
                floatLabelType="Always"
                change={change}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
