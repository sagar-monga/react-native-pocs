export class Utils {
  public static getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(str => str[0])
      .join('')
      .toUpperCase();
  };
}
