using System;

using System.Threading;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Collections.Generic;
using System.Runtime.Serialization.Json;
using System.IO;

namespace restclient
{
    class Program
    {
        private static async Task<List<Person>> ProcessPersons()
        {
            var serializer = new DataContractJsonSerializer(typeof(List<Person>));

            var streamTask = client.GetStreamAsync("http://www.tissino.it/itskennedy/?sleep=3&v=people");
            var persons = serializer.ReadObject(await streamTask) as List<Person>;

            return persons;
        }

        private static readonly HttpClient client = new HttpClient();
        static void Main(string[] args)
        {
            Person p = new Person("Giorgio", 32);
            Console.WriteLine(p);

            Console.WriteLine("------");

            Directory d = new Directory();

            Console.Write("Interrogo il servizio web... ");

            var persons = ProcessPersons().Result;
            
            ProcessPersons().Wait();
            Console.WriteLine("Dati ricevuti!");

            foreach (var person in persons)
            {
                d.Add(new Person(person.Name, person.Age));
            }
            /*
            d
            .Add(p)
            .Add(new Person("Michelle", 25))
            .Add(new Person("A", 16))
            .Add(new Person("B", 24))
            .Add(new Person("C", 26))
            ;
            */

            d.Show();
        }
    }
}
