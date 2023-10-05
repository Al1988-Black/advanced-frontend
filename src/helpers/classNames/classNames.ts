type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mod: Mods, addition: string[]): string {
  return [
    cls,
    ...addition,
    ...Object.entries(mod)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
