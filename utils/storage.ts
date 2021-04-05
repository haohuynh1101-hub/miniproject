/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
function loadString(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
function saveString(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
function load(key: string): Record<string, unknown> | boolean {
  try {
    const almostThere = localStorage.getItem(key);
    if (almostThere) {
      return JSON.parse(almostThere);
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
function save<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
function remove(key: string): void | boolean {
  try {
    localStorage.removeItem(key);
  } catch {
    return false;
  }
}

/**
 * Burn it all to the ground.
 */
function clear(): void | boolean {
  try {
    localStorage.clear();
  } catch {
    return false;
  }
}

export default {
  loadString,
  saveString,
  load,
  save,
  remove,
  clear,
};
