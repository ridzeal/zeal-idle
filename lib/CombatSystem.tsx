import { getCharacter, gainExp, gainGold } from './CharacterSystem';
import { eventSystem } from './EventSystem';
import { EnemyType, CombatResultType } from '../types';

const enemies: EnemyType[] = [
  { name: 'Goblin', hp: 20, damage: 2, expReward: 10, goldReward: 5 },
  { name: 'Orc', hp: 40, damage: 4, expReward: 25, goldReward: 10 },
  { name: 'Dragon', hp: 100, damage: 10, expReward: 100, goldReward: 50 }
];

let currentEnemy: EnemyType | null = null;

export function startCombat(): CombatResultType {
  currentEnemy = {...enemies[Math.floor(Math.random() * enemies.length)]};
  return { message: `Combat started against ${currentEnemy.name}!` };
}

export function attack(): CombatResultType {
  if (!currentEnemy) return { message: 'No active combat.' };

  const character = getCharacter();
  const damage = character.stats.strength;
  currentEnemy.hp -= damage;

  if (currentEnemy.hp <= 0) {
    return endCombat(true);
  } else {
    gainExp(1);
    const enemyDamage = Math.max(0, currentEnemy.damage - character.stats.dexterity / 5);
    return { 
      message: `You deal ${damage} damage. ${currentEnemy.name} deals ${enemyDamage} damage.`,
      characterUpdated: true,
      character: getCharacter()
    };
  }
}

function endCombat(victory: boolean): CombatResultType {
  if (victory && currentEnemy) {
    gainExp(currentEnemy.expReward);
    gainGold(currentEnemy.goldReward);
    const result: CombatResultType = { 
      message: `Victory! You gained ${currentEnemy.expReward} exp and ${currentEnemy.goldReward} gold.`,
      characterUpdated: true,
      character: getCharacter()
    };
    currentEnemy = null;
    return result;
  } else {
    currentEnemy = null;
    return { message: 'Defeat! Better luck next time.' };
  }
}