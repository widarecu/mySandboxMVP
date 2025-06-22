import NetWorthCard from "../components/NetWorthCard";
import { assets, liabilities } from "../data/mockFinance";

export default function Dashboard() {
  const totalAssets = assets.reduce((sum, i) => sum + i.value, 0);
  const totalLiabilities = liabilities.reduce((sum, i) => sum + i.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <main className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold">Net Worth Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NetWorthCard title="Assets" items={assets} />
        <NetWorthCard title="Liabilities" items={liabilities} />
      </div>
      <div className="mt-6 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-semibold">Net Worth</h2>
        <p className="text-3xl font-bold">${netWorth.toLocaleString()}</p>
      </div>
    </main>
  );
}