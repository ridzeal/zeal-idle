import { CharacterType } from '../types';

interface CharacterProps {
  character: CharacterType;
}

export default function Character({ character }: CharacterProps) {
  return (
    <div className="character-info">
      <h2>{character.name}</h2>
      <p>Level: {character.level} | Exp: {character.exp} | Gold: {character.gold}</p>
      <p>Strength: {character.stats.strength} | Dexterity: {character.stats.dexterity} | Intelligence: {character.stats.intelligence}</p>
    </div>
  );
}