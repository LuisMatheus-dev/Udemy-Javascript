/*
! DESAFIO 14 - Seção 10

*/

// ------ Ignorar ------
console.log('%c Desafio %c 14 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const poll = {
  question: "What is your favourite programming language ?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.question}\n ${this.options.join("\n").replaceAll(":",") ▶️")}
    `));

    answer >= 0 && answer <= this.answers.length ? this.answers[answer]++ : alert(`Invalid Answer`); 
    this.displayResults();
  },

  displayResults(type="string") {
  
    if( type === "array" ) {
      console.log(this.answers);

    } else if (type === "string") {
      const results = this.answers.join(" ");
      console.log(`The poll results are: ${results}`);

    } else {
      alert("Wrong option");
    }

  }
};

const data1 = {answers: [5, 2, 3]};
const data2 = {answers: [1, 5, 3, 9, 6, 1]};

const testAnswersData1 = poll.displayResults.call(data1,"array")
const testAnswersData2 = poll.displayResults.call(data2)

document.querySelector('#answer').addEventListener('click', poll.registerNewAnswer.bind(poll));