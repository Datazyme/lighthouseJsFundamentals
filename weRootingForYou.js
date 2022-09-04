const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
    
const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
    let bestVeggie = vegetables[0];
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i][metric] > bestVeggie[metric]) {
        bestVeggie = vegetables[i]
      }
    }
    return bestVeggie.submitter;
  }
  console.log(judgeVegetable(vegetables, metric));