// 缓存
/*function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
        console.log('====>', cache);
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
    })
}
*/

export const Tools = {
    getRouterNameByPath: function (path) {
        return path.split('/').slice(-1)[0]
    },
    getZhRooteName: function () {
    },
    // 格式化日期
    formatterDate(date, formatStr) {
        let str = formatStr;
        const _date = new Date(date);
        const Week = ['日', '一', '二', '三', '四', '五', '六'];

        str = str.replace(/yyyy|YYYY/, _date.getFullYear());
        str = str.replace(/yy|YY/, (_date.getYear() % 100) > 9 ? (_date.getYear() % 100).toString() : '0' + (_date.getYear() % 100));

        str = str.replace(/MM/, (_date.getMonth() + 1) > 9 ? (_date.getMonth() + 1).toString() : '0' + (_date.getMonth() + 1));
        str = str.replace(/M/g, _date.getMonth());

        str = str.replace(/w|W/g, Week[_date.getDay()]);

        str = str.replace(/dd|DD/, _date.getDate() > 9 ? _date.getDate().toString() : '0' + _date.getDate());
        str = str.replace(/d|D/g, _date.getDate());

        str = str.replace(/hh|HH/, _date.getHours() > 9 ? _date.getHours().toString() : '0' + _date.getHours());
        str = str.replace(/h|H/g, _date.getHours());
        str = str.replace(/mm/, _date.getMinutes() > 9 ? _date.getMinutes().toString() : '0' + _date.getMinutes());
        str = str.replace(/m/g, _date.getMinutes());

        str = str.replace(/ss|SS/, _date.getSeconds() > 9 ? _date.getSeconds().toString() : '0' + _date.getSeconds());
        str = str.replace(/s|S/g, _date.getSeconds());

        return str;
    },
    getLastMonth() {
        const date = new Date();
        return date.getFullYear() + (date.getMonth() > 9 ? date.getMonth().toString() : '0' + date.getMonth());
    },
    createDownload(blob, name) {
        if ('msSaveOrOpenBlob' in navigator) {
            window.navigator.msSaveOrOpenBlob(blob, name + '.xlsx');
        } else {
            let url = window.URL.createObjectURL(new Blob([blob]));
            const $a = document.createElement('a');
            $a.style.display = 'none';
            $a.href = url;
            $a.setAttribute('download', name);
            $a.click();
            window.URL.revokeObjectURL(url);
        }
    },
    isEmpty(value) {
        return (value === '') || (value === null) || (value === undefined);
    },
    blobToText(blob) {
        return new Promise((resolve, reject) => {
            console.log('res===blob to text==>', blob);
            if (!this.isEmpty(blob)) {
                const fileReader = new FileReader();
                fileReader.readAsText(blob);
                fileReader.onload = function () {
                    try {
                        console.log('result==============>', this.result);
                        const result = JSON.parse(this.result);
                        if (result && result['resultCode'] === 'fail') {
                            resolve(result);
                        } else {
                            reject();
                        }
                    } catch (e) {
                        //TODO handle the exception
                        reject();
                    }
                }
            }
        })
    },
    getMonthLength(date) {
        let d = new Date(date)
        // 将日期设置为下月一号
        d.setMonth(d.getMonth() + 1)
        d.setDate('1')
        // 获取本月最后一天
        d.setDate(d.getDate() - 1)
        return d.getDate();
    }
}
