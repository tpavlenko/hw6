// 3. В задачу п.2 добавить 3ий аргумента flag, который является boolean.Если флаг true, тогда при наличии
// свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

// assignObjects({ ...}, { ...}, false);


function assignObjects(obj1, obj2, flag) {
	var assigned = {};

	function firstObjectKey() {
		for (key in obj1)
			assigned[key] = obj1[key];
	}

	function secondObjectKey() {
		for (key in obj2)
			assigned[key] = obj2[key];
	}

	if (flag === true) {
		secondObjectKey()
		firstObjectKey()
	} else {
		firstObjectKey()
		secondObjectKey()
	}
	return assigned;
}

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, }, true);

console.log(result);