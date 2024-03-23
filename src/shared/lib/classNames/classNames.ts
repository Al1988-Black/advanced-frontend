export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mod: Mods = {},
    addition: Array<string | undefined> = []
): string {
    return [
        cls,
        ...addition.filter(Boolean),
        ...Object.entries(mod)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
