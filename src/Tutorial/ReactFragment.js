import React from 'react';
class Table extends React.Component {
  render() {
    return (
      <table style={{border:'1px solid #ff0000'}}>
        <thead>
        <tr>
          <Columns />
        </tr>
        </thead>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td style={{border:'1px solid #ff0000'}} >data1</td>
        <td style={{border:'1px solid #ff0000'}} >data2</td>
      </React.Fragment>
    );
  }
}


export default Table;

