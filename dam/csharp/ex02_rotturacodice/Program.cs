using System;

namespace ex02
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] a = {  1,  12,  12,  33,  33,  33, 33,  5,  5,  7};
            int [] b = {100,  10,  30,  40,  70,  80, 90,200, 20, 30};

            Console.WriteLine("a: " + string.Join(", ", a));
            Console.WriteLine("b: " + string.Join(", ", b));

            int sum = 0;
            for (int i=0; i<a.Length; i++){
                sum = sum +  b[i];
                if (i==a.Length-1 || a[i]!=a[i+1]){
                    Console.WriteLine("{0,5}: {1,7}", a[i], sum);
                    sum = 0;
                }
            }
    }
}
