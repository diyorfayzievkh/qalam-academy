#!/bin/sh
# Copy the shared notification texts and prayer maths into the Supabase function.
set -e
cd "$(dirname "$0")/../.."
cp src/lib/push-messages.ts supabase/functions/push-tick/messages.ts
{ echo '// Copied from src/lib/prayer-times.ts by scripts/push/sync.sh (do not edit here).'
  echo 'export type Method = { fajr: number; isha: number | { minutesAfterMaghrib: number } };'
  sed -n '/^const d2r/,/^export function localYMD/p' src/lib/prayer-times.ts | sed '$d'
} > supabase/functions/push-tick/prayer.ts
