document
  .querySelector('pre')
    .innerText
    .split(/\n\n/g)
      .map((v, i) => v.split(/\n/g)
        .reduce((sum, next) => sum += parseInt(next), 0))
        .sort((left, right) => left < right)
        .slice(0, 3)
        .reduce((sum, next) => sum += next, 0)
