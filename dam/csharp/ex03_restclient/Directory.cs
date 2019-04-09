using System;
using System.Collections.Generic;

namespace restclient
{
    class Directory
    {
        private List<Person> _persons;

        public Directory() {
            _persons = new List<Person>();
        }

        public Directory Add(Person p){
            if (p.Age>=18) {
                _persons.Add(p);
            }
            return this;
        }

        public void Show(){
            foreach (Person p in _persons){
                Console.WriteLine("* " + p);
            }

        }
    }
}
