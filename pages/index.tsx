// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  const netWorth = 325000;
  const assets = [
    { label: 'Bank Account', value: 15000 },
    { label: 'Investments', value: 200000 },
    { label: 'Superannuation', value: 100000 },
    { label: 'Property Equity', value: 150000 },
  ];
  const liabilities = [
    { label: 'Mortgage', value: 120000 },
    { label: 'Credit Card', value: 5000 },
  ];

  const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.value, 0);

  return (
    <>
      <Head>
        <title>Net Worth Dashboard</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-4">Net Worth Summary</h1>

        <div className="bg-white shadow rounded p-6 mb-8">
          <p className="text-xl">Net Worth: <strong>${totalAssets - totalLiabilities}</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Assets</h2>
            <ul className="bg-white rounded shadow p-4">
              {assets.map((asset, i) => (
                <li key={i} className="flex justify-between py-1 border-b last:border-b-0">
                  <span>{asset.label}</span>
                  <span>${asset.value.toLocaleString()}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold pt-2">
                <span>Total</span>
                <span>${totalAssets.toLocaleString()}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Liabilities</h2>
            <ul className="bg-white rounded shadow p-4">
              {liabilities.map((liab, i) => (
                <li key={i} className="flex justify-between py-1 border-b last:border-b-0">
                  <span>{liab.label}</span>
                  <span>${liab.value.toLocaleString()}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold pt-2">
                <span>Total</span>
                <span>${totalLiabilities.toLocaleString()}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}