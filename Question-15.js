//function defaultParamsFunc(a, b, c) {
//    if (c === undefined) {
//        c = 4;
//    }
//    return a * b * c;
//	};
//	console.log(defaultParamsFunc(3, 1)); // 12
//	console.log(defaultParamsFunc(3, 10)); // 120

const defaultParamsFunc = (a,b,c=4) => a*b*c;
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120