function parseCSV(csvStr) {
  const lines = csvStr.split('\n')
  const result = []
  const headers = lines[0].split(',')

  for (let i = 1; i < lines.length; i++) {
    const obj = {}
    const currentline = lines[i].split(',')

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }

  return result
}

export default parseCSV
