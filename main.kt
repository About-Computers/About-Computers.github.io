import java.util.Scanner
fun main() {
    val s = Scanner(System.`in`)
    print("Enter length: ")
    val l = s.nextFloat()
    print("Enter breadth: ")
    val b = s.nextFloat()
    s.close()
    val a = l*b
    println("Area of rectangle with length $l unit and breadth $b unit is $a unit².")
}