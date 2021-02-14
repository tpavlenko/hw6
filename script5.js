// 5. Адаптировать функцию assignObjects() под неопределенное количество объектов.
// 	assignObjects(obj1, obj2, ....., objn);

function foo(...args) {
	for (var i = 1, obj = {}; i < arguments.length; i++) {
		obj[i] = arguments[i];
		return obj[i];
	}
}
foo();

function assignObjects(callback) {

}

var result = assignObjects();

console.log(result);