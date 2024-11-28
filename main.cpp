#include <iostream>
using namespace std;

int main() {
    float l, b, a;
    cout << "Enter length:";
    cin >> l;
    cout << "Enter breadth:";
    cin >> b;
    a = l * b;
    cout << "Area of rectangle with length " << l << " unit and breadth " << b << " unit is " << a << " unit².";
    return 0; 
}