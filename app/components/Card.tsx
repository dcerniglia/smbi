import Icon from "./Icon";
import StatusBadge from "./StatusBadge";
import Voting from "./Voting";

//TODO: Card props should be of type Idea
export default function Card({
  description,
  title,
  submittedBy,
  totalVoteCount,
  userVoteCount,
  hasModel = false,
  hasPlan = false,
  isFavorite = false,
  isTaken = false,
  date,
  id,
}: {
  description: string;
  totalVoteCount: number;
  userVoteCount: number;
  hasModel?: boolean;
  hasPlan?: boolean;
  isFavorite?: boolean;
  title?: string;
  submittedBy?: string;
  isTaken?: boolean;
  date?: Date;
  id?: string;
}) {
  return (
    <div className="m-3 p-4 space-y-4 w-2/3 max-w-5xl min-w-60 mx-auto bg-black-100 opacity-90 border-2 border-gray-500">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <StatusBadge
          hasModel={hasModel}
          hasPlan={hasPlan}
          isFavorite={isFavorite}
          to={`/ideas/${id}`}
          canDelete={false}
        />
      </div>
      <p className="text-white">{description}</p>
      <div className="flex justify-between">
        {submittedBy ? (
          <p className="text-white font-light italic text-sm">{`Submitted By: ${submittedBy}`}</p>
        ) : null}
      </div>
      <div className="flex gap-6 justify-end">
        {id && <Voting id={id} totalVoteCount={totalVoteCount} userVoteCount={userVoteCount}></Voting>}
        <Icon
          icon="comment"
          size="xl"
          tooltip="comments"
          className="text-white"
        />
      </div>
    </div>
  );
}
