
export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
export function distanceCalculation(array1 = [0, 0], array2 = [0, 0]) {
  var _dis = Math.sqrt(Math.pow((array1[0] - array2[0]), 2) + Math.pow((array1[1] - array2[1]), 2));
  //console.log('%c _dis:', 'color: blue', _dis);

  return _dis;
}
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function movePoint(x, y, angle, distance) {
  //console.log('%c movePoint:', 'color: red', x, y, angle, distance);

  const radians = angle * Math.PI / 180; // 將角度轉換為弧度
  const dx = distance * Math.cos(radians);
  const dy = distance * Math.sin(radians);
  return [x + dx, y + dy];  
}
export function removeDecimalsFromArray(array = []){
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(array[index]);
  }
  // array.forEach(element => {
  //      element = Math.floor(element);
  // });
  console.log('%c removeDecimalsFromArray:', 'color: red', array);
  return array;
}
export function removeDecimalsCoordinates(array = []) {
    array[0] = Math.floor(array[0]);
    array[1] = Math.floor(array[1]);
  console.log('%c removeDecimalsCoordinates:', 'color: red', array);
  return array;
}

export function createExpTable(levels) {
  const slope = 50; // 每增加一個等級所需要的經驗值
  const yIntercept = 0; // 等級 1 所需要的經驗值

  const expTable = [];

  for (let i = 1; i <= levels; i++) {
    const exp = slope * (i - 1) + yIntercept;
    const title = i <= 1900 ? `等級 ${i}` : "神一般的開發者";
    expTable.push({ level: i, exp, title });
  }
  //this.expTable=expTable;
  console.log('%c createExpTable:', 'color: #afcdf3;',this.expTable);

  return expTable;
}

//export default zzz=new MonsterManager();



//declare module 'MapAreaMonsterTable'
