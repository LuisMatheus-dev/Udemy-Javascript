'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:31:17.383Z',
    '2020-01-28T09:31:17.904Z',
    '2020-04-01T10:31:17.185Z',
    '2020-05-08T14:31:17.604Z',
    '2020-05-27T17:31:17.194Z',
    '2021-03-19T15:36:17.929Z',
    '2021-03-20T10:31:17.990Z',
  ],
  currency: 'EUR',
  locale: 'en-US',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

   movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:31:17.383Z',
    '2020-01-28T09:31:17.904Z',
    '2020-04-01T10:31:17.185Z',
    '2020-05-08T14:31:17.604Z',
    '2020-05-27T17:31:17.194Z',
    '2020-07-11T23:31:17.929Z',
    '2020-07-12T10:31:17.990Z',
  ],

  currency: 'EUR',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

   movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:31:17.383Z',
    '2020-01-28T09:31:17.904Z',
    '2020-04-01T10:31:17.185Z',
    '2020-05-08T14:31:17.604Z',
    '2020-05-27T17:31:17.194Z',
    '2020-07-11T23:31:17.929Z',
    '2020-07-12T10:31:17.990Z',
  ],
  currency: 'EUR',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:31:17.383Z',
    '2020-01-28T09:31:17.904Z',
    '2020-04-01T10:31:17.185Z',
    '2020-05-08T14:31:17.604Z',
  ],
  currency: 'EUR',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
   
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    return 'Today';
  
  } else if (daysPassed === 1) {
    return 'Yesterday';
  
  } else if(daysPassed <= 7) {
    return `${daysPassed} days ago`;

  } else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function(value, locale, currency) {  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value)
};


const displayMovements = function (acc, sort=false) {
  containerMovements.innerHTML = ''

  const movs = sort ? acc.movements.slice().sort((mov, nextMov) => mov - nextMov) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date,acc.locale)

    const formattedMov = formatCur(mov,acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div> 
    
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((ac, mov) => ac + mov,0);

  labelBalance.textContent = formatCur(acc.balance,acc.locale, acc.currency);
};


const calcDisplaySummary = function(acc) {


  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acm, mov) => acm + mov,0);

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acm, mov) => acm + mov,0);

  const interest = acc.movements
    .filter(mov => mov > 1)
    .map(deposit => (deposit * acc.interestRate) / 100 ) 
    .filter(int => int >= 1)
    .reduce((acm, deposit) => deposit + acm);
  
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);

}

const createUserNames = function(accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map( name => name[0])
      .join("");
  });
};

createUserNames(accounts);

let currentAccount, timer;

const updateUI = function(acc) {
  //Display Movements
  displayMovements(acc);
      
  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
}


const startLogOutTimer = function() {

  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    } 
    time--;
  }

  let time = 120;
  tick();
  const timer = setInterval(tick, 1000);
  
  return timer;
}

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  currentAccount = accounts.find(user => inputLoginUsername.value === user.userName);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message 
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`
    

    updateUI(currentAccount);

    //Clear inputs fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //Remove focus
    inputLoginPin.blur();

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    };

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now);
    
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();


  } else if (currentAccount) {
    alert("❌ User or pin incorret ");
  } else {
    alert("🔎 User not found")
  }

});


btnTransfer.addEventListener('click',function(e) {
  e.preventDefault();

  const account = accounts.find(acc => acc.userName === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);
  const balance = currentAccount.balance;

  inputTransferAmount.value = inputTransferTo.value = '';
  
  if(!account) {
    alert("🔎 Account not found");

  } else if (account?.userName === currentAccount.userName) {
    alert(" You don't transfer to yourself");

  } else if (amount <= 0) {
    alert(" The value must be greater than 0");

  } else if (amount > balance) {
    alert("💸 The amount to be tranferred is greater than money in account");

  } else {
    currentAccount.movements.push(-amount);
    account.movements.push(amount);

    //Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    account.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
    
  }

});


btnClose.addEventListener('click',function(e) {
  e.preventDefault();
  
  const index = accounts.findIndex(acc => acc.userName === inputCloseUsername.value);
  const account = accounts.find(acc => acc.userName === inputCloseUsername.value);
  const pin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';

  if (index === -1) {
    alert('🔎 Account not fond');
  } else if (account.userName !== currentAccount.userName){
    alert('🔴 You can just delete your own account');
  } else if (pin !== currentAccount.pin) {
    alert('🔐 Invalid PIN');
  } else {
    accounts.splice(index,1);
    alert('✔️ Account deleted Sucessfully');

    containerApp.style.opacity = 0;
  }

  //Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();

});

btnLoan.addEventListener('click',function(e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  const requirement = mov => mov >= amount * 0.1
  const haveRequirement = currentAccount.movements.some(requirement);

  if(!amount) {
    alert("Value must be greater than 0");
  } else if (amount > 0 && !haveRequirement) {
    alert(`You don't have a minimun requiriment`);
  } else {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    inputLoanAmount.value = '';
  };
});

let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted
})
