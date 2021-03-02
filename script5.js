// 5. Адаптировать функцию assignObjects() под неопределенное количество объектов.
// 	assignObjects(obj1, obj2, ....., objn);

function assignObjects() {
	var assigned = {};

	for (var i = 0; i < arguments.length; i++) {
		var args = arguments[i];

		for (var key in args) {
			assigned[key] = args[key];
		}
	}
	return assigned;
}

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, },);

console.log(result);



// function assignObjects(...args) {
// 	var assigned = {};

// 	for (var key in args) {
// 		assigned[key] = args[key];
// 	}
// 	return assigned;
// }

// var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, },);

// console.log(result);



// function assignObjects(...args) {
// 	var assigned = {};

// 	assigned = args;

// 	return assigned;
// }

// var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, },);

// console.log(result);