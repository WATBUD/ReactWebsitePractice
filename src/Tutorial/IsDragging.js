import React, { Component } from 'react';

class DraggableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      initialX: 0,
      initialY: 0,
      offsetX: 0,
      offsetY: 0,
      lastX: 0, // 用來記錄上一次最後拖曳的位置的屬性
      lastY: 0,
    };
        console.log(
      `%c resultString`,`color: yellow;
        font-size: 15px;
        font-weight: bold;
        line-height: 100px;
        background-image: uri(http://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif);
        background-repeat: no-repeat;
        background-size: contain;
      `,
      5
    );
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    const { offsetX, offsetY } = this.state;
    this.setState({
      isDragging: true,
      initialX: clientX - offsetX, // 計算初始滑鼠位置時考慮偏移量
      initialY: clientY - offsetY,
    });
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = (e) => {
    if (this.state.isDragging) {
      const { clientX, clientY } = e;
      const { initialX, initialY } = this.state;
      const offsetX = clientX - initialX;
      const offsetY = clientY - initialY;
      this.setState({
        offsetX,
        offsetY,
        lastX: offsetX, // 更新上一次最後拖曳的位置
        lastY: offsetY,
      });
    }
  };

  handleMouseUp = () => {
    this.setState({ isDragging: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    const { text } = this.props;
    const { isDragging, offsetX, offsetY, lastX, lastY } = this.state;

    return (
      <div
        className={`draggable-text ${isDragging ? 'dragging' : ''}`}
        onMouseDown={this.handleMouseDown}
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        {text}
        <p>Last Position: X={lastX}, Y={lastY}</p> {/* 顯示上一次最後拖曳的位置 */}
      </div>
    );
  }
}

export default DraggableText;
