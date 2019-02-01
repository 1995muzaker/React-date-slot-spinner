import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
import './App.css';

class App extends Component {
  state = {
    time: new Date(),
    isOpen: true,
  }

  handleSelect = (time) => {
      this.setState({ time, isOpen: true });
  }
  render() {
    const monthMap = {
      '1': 'Jan',
      '2': 'Feb',
      '3': 'Mar',
      '4': 'Apr',
      '5': 'May',
      '6': 'Jun',
      '7': 'Jul',
      '8': 'Aug',
      '9': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
  };
  const dayMap = {
      '1': 'Sun',
      '2': 'Mon',
      '3': 'Tues',
      '4': 'Wed',
      '5': 'Thurs',
      '6': 'Fri',
      '7': 'Sat'
  }
    const dateConfig = {  
      'month': {
        format: value => monthMap[value.getMonth() + 1],
        caption: 'Mon',
        step: 1,
      },
      'date': {
          format: value => dayMap[value.getDay() + 1],
          caption: 'Date',
          step: 1,
      },
      'hour': {
        format: 'hh',
        caption: 'Hour',
        step: 1,
      },
      'minute': {
          format: 'mm',
          caption: 'Min',
          step: 1,
      },
  };
    return (
          <div className="App">
          <h2 className="date-h2">Available Slots for Dr.Summit</h2>
                <DatePicker
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    dateConfig={dateConfig}
                     />
            </div>
    );
  }
}
export default App;
