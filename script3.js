// 3. В задачу п.2 добавить 3ий аргумента flag, который является boolean.Если флаг true, тогда при наличии
// свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

// assignObjects({ ...}, { ...}, false);


function assignObjects(obj1, obj2, flag) {
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

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, }, true);

console.log(result);