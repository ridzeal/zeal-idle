import { NextResponse } from 'next/server';
import { startCombat, attack } from '../../../lib/CombatSystem';

export async function POST() {
  const result = startCombat();
  return NextResponse.json(result);
}

export async function PUT() {
  const result = attack();
  return NextResponse.json(result);
}