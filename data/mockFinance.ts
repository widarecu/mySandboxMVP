export interface Item {
  id: string;
  name: string;
  value: number;
}

export const assets: Item[] = [
  { id: "bank1", name: "Checking Account", value: 8500 },
  { id: "bank2", name: "Savings Account", value: 15000 },
  { id: "invest1", name: "Brokerage Account", value: 32000 }
];

export const liabilities: Item[] = [
  { id: "loan1", name: "Car Loan", value: 12000 },
  { id: "mort1", name: "Mortgage", value: 180000 }
];