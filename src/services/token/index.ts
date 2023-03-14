import Storage from './../storage';
export default class Token {
  public static get(): string {
    const token = this.storage.getValue(this.TOKE_KEY);
    return typeof token === 'string' ? token : '';
  }

  public static set(token: string): void {
    this.storage.setValue(this.TOKE_KEY, token);
  }
  public static remove(): void {
    this.storage.clear();
  }

  public static exists(): boolean {
    return this.get().trim().length !== 0;
  }
  private static storage = Storage;
  private static TOKE_KEY: string = 'token';
}
