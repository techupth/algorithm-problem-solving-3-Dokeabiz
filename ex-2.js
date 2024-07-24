function sortStudentsByScore(students) {
  
}

const students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 }
];
sortStudentsByScore(students)

// students.sort((a, b) => b.score - a.score);
// console.log(students)
// เรามี Array students ซึ่งบรรจุข้อมูลนักเรียน ให้เขียน Algorithm เพื่อเรียงลำดับนักเรียนตามคะแนนสอบ โดยเรียงจากคนที่สอบได้คะแนนสูงสุดไปยังคนที่สอบได้คะแนนต่ำสุด เช่น
// [
//     { id: "S001", name: "Anan", score: 85 },
//     { id: "S002", name: "Boon", score: 92 },
//     { id: "S003", name: "Chai", score: 78 },
//     { id: "S004", name: "Dao", score: 95 },
//     { id: "S005", name: "Ek", score: 88 },
//     { id: "S006", name: "Fah", score: 80 }
// ];
// ​
// เมื่อ Algorithm นี้ทำงานจะเห็นผลลัพธ์ดังนี้
// [
//     { id: "S004", name: "Dao", score: 95 },
//     { id: "S002", name: "Boon", score: 92 },
//     { id: "S005", name: "Ek", score: 88 },
//     { id: "S001", name: "Anan", score: 85 },
//     { id: "S006", name: "Fah", score: 80 },
//     { id: "S003", name: "Chai", score: 78 }
// ]
