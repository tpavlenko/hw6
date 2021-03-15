// 5. Адаптировать функцию assignObjects() под неопределенное количество объектов.
// 	assignObjects(obj1, obj2, ....., objn);


function assignObjects() {
	var assigned = {};
	var flag = typeof arguments[arguments.length - 1] == 'boolean' ? arguments[arguments.length - 1] : false

	for (var i = 0; i < arguments.length; i++) {
		var args = arguments[i];
		for (var key in args) {

			if (flag && assigned.hasOwnProperty(key)) {
				continue
			} else {
				assigned[key] = args[key];
			}
		}
	}
	return assigned;
}

var obj1 = { a: 1, b: 2, };
var obj2 = { c: 3, d: 4, };
var obj3 = { d: 5, b: 0, };

var result = assignObjects(obj1, obj2, obj3, true);

console.log(result);