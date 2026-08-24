// Weekly Expense Tracker

function calculateWeeklyTotal(expenses: number[]): number {
    let total = expenses.reduce((acc, cost) => acc + cost ,0)
    return total
}

console.log(calculateWeeklyTotal([290,480,2920]));
