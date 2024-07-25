import React from 'react';

const TransactionItem = ({ date, description, amount }) => (
  <>
    <div className="flex gap-5 self-center mt-3.5 max-w-full text-xl text-black w-[533px] max-md:flex-wrap">
      <div className="flex-auto">{description}</div>
      <div className="flex-auto font-bold">{amount}</div>
    </div>
    <div className="shrink-0 self-end mt-3.5 max-w-full h-px border border-solid bg-neutral-500 border-neutral-500 w-[570px]" />
  </>
);

const TransactionList = () => {
  const transactions = [
    { date: 'Today', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 20,000.00' },
    { date: 'Today', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 15,000.00' },
    { date: 'Today', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 7,000.00' },
    { date: '12 July', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 28,500.00' },
    { date: '12 July', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 78,100.00' },
    { date: '12 July', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 20,000.00' },
    { date: '14 June', description: 'Jaipur, Solar Energy Initiative', amount: 'Rs 28,500.00' },
  ];

  return (
    <section className="flex flex-col pt-8 pr-20 pb-12 pl-9  bg-white rounded-2xl shadow-[0px_119px_33px_rgba(31,107,178,0)] max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-extrabold text-black">Recent Transactions</h2>
      {transactions.map((transaction, index) => (
        <React.Fragment key={index}>
          {index === 0 || transactions[index - 1].date !== transaction.date ? (
            <div className="text-2xl font-medium text-neutral-500 mt-14 max-md:mt-10">
              {transaction.date}
            </div>
          ) : null}
          <TransactionItem {...transaction} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default TransactionList;