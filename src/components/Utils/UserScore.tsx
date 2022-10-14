type Props = { vote_average?: number; showText: boolean };
const UserScore = ({ vote_average, showText }: Props) => {
    if (!vote_average) return <></>;
    const roundedVote = (vote_average * 10).toFixed(0);
    const circleStyle: Record<string, unknown> = {
        '--value': roundedVote,
        '--thickness': '3px',
        '--size': '50px',
    };
    return (
        <div className="space-x-2">
            <div
                className={`radial-progress ${
                    Number(roundedVote) >= 70
                        ? 'text-hulu-green'
                        : 'text-yellow-500'
                } `}
                style={circleStyle}
            >
                <span className="text-sm">
                    {roundedVote}
                    {/* sup tag to display a small text and above https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_sup */}
                    <sup>%</sup>
                </span>
            </div>
            <span className={showText ? '' : `hidden`}>User Score</span>
        </div>
    );
};

export default UserScore;
