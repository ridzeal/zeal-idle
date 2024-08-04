import { NextResponse } from 'next/server';
import { getCharacter } from '../../../lib/CharacterSystem';

export async function GET() {
  const character = getCharacter();
  return NextResponse.json(character);
}