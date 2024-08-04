interface GameUIProps {
  onStartCombat: () => void;
  onAttack: () => void;
}

export default function GameUI({ onStartCombat, onAttack }: GameUIProps) {
  return (
    <div className="game-ui">
      <button onClick={onStartCombat}>Start Combat</button>
      <button onClick={onAttack}>Attack</button>
    </div>
  );
}