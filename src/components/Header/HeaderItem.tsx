import Link from 'next/link';

type Props = {
    title: string;
    //Because of hero icons type, we have to declare the props type like this
    Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
    url?: string;
    setSearchFormOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    searchFormOpen?: boolean;
};

const HeaderItem = ({
    title,
    Icon,
    url,
    setSearchFormOpen,
    searchFormOpen,
}: Props) => {
    return url ? (
        <Link href={url}>
            <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
                <Icon className="mb-1 h-8 group-hover:animate-bounce" />
                <p className="invisible tracking-widest group-hover:visible">
                    {title}
                </p>
            </div>
        </Link>
    ) : (
        <button
            type="button"
            className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20"
            onClick={() =>
                typeof setSearchFormOpen !== 'undefined' &&
                setSearchFormOpen(!searchFormOpen)
            }
        >
            <Icon className="mb-1 h-8 group-hover:animate-bounce" />
            <p className="invisible tracking-widest group-hover:visible">
                {title}
            </p>
        </button>
    );
};
export default HeaderItem;
