import Link from 'next/link';

type Props = {
  title: string;
  //Because of hero icons type, we have to declare the props type like this
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  url?: string;
};

const HeaderItem = ({ title, Icon, url }: Props) => {
  return url ? (
    <Link href={url}>
      <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
        <Icon className="mb-1 h-8 group-hover:animate-bounce" />
        <p className="tracking-widest opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};
export default HeaderItem;
