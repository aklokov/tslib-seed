export class Storage {
  private nameStore: Map<string, Map<string, any>> = new Map<string, Map<string, any>>();

  public set(obj: any, name: string, key: string = ''): void {
    let subStore = this.nameStore.get(name);
    if (!subStore) {
      this.nameStore.set(name, subStore = new Map<string, any>());
    }

    subStore.set(key, obj);
  }

  public get<T = any>(name: string, key: string = ''): T {
    const subStore = this.nameStore.get(name);
    return subStore && subStore.get(key);
  }
}
