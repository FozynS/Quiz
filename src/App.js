import axios from 'axios';
import './App.css';
import Quiz from './quiz-component/quiz';
import { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/questions.json');
        setQuestions(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      {questions && questions.length > 0 && <Quiz questions={questions} />}
    </div>
  );
}

export default App;
