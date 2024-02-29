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
const _listImage = [
  { title: '120 1', description: 'userName 1', image: 'http://fjd.smhuyjhb.com/uploads/20230503/6451c16b68d86.jpeg' },
  { title: '120 2', description: 'userName 2', image: 'http://fjd.smhuyjhb.com/uploads/20230503/6451f2d007328.png' },
  { title: '120 3', description: 'userName 3', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
  { title: '120 4', description: 'userName 4', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
  { title: '120 5', description: 'userName 5', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
  { title: '120 6', description: 'userName 6', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
  { title: '120 7', description: 'userName 7', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
  { title: '120 8', description: 'userName 8', image: 'https://fjd.smhuyjhb.com/cover/videofx.jpg' },
];
class Columns extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <img src={_listImage[0].image } width={500} alt="Logo" />
        <img src={_listImage[1].image } width={500} alt="Logo" />

        <td style={{border:'1px solid #ff0000'}} >data1</td>
        
        <td style={{border:'1px solid #ff0000'}} >data2</td>
      </React.Fragment>
    );
  }
}


export default Table;

