import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

export default function Card({
  description,
  title,
  submittedBy,
  hasModel = false,
  hasPlan = false,
  isFavorite = false,
  isTaken = false,
  date,
}: {
  description: string;
  hasModel?: boolean;
  hasPlan?: boolean;
  isFavorite?: boolean;
  title?: string;
  submittedBy?: string;
  isTaken ?: boolean;
  date?: Date;
}) {
  return (
    <div className="m-3 p-4 space-y-4 w-2/3 max-w-5xl min-w-60 mx-auto bg-blue-100 opacity-90 border-2 border-black">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <StatusBadge
          hasModel={hasModel}
          hasPlan={hasPlan}
          isFavorite={isFavorite}
        />
      </div>
      <p className="text-black">{description}</p>
      <div className="flex justify-between">
        {submittedBy ? (
          <p className="text-black font-light italic text-sm">{`Submitted By: ${submittedBy}`}</p>
        ) : null}
      <Icon icon='comment' size="xl" tooltip="comments" />
      </div>
    </div>
  );
}
