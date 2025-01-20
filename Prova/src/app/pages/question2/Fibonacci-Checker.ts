class Fibonacci {
  private sequence: number[];

  constructor() {
    this.sequence = [0, 1];
  }

  // Method to generate Fibonacci sequence up to a given number
  private generateSequenceUpTo(num: number): void {
    let nextValue = this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2];
    while (nextValue <= num) {
      this.sequence.push(nextValue);
      nextValue = this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2];
    }
  }

  // Method to check if a number belongs to the Fibonacci sequence
  public isFibonacciNumber(num: number): boolean {
    if (num < 0) return false; // Negative numbers are not in the Fibonacci sequence

    this.generateSequenceUpTo(num);
    return this.sequence.includes(num);
  }

  // Method to get the full sequence up to a given number
  public getSequenceUpTo(num: number): number[] {
    this.generateSequenceUpTo(num);
    return this.sequence;
  }
}

// Example usage
const numberToCheck = 21; // Replace with the number to check
const fibonacci = new Fibonacci();

if (fibonacci.isFibonacciNumber(numberToCheck)) {
  console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}

console.log("Sequência gerada até", numberToCheck, ":", fibonacci.getSequenceUpTo(numberToCheck));
