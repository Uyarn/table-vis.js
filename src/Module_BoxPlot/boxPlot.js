'use strict';

import base from '../_Base/base';
import regBase from '../_Base/regBase';

// import box plot basic modules.
import drawBoxPlot from './drawBoxPlot';
import calcPlot from './calcPlot';
// insert css style to head
import insertCss from '../_DOM/insertCss';
// create fixed div tabular
import createTabular from '../_DOM/createTabular';
import swapTabularVis from '../_DOM/swapTabularVis';

const boxPlot=function(table,direction,index){
  // 判断绑定的参数是否为dom元素
    let cell= base(table,direction,index)[0],
        titleCell = base(table,direction,index)[1];
    let cellData=[];
    let click=false;
    let reg = new RegExp(/^\d+\.?\d*$/);
    let tabular_container;
    // to insert the diagram css style

    // this is to reslove the prolem of choosing multi rows and column
    if(!this.initial){
      insertCss();
      tabular_container=createTabular();
      this.initial = true;
    }
    else {
      tabular_container = document.getElementById('tabular_vis');
    }
    let regCell = regBase([cell,titleCell])[0];
        titleCell = regBase([cell,titleCell])[1];
    let origin =regCell;
    let boxPlotData = calcPlot(regCell);
    // this for loop is used to bind the click event.
    for(let i =0;i<cell.length;i++){

        cellData.push(regCell[i]);
        // use the indexOf method of Array to get the postion of each cell
        let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
        // add mouseenter event
        cell[i].style.cursor='pointer';
        cell[i].addEventListener('click',
          ()=>{
            // let e=event||window.event;
            click=swapTabularVis(click,tabular_container);
            if(click)
               drawBoxPlot(cellData,cellIndex,boxPlotData,direction,titleCell);
          },true);
    }

}
/*!
 *  exports the boxPlot chart module.
 */
export default boxPlot;
