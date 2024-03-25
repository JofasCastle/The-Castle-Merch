import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex w-full items-center border bg-white/70 text-xs font-semibold text-black backdrop-blur-md dark:border-golden dark:bg-golden-dark/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 w-full flex-grow pl-2 text-lg leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="m-auto w-20 flex-none  bg-golden py-4 text-center text-black"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden"
        />
      </div>
    </div>
  );
};

export default Label;
