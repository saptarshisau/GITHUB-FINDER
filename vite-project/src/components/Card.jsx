export const Card = ({ card, onClick }) => {
  return (
    <div
      onClick={() => onClick(card)}
      className={`relative aspect-square cursor-pointer rounded-xl shadow-lg flex items-center justify-center text-4xl select-none
      transition-transform duration-300
      ${card.isMatched ? "bg-green-500/20 border border-green-400" : "bg-slate-900 border border-white/10"}
      ${card.isFlipped ? "bg-slate-800" : ""}
      `}
    >
      {card.isFlipped || card.isMatched ? card.value : "?"}
    </div>
  );
};