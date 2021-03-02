// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
// который состоит из свойств обоих обьектов(склеить).Если свойство повторяется, то взять значение второго обьекта


function assignObjects(obj1, obj2) {
	var assigned = {};
	for (key in obj1) {
		assigned[key] = obj1[key];
	}
	for (key in obj2) {
		assigned[key] = obj2[key];
	}
	return assigned;
}

var result = assignObjects({ a: 1, b: 2, }, { c: 3, d: 4, b: 20, });

console.log(result);