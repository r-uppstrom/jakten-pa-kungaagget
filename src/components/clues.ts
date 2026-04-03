const clue1 = "KO";
const clue2 = "JAN";
const clue3 =
  "Den andra kartan döljer fler hemligheter än som syns vid första anblicken. För att hitta nästa ledtråd, låt kanterna mötas i mitten och tiden ger dig nästa kod.";
const clue4 =
  "Undersök leveransplatsen av familjen Uppströms brev, och sista koden må du se.";
const clue5 =
  "Ovanför Teslans boplats, undersök dolda luckor och gömda skrymslen, för att slutligen hitta skatten.";

export const finalCode = "441532511";

export const codeClues: Record<string, string> = {
  skogen: clue1,
  "52453122": clue2,
  "44213552": clue3,
  "1745": clue4,
  "0545": clue4,
  [finalCode]: clue5,
};

export function findCodeClue(code: string) {
  return codeClues[code.trim().toLowerCase()] ?? "";
}

export function isFinalCode(code: string) {
  return code.trim().toLowerCase() === finalCode;
}
