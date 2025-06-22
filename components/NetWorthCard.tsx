import { Item } from "../data/mockFinance";

interface Props {
  title: string;
  items: Item[];
}

export default function NetWorthCard({ title, items }: Props) {
  const total = items.reduce((sum, i) => sum + i.value, 0);
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-2">
        {items.map(i => (
          <li key={i.id} className="flex justify-between">
            <span>{i.name}</span>
            <span>${i.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold border-t pt-2">
        Total: ${total.toLocaleString()}
      </div>
    </div>
  );
}