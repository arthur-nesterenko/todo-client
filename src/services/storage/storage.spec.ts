import Storage from "./storage";

describe("services/storage", () => {
  afterAll(() => {
    Storage.clear();
  });
  it("Should setting value", () => {
    Storage.setValue("test", "value");
    expect(Storage.getValue("test")).toEqual("value");
    Storage.setValue("test", "VAL");
    expect(Storage.getValue("test")).toEqual("VAL");
  });

  it("Should getting value", () => {
    Storage.setValue("Key", "value");
    expect(Storage.getValue("Key")).toEqual("value");
    expect(Storage.getValue("key")).toBeNull();
  });

  it("Should check has value", async () => {
    Storage.setValue("Key", "value");
    Storage.setValue("key", "value");
    Storage.setValue("test", "value");
    expect(Storage.has("Key")).toBe(true);
    expect(Storage.has("key")).toBe(true);
    expect(Storage.has("test")).toBe(true);
    // false
    expect(Storage.has("test1")).toBe(false);
    expect(Storage.has("test2")).toBe(false);
    expect(Storage.has("test4")).toBe(false);
  });

  it("Should remove item", () => {
    Storage.setValue("Key", "value");
    Storage.setValue("Key1", "value1");
    Storage.setValue("Key2", "value2");
    expect(Storage.has("Key")).toBe(true);
    expect(Storage.has("Key1")).toBe(true);
    expect(Storage.has("Key2")).toBe(true);

    Storage.remove("Key");
    Storage.remove("Key1");
    Storage.remove("Key2");

    expect(Storage.has("Key")).toBe(false);
    expect(Storage.has("Key1")).toBe(false);
    expect(Storage.has("Key2")).toBe(false);
  });

  it("Should clear storage", () => {
    Storage.setValue("Key", "value");
    Storage.setValue("Key1", "value1");
    Storage.setValue("Key2", "value2");
    expect(Storage.has("Key")).toBe(true);
    expect(Storage.has("Key1")).toBe(true);
    expect(Storage.has("Key2")).toBe(true);

    Storage.clear();

    expect(Storage.has("Key")).toBe(false);
    expect(Storage.has("Key1")).toBe(false);
    expect(Storage.has("Key2")).toBe(false);
  });

  describe("getSafeValue", () => {
    it("Should use default value if null", () => {
      expect(Storage.getSafeValue("key1", 1)).toBe(1);
      expect(Storage.getSafeValue("key1", 2)).toBe(2);
      expect(Storage.getSafeValue("key1", 3)).toBe(3);
    });

    it("Should ignore default value", () => {
      Storage.setValue("key1", "value1");
      Storage.setValue("key2", "value2");
      Storage.setValue("key3", "value3");
      expect(Storage.getSafeValue("key1", 1)).not.toBe(1);
      expect(Storage.getSafeValue("key2", 2)).not.toBe(2);
      expect(Storage.getSafeValue("key3", 3)).not.toBe(3);
      expect(Storage.getSafeValue("key1", 1)).toBe("value1");
      expect(Storage.getSafeValue("key2", 2)).toBe("value2");
      expect(Storage.getSafeValue("key3", 3)).toBe("value3");
    });
  });
});
