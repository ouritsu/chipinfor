const costInformation = {
  allowedCost: 120,
  participants: ['Marilla', 'Seborator', 'Monsti']
};

function splitCost(costInformation) {

  const startParticipantsObject = {};
  const allowedCost = costInformation.allowedCost;

  for (const participant of Object.values(costInformation.participants)) {
    startParticipantsObject[participant] = calculateSplittedCost(allowedCost);
  }
  return startParticipantsObject;
}

function calculateSplittedCost(allowedCost) {

  const participantNumber = Object.keys(costInformation.participants).length;
  const splittedCost = allowedCost / participantNumber;
  return splittedCost;

}

splitCost(costInformation);
console.log(splitCost(costInformation));