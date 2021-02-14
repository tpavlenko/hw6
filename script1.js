// 1. Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент
// с заданным текстом или нет.Функция первым параметром должна принимать текст элемента, а вторым - массив,
// 	в котором делается поиск.Функция должна возвращать true или false.

function inArray(text, arr) {
	for (var i = 0, size = arr.length; i < size; i++) {
		if (arr[i] === text) {
			return true;
		}
	}
	return false;
}

var result = inArray('hello', ['svnj', 'hello', 'cvpoq']);
console.log(result);