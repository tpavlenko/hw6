// 4. В задачу п.3, сделать параметр flag не обязательный, если параметр не передать -
// 	устанавливать значение false.

function assignObjects(obj1, obj2, flag = false) {
	var assigned = {};

	function objectKey(obj) {
		for (key in obj)
			assigned[key] = obj[key];
	}

	if (flag === true) {
		objectKey(obj2)
		objectKey(obj1)
	} else {
		objectKey(obj1)
		objectKey(obj2)
	}
	return assigned;
}

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, },);

console.log(result);