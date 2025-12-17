import { CelebrityQuestion } from './types';
import { baseQuestions } from './questions';

// Seeded random number generator
function createSeededRandom(seed: number) {
  // Simple seeded random function
  let s = seed;
  return () => {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
}

// Function to shuffle array and track the new position of the correct answer
export function shuffleQuestions(questions: CelebrityQuestion[], seed: number = Date.now()): CelebrityQuestion[] {
  const random = createSeededRandom(seed);
  
  return questions.map(question => {
    // Store the correct answer
    const correctAnswer = question.choices[question.answerIndex];
    
    // Create a copy of choices to shuffle
    const shuffledChoices = [...question.choices];
    
    // Fisher-Yates shuffle algorithm with seeded random
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }
    
    // Find the new index of the correct answer
    const newAnswerIndex = shuffledChoices.indexOf(correctAnswer);
    
    // Return the question with shuffled choices and updated answer index
    return {
      ...question,
      choices: shuffledChoices,
      answerIndex: newAnswerIndex
    };
  });
}

// Function to log the first few questions for verification
export function logQuestionExamples(questions: CelebrityQuestion[], count: number = 5) {
  console.log('Example of shuffled questions:');
  questions.slice(0, count).forEach((q, i) => {
    console.log(`\n${i + 1}. ${q.nameKanji}`);
    q.choices.forEach((choice, idx) => {
      console.log(`   ${String.fromCharCode(65 + idx)}. ${choice}${idx === q.answerIndex ? ' (正解)' : ''}`);
    });
  });
}

// Generate a consistent seed based on the current date (changes daily)
const getDailySeed = () => {
  const today = new Date();
  return Number(`${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`);
};

// Export the shuffled questions with a consistent daily seed
export const getQuestions = () => {
  const seed = getDailySeed();
  return shuffleQuestions(baseQuestions, seed);
};

export const QUESTIONS = getQuestions();
