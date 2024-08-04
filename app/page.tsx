'use client';

import { useState, useEffect } from 'react';
import Character from '../components/Character';
import CombatLog from '../components/CombatLog';
import GameUI from '../components/GameUI';
import { CharacterType } from '../types';

export default function Home() {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [combatLog, setCombatLog] = useState<string[]>([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    const res = await fetch('/api/character');
    const data = await res.json();
    setCharacter(data);
  };

  const handleStartCombat = async () => {
    const res = await fetch('/api/combat', { method: 'POST' });
    const data = await res.json();
    setCombatLog(prevLog => [...prevLog, data.message]);
  };

  const handleAttack = async () => {
    const res = await fetch('/api/combat', { method: 'PUT' });
    const data = await res.json();
    setCombatLog(prevLog => [...prevLog, data.message]);
    if (data.characterUpdated) {
      setCharacter(data.character);
    }
  };

  if (!character) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>RPG Idle Game</h1>
      <Character character={character} />
      <GameUI onStartCombat={handleStartCombat} onAttack={handleAttack} />
      <CombatLog log={combatLog} />
    </div>
  );
}