/* 缓动动画  v1
function animate(obj, target, callback) {
    // 确保元素只有一个定时器执行
    clearInterval(obj.timer);
    // 运动核心就是 不断调整位置
    obj.timer = setInterval(function() {
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0? Math.ceil(step) : Math.floor(step);
      if (obj.offsetLeft == target) {
           clearInterval(obj.timer);
           if (callback) {
               callback();
               return;
           }
      }
      obj.style.left = obj.offsetLeft + step + "px";
    }, 30);
  }
  */
/* v2
 function animate(obj, target, attr, callback) {
    // 确保元素只有一个定时器执行
    clearInterval(obj.timer);
    // 运动核心就是 不断调整位置
    obj.timer = setInterval(function() {
      var current = parseInt(getStyle(obj,attr));  
      var step = (target - current) / 10;
      step = step > 0? Math.ceil(step) : Math.floor(step);
      if (current == target) {
           clearInterval(obj.timer);
           if (callback) {
               callback();
               return;
           }
      }
      obj.style[attr] = current + step + "px";
    }, 30);
  }
  // 获取元素最终样式
  function getStyle(obj,attr) {
    if (window.getComputedStyle) {
       return window.getComputedStyle(box,false)[attr];
    } else {
      return obj.currentStyle[attr];
    }
  }

  */
/* v3
 function animate(obj, target, attr, callback) {
    // 确保元素只有一个定时器执行
    clearInterval(obj.timer);
    // 运动核心就是 不断调整位置
    obj.timer = setInterval(function() {
      var current;  
      if (attr === 'opacity') {
        current = parseFloat(getStyle(obj,'opacity')) * 100;
      } else {
          current = parseInt(getStyle(obj,attr));
      }
      console.log(current);
      var step = (target - current) / 10;
      step = step > 0? Math.ceil(step) : Math.floor(step);
      if (Math.round(current) == target) {
           clearInterval(obj.timer);
           if (callback) {
               callback();
               return;
           }
      }
      if (attr === 'opacity') {
         obj.style[attr] = (current + step) / 100;   
      } else {
        obj.style[attr] = current + step + "px";
      } 
    }, 30);
  }
  // 获取元素最终样式
  function getStyle(obj,attr) {
    if (window.getComputedStyle) {
       return window.getComputedStyle(obj,false)[attr];
    } else {
      return obj.currentStyle[attr];
    }
  }
  */

// 0.2---->0.8 20------>80
// 1------>0.2
// animate(obj,80)

// animate(obj,{'left': 100, 'width': 200})
function animate(obj, json, callback) {
  // 确保元素只有一个定时器执行
  clearInterval(obj.timer);
  // 运动核心就是 不断调整位置
  obj.timer = setInterval(function() {
    var current;
    for (var attr in json) {
      if (attr === "opacity") {
        current = parseFloat(getStyle(obj, "opacity")) * 100;
      } else if (attr === 'zIndex') {
        current = parseInt(getStyle(obj,attr));
      } else {
        current = parseInt(getStyle(obj, attr));
      }
      var step = (json[attr] - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (Math.round(current) == json[attr]) {
        clearInterval(obj.timer);
        if (callback) {
          callback();
          return;
        }
      }
      if (attr === "opacity") {
        obj.style[attr] = (current + step) / 100;
      } else if (attr === 'zIndex') {
        obj.style[attr] =  current + step;
      } else {
        obj.style[attr] = current + step + "px";
      }
    }
  }, 30);
}
// 获取元素最终样式
function getStyle(obj, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(obj, false)[attr];
  } else {
    return obj.currentStyle[attr];
  }
}
