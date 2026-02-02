package main

import (
	"fmt"
)

func add(x, y int) int{
	return x+y
}
func subtract(x, y int) int{
	return x-y
}
func multiply(x, y int) int{
	return x*y
}
func divide(x, y int) int{
	return x/y
}

func main(){
	var operator string
	var x, y int

	fmt.Println("\nwelcome to noahs calculator (the results are integers for now)")
	fmt.Println("type in the first number: ")
	fmt.Scan(&x)
	fmt.Println("type in the second number: ")
	fmt.Scan(&y)
	fmt.Println("which operation do you wish to use?: ")
	fmt.Scan(&operator)

	fmt.Println("the result is:")
	switch operator{
		case "+":
			fmt.Println(add(x, y))
		case "-":
			fmt.Println(subtract(x, y))
		case "/":
			fmt.Println(divide(x, y))
		case "*":
			fmt.Println(multiply(x, y))
		default:
			fmt.Println("Invalid operator")
	}
}