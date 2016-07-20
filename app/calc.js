
function sum(arg){
	
	return arg.reduce(function(a,b){
		return a+b
	},0)
	
}

module.exports.sum = sum