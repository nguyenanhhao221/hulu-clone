type Props = { vote_average?: number };
const UserScore = ({ vote_average }: Props) => {
  if (!vote_average) return <span>User score is not available</span>;
  const roundedVote = (vote_average * 10).toFixed(0);
  const circleStyle: {} = {
    '--value': roundedVote,
    '--thickness': '3px',
    '--size': '50px',
  };
  return (
    <div className="space-x-2">
      <div
        className={`radial-progress ${
          Number(roundedVote) >= 70 ? 'text-hulu-green' : 'text-yellow-500'
        } `}
        style={circleStyle}
      >
        <span className="text-sm">
          {roundedVote}
          {/* sup tag to display a small text and above https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_sup */}
          <sup>%</sup>
        </span>
      </div>
      <span>User Score</span>
    </div>
  );
};

export default UserScore;
