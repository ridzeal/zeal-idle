export interface CharacterType {
  name: string;
  level: number;
  exp: number;
  gold: number;
  stats: {
    strength: number;
    dexterity: number;
    intelligence: number;
  };
}

export interface EnemyType {
  name: string;
  hp: number;
  damage: number;
  expReward: number;
  goldReward: number;
}

export interface CombatResultType {
  message: string;
  characterUpdated?: boolean;
  character?: CharacterType;
}