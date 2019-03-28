var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

function setGradient() {
     body.style.background= "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


/*

function countChange(money, coins) {
    var dp = Array(money + 1).fill(0)
    dp[0] = 1

    for (var i = 0; i < coins.length; i++) {
        for (var j = coins[i]; j <= money; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[money]
}

`${comment.getMessage()} by ${authorName} (replied to ${this.getString(comment.getRepliedTo())})`;

comment.getMessage() + ' by ' + authorName + '(replied to ' + this.getString(comment.getRepliedTo()) + ')'

`${this.message} by ${authorName}`

this.message + ' by ' + authorName;*/

/*let i = 2;
for (let i = 2; i <= 10; i++) {
    if(i % 2 === 0) {
        alert(i);
    }
}*/

/*for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}


let i = 0;
while(i < 3) {
    alert(`number ${i}`);
    i++
}*/

/*let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);*/

/*let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}*/

let threshold = prompt('Enter max number: ')


for(let i = 2; i <= threshold; i++) {
  let isPrime = true


   for(let j = 2; j < i; j++) {
    if(i % j == 0) {
          isPrime = false
          break
      }
  }


  isPrime && alert(i)
}