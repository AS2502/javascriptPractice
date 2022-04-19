class_Ten = [
{ "roll_no": 1, "telugu": 50, "hindi": 55, "english": 78, "maths": 49, "science": 55, "social": 70 },
{ "roll_no": 2, "telugu": 40, "hindi": 40, "english": 90, "maths": 99, "science": 65, "social": 30 },
{ "roll_no": 3, "telugu": 60, "hindi": 35, "english": 90, "maths": 99, "science": 75, "social": 40 },
{ "roll_no": 4, "telugu": 95, "hindi": 35, "english": 90, "maths": 99, "science": 85, "social": 70 },
{ "roll_no": 5, "telugu": 20, "hindi": 35, "english": 50, "maths": 39, "science": 75, "social": 80 },
{ "roll_no": 6, "telugu": 40, "hindi": 35, "english": 40, "maths": 29, "science": 45, "social": 40 },
{ "roll_no": 7, "telugu": 40, "hindi": 85, "english": 90, "maths": 99, "science": 65, "social": 40 },
{ "roll_no": 8, "telugu": 90, "hindi": 75, "english": 30, "maths": 39, "science": 75, "social": 70 },
{ "roll_no": 9, "telugu": 70, "hindi": 55, "english": 60, "maths": 99, "science": 85, "social": 88 },
{ "roll_no": 10, "telugu": 70, "hindi": 35, "english": 30, "maths": 49, "science": 95, "social": 70 },
];

const overallPercentage = class_Ten.map(calculateOverallPercentage)
function calculateOverallPercentage(marks){
  let objPercentage={};
  objPercentage={
      roll_no:marks.roll_no,
      percentage:(marks.telugu+marks.hindi+marks.english+marks.maths+marks.science+marks.social)/6
  };
  return objPercentage;
}
console.table(overallPercentage);


