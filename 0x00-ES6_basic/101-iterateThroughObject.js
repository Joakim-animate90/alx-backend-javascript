export default function iterateThroughObject(reportWithIterator) {
  const report = [];
  for (const item of reportWithIterator.report) {
    report.push(item);
  }

  return report.join(' | ');
}
