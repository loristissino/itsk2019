using System;

namespace Exercise01
{
    class Program
    {

        static bool ComprendeLaCifra(int n, int c=7)
        {
            while (n>0) {
                if (n%10==c){
                    return true;
                }
                n = n / 10;
            }
            return false;
        }

        static bool VaSaltato(int n)
        {
            if (n%7==0 || ComprendeLaCifra(n)){
                return true;
            }
            else{
                return false;
            }
        }

        static int ConvertiConControllo(string valore, int def)
        {
            try {
                return Convert.ToInt32(valore);
            }
            catch (Exception e) {
                Console.WriteLine(e.Message);
                return def;
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine(args.Length);
            int min = 0;
            int max = 100;
            string mins;
            string maxs;

            if (args.Length>=2){
                mins = args[0];
                maxs = args[1]; 
            }
            else
            {
                Console.WriteLine("Valore iniziale: ");
                mins = Console.ReadLine();
                Console.WriteLine("Valore finale: ");
                maxs = Console.ReadLine();
            }

            min = ConvertiConControllo(mins, 0);
            max = ConvertiConControllo(maxs, 100);


            for (int i=min; i<=max; i++)
            {
                Console.Write( ( VaSaltato(i) ? "bum": i.ToString()) + " " );
            }

        }
    }
}
