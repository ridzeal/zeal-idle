import { eventSystem } from './EventSystem';
import { CharacterType } from '../types';

let character: CharacterType = {
  name: 'Hero',
  level: 1,
  exp: 0,
  gold: 0,
  stats: {
    strength: 5,
    dexterity: 5,
    intelligence: 5
  }
};

export function getCharacter(): CharacterType {
  return character;
}

export function gainExp(amount: number): void {
  character.exp += amount;
  if (character.exp >= character.level * 100) {
    levelUp();
  }
  eventSystem.emit('characterUpdated', character);
}

function levelUp(): void {
  character.level++;
  character.exp = 0;
  character.stats.strength += 1;
  character.stats.dexterity += 1;
  character.stats.intelligence += 1;
  eventSystem.emit('characterLevelUp', character);
}

export function gainGold(amount: number): void {
  character.gold += amount;
  eventSystem.emit('characterUpdated', character);
}