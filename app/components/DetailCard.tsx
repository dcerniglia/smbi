import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

export default function Card({
  title,
  description,
  submittedBy,
  hasModel = false,
  hasPlan = false,
  isFavorite = false,
  isTaken = false,
  date,
  id,
}: {
  title: string;
  description: string;
  hasModel?: boolean;
  hasPlan?: boolean;
  isFavorite?: boolean;
  submittedBy?: string;
  isTaken?: boolean;
  date?: Date;
  id?: string;
}) {
  return (
    <div className="m-3 p-4 space-y-4 w-2/3 max-w-5xl min-w-60 mx-auto bg-black-100 opacity-90 border-2 border-white">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <StatusBadge
          hasModel={hasModel}
          hasPlan={hasPlan}
          isFavorite={isFavorite}
          canDelete={true}
        />
      </div>
      <p className="text-white">{description}</p>
      <div className="flex justify-between">
        {submittedBy ? (
          <p className="text-white font-light italic text-sm">{`Submitted By: ${submittedBy}`}</p>
        ) : null}
        <Icon icon="comment" size="xl" tooltip="comments" />
      </div>
    </div>
  );
}
