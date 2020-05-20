import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import parseISO from "date-fns/parseISO";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
class FormDatePick extends Component {
  render() {
    const { startDate } = this.props.values;
    console.log(this.props.getDate(startDate));
    return (
      <div>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          maxDate={addDays(parseISO(new Date()), 30)}
          timeIntervals={30}
          excludeDates={[new Date(), subDays(new Date(), 0)]}
          onChange={this.props.setStartDate}
          dateFormat="yyyy/MM/dd"
          strictParsing
          inline
        />
      </div>
    );
  }
}

export default FormDatePick;
