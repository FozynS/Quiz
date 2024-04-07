import './quiz.css';
import { useState } from 'react';

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswered, setUserAnswered] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = () => {
    const nextQuestionIndex = currentQuestionIndex === questions.length - 1 ? 0 : currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);
    setUserAnswered(false);
  };

  const onCheckAnswer = (selectedAnswerIndex) => {
    setUserAnswered(true);
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedAnswerIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div className='wrapper'>
      <h1 className='title'>Question {currentQuestionIndex + 1} of {questions.length}</h1>
      <hr />
      <>
        <h2>{currentQuestion.question}</h2>
        <ul className='list-items'>
          {currentQuestion.answers.map((answer, index) => (
            <li 
              key={index} 
              className='list-item'
              style={userAnswered && answer.isCorrect ? {backgroundColor: 'green', color: 'white'} : null}
              onClick={() => onCheckAnswer(index)}
            >
              {answer.text}
            </li>
          ))}
        </ul>
      </>
      <button className='next-btn' onClick={handleAnswer}>Next</button>
      <div>
        {questions.map((answer, index) => (
          <input 
            key={index}
            type="checkbox" 
            className={`checkbox ${selectedAnswers[index] !== null ? (questions[index].answers[selectedAnswers[index]].isCorrect ? 'correct' : 'wrong') : ''}`}
            checked={selectedAnswers[index] !== null} 
            readOnly
          />
        ))}
      </div>
    </div>
  )
}

export default Quiz;