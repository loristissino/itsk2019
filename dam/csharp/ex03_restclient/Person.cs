using System;
using System.Runtime.Serialization;

namespace restclient
{
    [DataContract(Name="person")]
    class Person
    {
        private string _name;
        private int _age;

        public Person(string name, int age) {
            Name = name;
            Age = age;
        }

        [DataMember(Name="name")]
        public string Name {
            set {
                _name = value;
            } 
            get {
                return _name;
            }
        }
        [DataMember(Name="age")]
        public int Age {
            set {
                _age = value;
            } 
            get {
                return _age;
            }
}

        public override string ToString()
        {
            return Name + ", " + Age;
        }

    }
}