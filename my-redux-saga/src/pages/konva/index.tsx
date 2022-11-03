import React, { useEffect } from 'react';
import Konva from 'konva';

const CanvasLayout = () => {
  useEffect(() => {
    // 创建一个state
    const stage = new Konva.Stage({
      container: 'container', // id of container <div>
      width: 500,
      height: 500,
    });

    // 创建一个layer
    const layer = new Konva.Layer();

    // 创建我们的shape
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });
    circle.draggable(true);

    // circle.on('mouseout touchend', function () {
    //   console.log('user input');
    // });

    circle.on('click', function () {
      console.log('user click');
    });

    var pentagon = new Konva.RegularPolygon({
      x: 71,
      y: 438,
      sides: 5,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      shadowOffsetX: 20,
      shadowOffsetY: 25,
      shadowBlur: 40,
      opacity: 0.5,
    });
    pentagon.on('dblclick', () => {
      console.log('dblclick');
    });
    pentagon.on('dragmove', (e) => {
      console.log('drag', e);
    });
    pentagon.draggable(true);

    // 增加shape 到layer上
    layer.add(circle);
    layer.add(pentagon);

    // 将layer添加到state上
    stage.add(layer);

    // draw the image
    layer.draw();
  }, []);
  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'c2', // id of container <div>
      width: 500,
      height: 500,
    });
    var layer = new Konva.Layer();
    var rect1 = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
    });
    var rect2 = new Konva.Rect({
      x: 120,
      y: 120,
      width: 100,
      height: 50,
      fill: 'yellow',
      stroke: 'black',
      strokeWidth: 4,
    });
    layer.add(rect1);
    layer.add(rect1, rect2);
    stage.add(layer);
    layer.draw();
  }, []);
  return (
    <>
      <div id='container'></div>
      <div id='c2'></div>
    </>
  );
};

export default CanvasLayout;
