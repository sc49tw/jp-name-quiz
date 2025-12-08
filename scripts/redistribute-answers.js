const fs = require('fs');
const path = require('path');

// Read the questions file
const filePath = path.join(__dirname, '../app/data/questions.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Count total questions
const totalQuestions = (content.match(/id: \d+/g) || []).length;
const answersPerIndex = Math.ceil(totalQuestions / 4);

// Create an array with balanced indices (0-3)
let indices = [];
for (let i = 0; i < 4; i++) {
  indices = indices.concat(Array(answersPerIndex).fill(i));
}
indices = indices.slice(0, totalQuestions);

// Shuffle the indices
for (let i = indices.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [indices[i], indices[j]] = [indices[j], indices[i]];
}

// Replace answerIndex values
let counter = 0;
content = content.replace(/answerIndex: \d+/g, () => {
  return `answerIndex: ${indices[counter++]}`;
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated answer indices for ${totalQuestions} questions.`);

// Show the new distribution
const distribution = {};
indices.forEach(idx => {
  distribution[idx] = (distribution[idx] || 0) + 1;
});
console.log('New answer index distribution:', distribution);
