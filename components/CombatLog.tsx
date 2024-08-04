interface CombatLogProps {
  log: string[];
}

export default function CombatLog({ log }: CombatLogProps) {
  return (
    <div className="combat-log">
      <h3>Combat Log</h3>
      {log.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
    </div>
  );
}