export default function Card({
  description,
  title,
  submittedBy,
  date,
}: {
  description: string;
  title?: string;
  submittedBy?: string;
  date?: Date;
}) {
  return (
    <div className="m-3 p-6 space-y-4 w-2/3 max-w-5xl min-w-60 mx-auto bg-blue-400 opacity-90 border-2 border-black">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
      </div>
      <p className="text-black">{description}</p>
      {submittedBy ? (
        <p className="text-black">{`submitted by: ${submittedBy}`}</p>

      ) : null}
    </div>
  );
}
