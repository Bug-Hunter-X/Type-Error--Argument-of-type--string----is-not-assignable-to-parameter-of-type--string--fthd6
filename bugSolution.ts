function greeter(person: string[]): string {
  let greetings:string = "";
  person.forEach(element => {
    greetings += "Hello, "+ element + "!\n";
  });
  return greetings;
}

let user = ["Tom", "Jerry"];
console.log(greeter(user)); //Success