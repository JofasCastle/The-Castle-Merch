import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div>
      <LogoIcon
        className={clsx({
          'h-[50px] w-[50px]': !size,
          'h-[35px] w-[35px]': size === 'sm'
        })}
      />
    </div>
  );
}
