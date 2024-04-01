export function biggest(a:number, b:number):number | null{
  if (a>b) return a;
  else if (a<b) return b;
  else return null;
}

export function smallest(a:number, b:number):number | null{
  if (a>b) return b;
  else if (a<b) return a;
  else return null;
}

export function areEqual(a:number, b:number):boolean {
  return a===b
}