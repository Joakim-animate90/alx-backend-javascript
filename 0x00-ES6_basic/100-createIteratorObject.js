export default function createIteratorObject(report) {
  const reportWithIterator = {
    ...report,
    [Symbol.iterator]() {
      const keys = Object.keys(this);
      let index = 0;
      return {
        next: () => {
          if (index < keys.length) {
            const key = keys[index];
            index += 1;
            return {
              value: this[key],
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
  return reportWithIterator;
}
