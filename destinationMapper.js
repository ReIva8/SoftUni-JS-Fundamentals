function destinationMapper(input) {
  //You have to filter only the valid ones.
  //have matched all the valid locations, you have to calculate travel points.
  //by summing the lengths of all the valid destinations that you have found on the map.
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(input);
  let result = [];
  let travelPoints = 0;
  let finalDestinations = [];
  while (match !== null) {
    let towns = match[2];

    result.push(towns);
    match = pattern.exec(input);
  }

  for (let element of result) {
    let cityLength = element.length;
    travelPoints += cityLength;
    finalDestinations.push(element);
  }
  console.log(`Destinations: ${finalDestinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
