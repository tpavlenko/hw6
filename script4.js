// 4. В задачу п.3, сделать параметр flag не обязательный, если параметр не передать -
// 	устанавливать значение false.

function assignObjects(obj1, obj2, flag = false) {
	var assigned = {};

	if (flag === true) {
		for (key in obj2)
			assigned[key] = obj2[key];
		for (key in obj1)
			assigned[key] = obj1[key];
		return assigned;
	} else {
		for (key in obj1)
			assigned[key] = obj1[key];
		for (key in obj2)
			assigned[key] = obj2[key];
		return assigned;
	}
}

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, });

console.log(result);