export function calculateTotalSpend(expenses) {
  if (!expenses || expenses.length === 0) {
    return;
  }
  const _expenses = [...expenses];
  const priceArr = _expenses.map((item) => {
    return item.amount.toValue;
  });
  if (priceArr.length !== 0) {
    let totalSpend = priceArr.reduce((acc, value) => {
      return acc + value;
    });

    if (isNaN(totalSpend)) {
      console.log("Something went wrong with calculating total.");
      return "<p>Something went wrong with the calculations.</p>";
    }

    totalSpend = Number(totalSpend / 100).toFixed(2);

    return totalSpend;
  }
}

export function addDecimals(number) {
  return Number(number / 100).toFixed(2);
}

export function getIndex(data, id, key) {
  const indexOf = data.findIndex((item) => {
    return item[key] === id;
  });

  if (indexOf === -1) {
    console.log("something went wrong getting the index");
    return;
  }

  return indexOf;
}

export function getCurrencySymbol(currencyCodes, currencyCode) {
  if (!currencyCodes || !currencyCode) {
    console.log("something went wrong with getting the currency symbol");
  }
  return currencyCodes[currencyCode].symbol;
}

export function getArrayOfDates(data) {
  let copy = [...data];
  //makes an array of the dates
  copy = copy.map((item) => {
    return item.startDate;
  });

  // removes duplicates
  copy = [...new Set(copy)];
  // get dates in right order
  copy.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  });

  // turns unixCode to timestamp
  copy = copy.map((item) => {
    return unixToDate(item);
  });

  //add All Dates as first element
  copy.unshift("All Dates");

  return copy;
}

export function findItem(data, id) {
  const item = data.find((item) => {
    return item.id === id;
  });

  if (!item) {
    console.log("something went wrong getting the item");
    return;
  }

  return item;
}

export function unixToDate(unix) {
  if (!unix) {
    console.log("unix is undefined");
    return;
  }
  const date = new Date(unix); //converts unix back to object
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  return formattedDate;
}

export function getBudget(data, value) {
  let budget;

  switch (value) {
    case "Show All":
      budget = data.budgetTotal;
      break;
    case "Hotel":
    case "Food":
    case "Activities":
    case "Transport":
    case "Other":
      let string = "budget" + value;
      budget = data[string];
      break;
    default:
      console.log("something went wrong with getting the budget");
      break;
  }

  return addDecimals(budget);
}

export function getSpendPerDay(budgetPerDay, data, filter) {
  //take out empty days (a.k.a. empty arrays)
  let filteredData = data.filter((subArray) => subArray.length > 0);

  let arr = filteredData.map((Arr) =>
    Arr.map((item) => ({
      amount: item.amount.toValue,
      startDate: item.startDate,
    }))
  );

  // Create array with totalspend, budgetperday, difference and differences from days before
  let cumulativeDifference = 0;
  let arrValues = [];

  arr.forEach((values) => {
    if (values.length === 0) {
      return;
    }
    const totalSpendPerDay = values.reduce(
      (acc, value) => acc + value.amount,
      0
    );
    const difference = budgetPerDay - totalSpendPerDay;
    const cumulativeDifferenceForDay = cumulativeDifference;
    cumulativeDifference += difference;
    const startDate = values[0].startDate; // Assuming all items in the same day have the same startDate

    arrValues.push({
      totalSpendPerDay,
      budgetPerDay,
      difference,
      cumulativeDifference: cumulativeDifferenceForDay,
      startDate: startDate,
    });
  });

  return arrValues;
}

export function getSpendSelectedDay(data, filterDate) {
  let date;
  //filterDate
  if (filterDate === "All Dates") {
    const now = unixToDate(new Date());
    const index = data.findIndex((item) => {
      return unixToDate(item.startDate) === now;
    });
    if (index !== -1) {
      date = data[index];
    } else {
      date = {
        budgetPerDay: data[0].budgetPerDay,
        cumulativeDifference: 0,
        totalSpendPerDay: 0,
        difference: data[0].budgetPerDay,
      };
    }
  } else {
    const index = data.findIndex((item) => {
      return unixToDate(item.startDate) === filterDate;
    });
    if (index !== -1) {
      date = data[index];
    } else {
      date = {
        budgetPerDay: data[0].budgetPerDay,
        cumulativeDifference: 0,
        totalSpendPerDay: 0,
        difference: data[0].budgetPerDay,
      };
    }
  }

  return date;
}
