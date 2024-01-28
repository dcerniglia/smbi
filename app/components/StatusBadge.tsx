import Icon from "./Icon";

export default function StatusBadge({
  hasModel,
  hasPlan,
  isFavorite,
}: {
  hasModel: boolean;
  hasPlan: boolean;
  isFavorite: boolean;
}) {
  return (
    <div className="flex w-1/4 justify-end">
      {hasPlan ? (
        <Icon icon="chart-line" size="lg" className="text-red-600 ps-2" tooltip="has business plan" />
      ) : null}
      {hasModel ? (
        <Icon icon="file-lines" size="lg" className="text-green-600 ps-2" tooltip="favorite" />
      ) : null}
      {isFavorite ? (
        <Icon icon="star" size="lg" className="text-yellow-400 ps-2" tooltip='has financial models' />
      ) : null}
    </div>
  );
}
