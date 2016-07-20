const calc = require("./calc")

const numbers = [
	1,
	2,
	3,
	4
]

const result = calc.sum(numbers)

console.log(`Result is ${result}`)

const readline = require("readline")

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

r1.question("Enter First number ",
	(answer1)=>{
		r1.question("Enter Second number ",(answer2)=>{
			result2 = calc.sum([Number(answer1),Number(answer2)])
			console.log(`Result is ${result2}`)
			r1.close()
	})
})

