let a = 7,b=9,c=8;
if ((a == b) && (b == c))
    console.log("Equilateral Triangle");
else if (((a == b) &&(a!=c)) || ((b==c)&& (b!=a))|| ((c==a)&&(c!=b)))
    console.log("Isosceles Triangle");
else
    console.log("Scalene Triangle");