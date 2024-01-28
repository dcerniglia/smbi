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
    <div className="rounded-xl m-3 p-6 space-y-4 max-w-lg mx-auto bg-gray-500 opacity-90">
      <div className="flex justify-between items-center">
        <i className="fas fa-cog fa-lg text-gray-400"></i>
      </div>
      <p className="text-white">{description}</p>
      {submittedBy && (
        <p className="text-white">{`submitted by: ${submittedBy}`}</p>
      )}
    </div>
  );
}
