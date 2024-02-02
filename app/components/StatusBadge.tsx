import { Link } from "@remix-run/react";
import Icon from "./Icon";

export default function StatusBadge({
  hasModel,
  hasPlan,
  isFavorite,
  canDelete,
  to,
}: {
  hasModel: boolean;
  hasPlan: boolean;
  isFavorite: boolean;
  canDelete: boolean;
  to?: string;
}) {
  return (
    <div className="flex w-1/4 justify-end">
      {hasPlan ? (
        <Icon
          icon="chart-line"
          size="lg"
          className="text-purple-800 ps-2"
          tooltip="has business plan"
        />
      ) : null}
      {hasModel ? (
        <Icon
          icon="file-lines"
          size="lg"
          className="text-green-600 ps-2"
          tooltip="has financial model"
        />
      ) : null}
      {isFavorite ? (
        <Icon
          icon="star"
          size="lg"
          className="text-yellow-400 ps-2"
          tooltip="favorite"
        />
      ) : null}

      {to && (
        <Link to={to}>
          <Icon
            icon="arrow-right"
            size="lg"
            className="text-blue-950   ps-2"
            tooltip="favorite"
          />
        </Link>
      )}
      {canDelete && (
        <div className="ms-3">
          <button type="submit">
            <Icon
              icon="trash-can"
              size="lg"
              className="text-red-600 ps-2"
              tooltip="delete"
            />
          </button>
        </div>
      )}
    </div>
  );
}
