import { FileText, ArrowUpRight, ArrowDownRight, Search } from 'lucide-react';

const mockTransactions = [
  {
    id: 'TXN-98231',
    date: 'Oct 12, 2026',
    amount: '$1,250.00',
    status: 'Completed',
    type: 'Debit',
    description: 'The Ritz-Carlton, Bali',
    paymentMethod: 'Visa •••• 4242'
  },
  {
    id: 'TXN-87123',
    date: 'Sep 10, 2025',
    amount: '$3,200.00',
    status: 'Refunded',
    type: 'Credit',
    description: 'Refund: Four Seasons Paris',
    paymentMethod: 'Mastercard •••• 8812'
  },
  {
    id: 'TXN-76543',
    date: 'Jan 05, 2026',
    amount: '$4,800.00',
    status: 'Completed',
    type: 'Debit',
    description: 'Waldorf Astoria Maldives',
    paymentMethod: 'Visa •••• 4242'
  }
];

export default function PaymentMethods() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-bold mb-2">Payment History</h2>
          <p className="text-gray-500">View your past transactions, refunds, and receipts.</p>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-coral/20 focus:border-brand-coral text-sm w-full md:w-64"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${txn.type === 'Credit' ? 'bg-green-50 text-green-600' : 'bg-brand-coral/10 text-brand-coral'}`}>
                        {txn.type === 'Credit' ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                      </div>
                      <div>
                        <p className="font-bold text-brand-navy text-sm">{txn.description}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{txn.paymentMethod}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className={`font-bold ${txn.type === 'Credit' ? 'text-green-600' : 'text-brand-navy'}`}>
                      {txn.type === 'Credit' ? '+' : ''}{txn.amount}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      txn.status === 'Completed' ? 'bg-green-50 text-green-600' : 
                      txn.status === 'Refunded' ? 'bg-blue-50 text-blue-600' : 
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{txn.date}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-brand-coral transition-colors rounded-lg hover:bg-brand-coral/5 inline-flex">
                      <FileText size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
