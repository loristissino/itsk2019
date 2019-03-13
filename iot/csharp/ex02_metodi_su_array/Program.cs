using System;

/*
Esercizio: implementare dei metodi che, a partire da un
array di intero passato come parametro, abbiano il seguente
scopo:

- restituire il valore di verità «l’array è ordinato»
- restituire la posizione del primo valore pari
- restituire il primo valore pari
- restituire la posizione dell’ultimo valore pari
- restituire il numero di numeri pari presenti

 */

namespace ex02
{
    class Program
    {
        static bool IsOrdered(int [] n)
        {
            for (int i=0; i<n.Length -1; i++){
                if (n[i+1]<n[i]){
                    return false;
                }
            }
            return true;
        }
        static void Main(string[] args)
        {
            /* In questo modo si può testare velocemente il corretto
               comportamento dei metodi implementati.
               Un assaggio di test-driven development
            */  
            Console.WriteLine(IsOrdered(new int[] { 2, 3, 4}) == true);
            Console.WriteLine(IsOrdered(new int[] { 5, 3, 4}) == false);
            Console.WriteLine(IsOrdered(new int[] { }) == true);
            Console.WriteLine(IsOrdered(new int[] { 9 }) == true);
            Console.WriteLine(IsOrdered(new int[] { 2, 3, 4, 3}) == false);
            Console.WriteLine(PositionOfFirstEvenValue(new int[] { 3, 7, 4, 5}) == 2);
            Console.WriteLine(PositionOfFirstEvenValue(new int[] { 3, 7, 9, 5}) == -1);
            Console.WriteLine(PositionOfFirstEvenValue(new int[] { }) == -1);
            Console.WriteLine(FirstEvenValue(new int[] { 3, 10, 11 })==10);
            Console.WriteLine(FirstEvenValue(new int[] { 3, 7, 11 })==null);
        }

        static int? FirstEvenValue(int [] n)
        {
            /* da notare:
               - il valore restituito è di tipo int?,
                 che permette di attribuire il valore null
               - viene richiamato l'altro metodo per ottenere
                 la posizione
               - lo scopo è di distinguere i casi di valore
                 non trovato (in questo caso viene restituito null)
                 e di valore trovato (in questo caso viene restituito
                 il valore)
             */
            int p = PositionOfFirstEvenValue(n);
            if (p==-1)
            {
                return null;
            }
            else
            {
                return n[p];
            }
        }

        static int PositionOfFirstEvenValue(int [] n)
        {
            for (int i=0; i<n.Length; i++){
                if (n[i]%2==0){
                    return i;
                }
            }
            return -1;
        }

    }
}
