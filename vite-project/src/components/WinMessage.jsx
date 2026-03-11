export const WinMessage = ({ moves }) => {
  return (
    <div className="bg-slate-900/95 px-10 py-8 rounded-xl text-center shadow-xl border border-white/10 animate-bounce">

      <h2 className="text-3xl font-bold mb-2">
        🎉 Congratulations!
      </h2>

      <p className="text-zinc-400 text-lg">
        You completed the game in {moves} moves!
      </p>

    </div>
  );
};