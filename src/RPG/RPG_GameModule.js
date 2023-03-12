

import * as _GF from './GeneralFunction.js';

export class GeneraAbilityValue {
  index=0;
  basicLevel =1;
  speedOfAction = 0.7;
  healthPoints = 100;
  attackSpeed = 0.5;
  maximumRangeOfMovement =5;
  attackDistance = 5;
  attackPower=5;
  state = "on standby";
  experienceRequiredForUpgrade=100;
  timerlist= [
  ];
  coordinatePosition = [20, 20];
  destinationCoordinates= [5,5];
  destinationAngle =0;

  constructor(name= 0) {
    this.id = name;
    this.name = name;
    //this._this = this;
    this.coordinatePosition = [_GF.getRandomInt(0, CentralManager.instance.mapSize[0]), _GF.getRandomInt(0, CentralManager.instance.mapSize[1])]; 
    //console.log('%c this.mapSize:', 'color: red', mapSize);
    //console.log('%c this.coordinatePosition:', 'color: red', this.coordinatePosition);
    this.timerlist.push(setInterval(this.attackSpeedInterval.bind(this), this.attackSpeed * 1000));
    this.timerlist.push(setInterval(this.speedOfActionInterval.bind(this), this.speedOfAction * 100));
  }
  
  attackSpeedInterval() {
    if (this.state == "in combat") {
      CentralManager.instance._GamePlayer.injuried(this.name, this.attackPower);
    }
    //console.log('%c attackSpeedInterval:', 'color: red');
  }
  speedOfActionInterval() {
    //console.log('%c this.speedOfActionInterval:', 'color: red', this.coordinatePosition);
    var central =CentralManager.instance;
    //console.log('%c central:', 'color: red', central);
    if (this.state=="on standby"){
      this.destinationAngle = _GF.getRandomInt(0, 360); 
      var _RandomMovement = _GF.getRandomInt(1, this.maximumRangeOfMovement);
      this.destinationCoordinates = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle,
        _RandomMovement);
       
      var pass = false;
      while (!pass) {
        //console.log('%c _temp', 'color: blue', _temp);
        this.destinationAngle = _GF.getRandomInt(0, 360);
        this.destinationCoordinates = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle,
          _GF.getRandomInt(1, this.maximumRangeOfMovement))
        var _temp = this.destinationCoordinates;

        if (_temp[0] < CentralManager.instance.mapSize[0] && _temp[1] < CentralManager.instance.mapSize[1] &&
          _temp[0] > 1 && _temp[1] > 1) {
          pass = true;
        }
      }
      //console.log('%c new destinationCoordinates', 'color: blue', this.destinationCoordinates);

      this.state ="on the move";
      //console.log('%c this.state:on the move', 'color: blue');

    }
    //var _dis = _GF.distanceCalculation(this.coordinatePosition, this.destinationCoordinates);

    //console.log('%c this._dis:', 'color: red', _dis);
    else if (this.state == "on the move")
    {
      if (_GF.distanceCalculation(this.coordinatePosition, this.destinationCoordinates) > 1){
        this.coordinatePosition = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle, 0.1); 
        var _dis = central._GamePlayer.determineWhetherItIsInTheCombatRange(this.coordinatePosition);
        if (_dis <= this.attackDistance) {
          this.state = "in combat"
        }
      }
      else{
        this.state = "on standby"
        //console.log('%c this.state:on standby', 'color: blue');
      }

    }

  }
  beforeDestroy() {
    console.log('%c beforeDestroy:', 'color: red', `beforeDestroy: ${this.name}`);
    this.timerlist.forEach((element) => {
      clearInterval(element);
    });
    // this.timerlist.forEach(function (value) {
    //   console.log(value);
    // });
  }
  injuried(_attacker="空",_damageValue=0){
    if (this.healthPoints > 0) {
      this.healthPoints -= _damageValue;
      console.log('%c this.healthPoints:', 'color: red', this.healthPoints);

      //CentralManager.instance.addLogMessage(`The ${this.name} takes ${_damageValue} points of damage `);
      CentralManager.instance.addLogMessage(`The ${_attacker} attacks the ${this.name+this.index}, causing ${_damageValue} points of damage. `);

      
      if (this.healthPoints <= 0) {
        CentralManager.instance.addLogMessage(`The ${this.name} is dead `);
        this.healthPoints = 0;
        this.beforeDestroy();
        console.log('%c CentralManager.instance:', 'color: red', CentralManager.instance);
        return "is dead"
      }
      return "Alive"
    }
  }
  determineWhetherItIsInTheCombatRange(inputCoordinate){
    return _GF.distanceCalculation(this.coordinatePosition, inputCoordinate);
  }
  refreshMapSize(){
    this.coordinatePosition = [CentralManager.instance.mapSize[0] / 2, CentralManager.instance.mapSize[1] / 2]; 
  }
}

export class GamePlayer extends GeneraAbilityValue {
  constructor() {
    super();
    //console.log('%c SlimeMonster:', 'color: red');
    this.currentExperiencePoints=0;
    this.name = "Player";
    console.log('%c this.GamePlayer:', 'color: red', this);
     
  }
  // generateEXPTable(){
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
      
  //   }
  // }
  attackSpeedInterval() {
    //if (this.state == "in combat") {
    //CentralManager.instance._GamePlayer.injuried(this.name, this.attackPower);
    var getExp=CentralManager.instance._monsterManager.attackTheClosestToMonsters(this);
    if(getExp>0){
      this.currentExperiencePoints+=getExp;
      CentralManager.instance.addLogMessage(`Gain ${getExp} experience.`);

      this.getLevelData(this.basicLevel);

      if(this.currentExperiencePoints>=this.getLevelData(this.basicLevel)){
        this.levelUp();
      }
    }
    //}
    //console.log('%c attackSpeedInterval:', 'color: red');
  }
  getLevelData(_level) {
    let levelExp=CentralManager.instance.expTable.find(x=>x.level==_level);
    //console.log('%c getLevelData:', 'color: #afcdf3;',levelExp);
    return levelExp.exp;
  }

  speedOfActionInterval() {
    //console.log('%c GamePlayer.speedOfActionInterval:', 'color: #34a7ce8f');
      var central = CentralManager.instance;
      //console.log('%c central:', 'color: red', central);
      //console.log('%c determineWhetherItIsInTheCombatRange:', 'color: red', _dis);
      if (this.state == "on standby") {
        this.destinationAngle = _GF.getRandomInt(0, 360);
        var _RandomMovement = _GF.getRandomInt(1, this.maximumRangeOfMovement);
        this.destinationCoordinates = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle,
          _RandomMovement);

        var pass = false;
        while (!pass) {
          //console.log('%c _temp', 'color: blue', _temp);
          this.destinationAngle = _GF.getRandomInt(0, 360);
          this.destinationCoordinates = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle,
            _GF.getRandomInt(1, this.maximumRangeOfMovement))
          var _temp = this.destinationCoordinates;

          if (_temp[0] < CentralManager.instance.mapSize[0] && _temp[1] < CentralManager.instance.mapSize[1] &&
            _temp[0] > 1 && _temp[1] > 1) {
            pass = true;
          }
        }
        //console.log('%c new destinationCoordinates', 'color: blue', this.destinationCoordinates);

        this.state = "on the move";
        //console.log('%c this.state:on the move', 'color: blue');

      }
      //var _dis = _GF.distanceCalculation(this.coordinatePosition, this.destinationCoordinates);

      //console.log('%c this._dis:', 'color: red', _dis);
      else if (this.state == "on the move") {
        if (_GF.distanceCalculation(this.coordinatePosition, this.destinationCoordinates) > 1) {
          this.coordinatePosition = _GF.movePoint(this.coordinatePosition[0], this.coordinatePosition[1], this.destinationAngle, 0.1);
          var _dis = central._GamePlayer.determineWhetherItIsInTheCombatRange(this.coordinatePosition);
          if (_dis <= this.attackDistance) {
            this.state = "in combat"
          }
        }
        else {
          this.state = "on standby"
          //console.log('%c this.state:on standby', 'color: blue');
        }

      }

    
  }
  levelUp(){
    CentralManager.instance.addLogMessage(`Character ${this.name} has been upgraded.`);
    this.basicLevel+=1;
    this.healthPoints = 100 + (this.basicLevel*10);
    this.currentExperiencePoints=0;
  }
}

export class SlimeMonster extends GeneraAbilityValue {
  constructor(index) {
    super();
    //console.log('%c SlimeMonster:', 'color: red');
    this.attackDistance = 2;
    this.healthPoints = 5;
    this.name = "Slime";
    this.index=index;
    this.exp=50;
  }
}

export class GoblinMonster extends GeneraAbilityValue {
  constructor(index) {
    super();
    //console.log('%c GoblinMonster:', 'color: red');
    this.attackDistance = 5;
    this.healthPoints = 50;
    this.name = "Goblin";
    this.index=index;
    this.exp=150;
  }
}

export class CentralManager{
  mapSize= [5, 5];
  //_monsterManager = new MonsterManager();
  _BackpackBool=false;
  _AbilityTableBool = false;
  _CoordinatesPanal = false;
  expTable=_GF.createExpTable(100);

  //_GamePlayer = new GamePlayer();
  _LogMessage=[];
  timerlist = [
  ];
  constructor() {
    if (!CentralManager.instance) {
      CentralManager.instance = this;
      this._monsterManager = new MonsterManager();    
      this._GamePlayer = new GamePlayer();
    }
    //return CentralManager.instance;
    console.log('%c CentralManager:', 'color: #afcdf3;');
    this.timerlist.push(setInterval(this.setAllCoordinatesPoint.bind(this), this.speedOfAction * 500));
  }
  getLogMessage() {
    console.log('%c getLogMessage:', 'color: #afcdf3;',this);

    return this._LogMessage;
  }
  

  setAllCoordinatesPoint() {

    var canvas = document.getElementById("MiniMap");
    //console.log(canvas)
    if (canvas == null)
       return false;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var _list = this._monsterManager.getJSON_MonsterMaplist(); 
    _list.push(this._GamePlayer);

    //console.log('%c _list:', 'color: yellow', _list);
    //console.log('%c _list:', 'color: yellow', canvas.width, canvas.height);


    // for (let index = 0; index < _list.length; index++) {
    //   const element = _list[index].coordinatePosition;
    //   ctx.rect(element[0], element[1], 5, 5);
    // } 
    // ctx.fillStyle = "blue";//填充顏色,預設是黑色
    // ctx.fill();//填滿產生
    
    // ctx.closePath();
    
    //-----------circle-----------
    //ctx.strokeStyle = "rgb(255 255 255 / 100%)";
    //ctx.lineWidth = 1;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#c82124'];

    for (let index = 0; index < _list.length; index++) {

      if (_list[index].name=='Player'){
        ctx.fillStyle = '#000000';
      }
      else{
        ctx.fillStyle = '#ff0000';
      }
      //var zzz = colors[_GF.getRandomInt(0, colors.length)];

      //console.log('%c zzz:', 'color: yellow', _GF.getRandomInt(0, colors.length));
      ctx.beginPath();
      const element = _list[index].coordinatePosition;
      ctx.arc(element[0], element[1], 1, 0, 2 * Math.PI);      
      ctx.fill();
      //ctx.stroke();
    } 
    //console.log("This is a static function.");
  }
  enterMap(mapData){
    //var mapData = eval(`${mapData.}`);
    this.addLogMessage(`EnterMap ${mapData.mapName}`);
    console.log('%c mapData:', 'color: green', mapData);
    CentralManager.instance.mapSize = mapData.mapSize;

    this._GamePlayer.refreshMapSize();
    var canvas = document.getElementById("MiniMap");
    console.log(canvas)
    if (canvas == null)
      return false;
    var ctx = canvas.getContext('2d');
    canvas.width = CentralManager.instance.mapSize[0];
    canvas.height = CentralManager.instance.mapSize[1];
    this.addLogMessage("mapInitializationMonster");

    this._monsterManager.mapInitializationMonster(mapData.mapMonster);
  }
  viewAllCoordinates(){
    this._CoordinatesPanal = !this._CoordinatesPanal;
    //return _list.filter(word => word.length > 6);
    // for (let index = 0; index < _list.length; index++) {
    //   const element = _list[index].coordinatePosition;
    //   //console.log('%c viewAllCoordinates:', 'color: blue', element);
    // } 
    //console.log('%c viewAllCoordinates:', 'color: blue', viewAllCoordinates);

    const iterator = this._monsterManager.getMonsterMaplist()[Symbol.iterator]();
    console.log('%c iterator:', 'color: blue', iterator);

  }
  obtainBiologicalInformationOnTheMap(){
    var _list = this._monsterManager.getJSON_MonsterMaplist();
    _list.push(this._GamePlayer);
    return _list;
  }
  
  // obtainBiologicalInformationOnTheMap(){
  //   var _list=this._monsterManager.getJSON_MonsterMaplist()
  //   _list.forEach(element => {
  //      if(element.)
  //   });

  //   _list.push(this._GamePlayer);
  //   return _list;
  // }
  
  centralBeforeDestroy(){
    CentralManager.instance = null;
    this._LogMessage=[];
    this.timerlist.forEach(element => {
      clearInterval(element);
    });
    var _list = this._monsterManager.getMonsterMaplist();
    _list.push(this._GamePlayer);
    //this._GamePlayer.beforeDestroy();
    for (let index = 0; index < _list.length; index++) {
      const element = _list[index];
      _list[index].beforeDestroy();
    }
  }
  addLogMessage(logMessage=""){
    this._LogMessage.push(logMessage);
    if (this._LogMessage.length>50) {
      //this._LogMessage.pop(); 
      this._LogMessage.shift();
    }

  }
  attackTheNearestTarget(){
    console.log('%c attackTheNearestTarget:', 'color: blue');

  }
  detectTheNearestTarget(){
    console.log('%c detectTheNearestTarget:', 'color: blue');

  }
  static showThis() {
    console.log('%c showThis:', 'color: blue', CentralManager.instance);

  }
}

export class MonsterManager {
  constructor() {
    let monsterMaplist = [];

    //console.log('%c Mons terManager_constructor:', 'color: red');
    this.generateSpecifieMonster = function (monsterName,numberOfMonsters) {
      monsterMaplist.push(eval(`new ${monsterName}(numberOfMonsters)`));
    //console.log('%c GenerateSpecifieMonster_monsterMaplist:', 'color: red', this.monsterMaplist);
    //this.monsterMaplist.push(new GoblinMonster());
    }
    this.getJSON_MonsterMaplist = function () {
      //this.monsterMaplist = JSON.parse(JSON.stringify(monsterMaplist));
      return JSON.parse(JSON.stringify(monsterMaplist));
    }

    this.getMonsterMaplist = function () {
      //this.monsterMaplist = JSON.parse(JSON.stringify(monsterMaplist));
      return monsterMaplist;
    }
    this.attackTheClosestToMonsters = function (_GamePlayerData) {
      //this.monsterMaplist = JSON.parse(JSON.stringify(monsterMaplist));
     // var _target;
      for (let index = 0; index < monsterMaplist.length; index++) {
        const monster = monsterMaplist[index];
        let _dis=_GF.distanceCalculation(_GamePlayerData.coordinatePosition,monster.coordinatePosition);
        if(_dis<10){
          console.log('%c attackTheClosestToMonsters:距離內', 'color: blue',_dis);
          let _monsterStatus=monster.injuried(_GamePlayerData.name, _GamePlayerData.attackPower);
          if(_monsterStatus=="is dead"){
            console.log('%c splice before', 'color: blue',this.getJSON_MonsterMaplist());
            monsterMaplist.splice(index,1);
            console.log('%c splice After', 'color: blue',monsterMaplist);
            //CentralManager.instance.addLogMessage(`The ${_attacker} attacks the ${this.name+this.index}, causing ${_damageValue} points of damage. `);
            return monster.exp;
          }
          break;
          //if(element.healthPoints)
        }
      }
      return 0;
      // for (const monster of monsterMaplist) {

      // }
      //return monsterMaplist;
    }

    this.mapInitializationMonster = function (mapList) {
        mapList.forEach(element => {
        var numberOfMonsters = monsterMaplist.filter(x => x.name === element.name).length;

        while (numberOfMonsters < element.maxNumber) {
          this.generateSpecifieMonster(element.className,numberOfMonsters);
          numberOfMonsters += 1;
        }
        //console.log('%c mapInitializationMonster:', 'color: red', this.monsterMaplist);
      });
    }


  }


}

export const callEval = (FuncionName) => {
  return eval(`new ${FuncionName}()`)
};



//export default zzz=new MonsterManager();



//declare module 'MapAreaMonsterTable'
