using System;

namespace ex01
{
    class Program
    {

        static bool contieneLaCifra(int n, int c)
        {
            while (n!=0){
                if (n%10==c)
                {
                    return true;
                }
                n = n / 10;
            }
            return false;
        }

        static bool daSaltare(int n){
            if (n%7==0 || contieneLaCifra(n, 7))
            {
                return true;
            }
            else{
                return false;
            }            
        }  

        static int conversioneControllata(string v, int def)
        {
            try {
                return Convert.ToInt32(v);
            }
            catch
            {
                return def;
            }            
        }


        static void Main(string[] args)
        {

            Console.WriteLine(args.Length);

            string minv;
            string maxv;

            if (args.Length<2)
            {
                Console.WriteLine("Valore partenza:");
                minv = Console.ReadLine();
                Console.WriteLine("Valore arrivo:");
                maxv = Console.ReadLine();
            }
            else{
                minv = args[0];
                maxv = args[1];
            }

            Console.WriteLine(minv);
            Console.WriteLine(maxv);

            int min;
            int max;

            min = conversioneControllata(minv, 0);
            max = conversioneControllata(maxv, 100);

            int i;
            for (i=min; i<=max; i++){
                Console.Write((daSaltare(i)?"bum":i.ToString())+ " ");
            }

        }
    }
}
