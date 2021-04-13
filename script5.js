// 5. Адаптировать функцию assignObjects() под неопределенное количество объектов.
// 	assignObjects(obj1, obj2, ....., objn);


function assignObjects () {
		var obj = {};
		var flag = typeof arguments[arguments.length - 1] == 'boolean' ? arguments[arguments.length - 1] : false

		for (var i = 0; i < arguments.length; i++) {
			var args = arguments[i];
			for (var key in args) {
				if (flag && obj.hasOwnProperty(key)) {
					continue
				} else {
					obj[key] = args[key];
				}
			}
		}
		return obj;
	}

var obj1 = { a: 1, b: 2, };
var obj2 = { a: 30, d: 4, };
var obj3 = { c: 5, d: 100, };

var result = assignObjects(obj1, obj2, obj3, true);

console.log(result);