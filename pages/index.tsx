// pages/index.tsx
import Head from 'next/head';

export default function Home() {
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
  const netWorth = totalAssets - totalLiabilities;

  return (
    <>
      <Head>
        <title>Net Worth Dashboard</title>
      </Head>
      <main className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow p-4 sticky top-0 z-10">
          <h1 className="text-2xl font-semibold text-gray-800">Net Worth Dashboard</h1>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
          {/* Net Worth Card */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Total Net Worth</h2>
            <p className="text-3xl font-bold text-green-600">${netWorth.toLocaleString()}</p>
          </section>

          {/* Assets and Liabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Assets */}
            <section className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Assets</h2>
              <ul className="space-y-2">
                {assets.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-600">
                    <span>{item.label}</span>
                    <span>${item.value.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t mt-4 pt-4 text-right text-gray-800 font-semibold">
                Total: ${totalAssets.toLocaleString()}
              </div>
            </section>

            {/* Liabilities */}
            <section className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Liabilities</h2>
              <ul className="space-y-2">
                {liabilities.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-600">
                    <span>{item.label}</span>
                    <span>${item.value.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t mt-4 pt-4 text-right text-gray-800 font-semibold">
                Total: ${totalLiabilities.toLocaleString()}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}