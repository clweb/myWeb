class Promise {
    constructor(executorCallBack) {
        // 默认状态 ：等待
        this.status = 'pending';
        //初始化传入的值
        this.value = undefined;
        this.fulFilledArray = [];
        this.rejectedArray = [];
        let resolveFn = (result) => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                //只在等待和成功之间转换状态
                if (this.status == 'pending') {
                    //成功后的状态值与成功的数据
                    this.status = "fulfilled";
                    this.value = result;
                    //给成功传入的值数组使用 forEach()
                    this.fulFilledArray.forEach(item => item(this.value));
                }
            }, 0);
        };
        let rejectFn = (reason) => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                //只在失败和等待之间转换状态
                if (this.status == 'pending') {
                    //失败后的状态值和失败的原因
                    this.status = "rejected";
                    this.value = reason;
                    //给失败传入的值数组使用 forEach()
                    this.rejectedArray.forEach(item => item(this.value));
                }
            }, 0);
        };

        /* 对于抛错的处理 */
        try {
            executorCallBack(resolveFn, rejectFn);
        } catch (e) {
            rejectFn(e);
        }
    }
    then(fulFilledCb, rejectedCb) {
        //返回一个新的 Promise 实例
        return new Promise((resolve, reject) => {
            this.fulFilledArray.push((value) => {
                try {
                    // console.log(value);
                    let x = fulFilledCb(value);
                    // console.log(x);
                    //如果返回的是一个Promise实例传入x.then(resolve,reject),如果不是传入resolve(x)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }

            });
            this.rejectedArray.push((value) => {
                try {
                    let x = rejectedCb(value);
                    //如果返回的是一个Promise实例传入x.then(resolve,reject),如果不是传入resolve(x)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
        });

    }
    catch (rejectedCb) {
        return this.then(null, rejectedCb);
    }
}
/* 
    p1 -> fulFilledArray[function(){
            let x=fuFilledCb(this.value);
    }]

*/

//导出
module.exports = Promise;