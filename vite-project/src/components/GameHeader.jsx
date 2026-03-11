export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <div className="flex flex-col items-center gap-6 bg-slate-900/90 p-8 rounded-2xl shadow-xl border border-white/10 w-full max-w-xl">

      <h1 className="text-3xl font-bold text-white">
        🎮 Memory Card Game
      </h1>

      <div className="flex gap-10">

        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-wider text-zinc-400">
            Score
          </span>
          <span className="text-2xl font-bold text-indigo-400">
            {score}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-wider text-zinc-400">
            Moves
          </span>
          <span className="text-2xl font-bold text-indigo-400">
            {moves}
          </span>
        </div>

      </div>

      <button
        onClick={onReset}
        className="bg-linear-to-r from-indigo-500 to-purple-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
      >
        New Game
      </button>

    </div>
  );
};