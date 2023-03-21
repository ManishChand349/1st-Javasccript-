const customer = {
  name: "Manish Chand",
  balance: 1000,
};

function deposit(amount) {
  customer.balance += amount;
  console.log(
    `Deposited ${amount} into ${customer.name}'s account. New balance is ${customer.balance}.`
  );
}

function withdraw(amount) {
  customer.balance -= amount;
  console.log(
    `Withdrew ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`
  );
}

deposit(500);
withdraw(400);
