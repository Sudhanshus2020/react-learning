import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Question  from './components/Question';
import Replies from './components/Replies';
import AddNewQuestionForm from './components/AddNewQuestionForm'
import { addQuestion, upVoteReply, downVoteReply } from './redux/question/questionsSlice'

function App() {
 const questions = useSelector((state) => state.question.questions);
 const currentUser = useSelector((state) => state.question.currentUser);
 const [content, setContent] = useState('');
 const dispatch = useDispatch();

 const generateRandomColor = (id) => {
  const randomNumber = Math.floor(Math.random() * 127);
  const randomNumber2 = Math.floor(Math.random() * 90);
  const randomNumber3 = Math.floor(Math.random() * 100);
  return '#'+randomNumber+randomNumber2+randomNumber3;
};

 return (
  <>
   {questions.map((q)=>(
    <div key={q.id}>
       <Question
       id={q.id}
       content={q.content}
       createdAt={q.createdAt}
       createdBy={q.createdBy}
       key={q.id}
       bgColor={generateRandomColor(q.id)}
       username={q.createdBy} />
      
      {q.replies && q.replies.map((r)=> (
        <Replies
        content={r.content}
        id={r.id}
        key={r.id}
        createdAt={r.createdAt}
        createdBy={r.createdBy}
        score={r.score}
        bgColor={generateRandomColor(r.id)}
        upVoterHandler={()=>dispatch(upVoteReply({questionId:q.id, replyId: r.id}))}
        downVoteHandler={()=>dispatch(downVoteReply({questionId:q.id, replyId: r.id}))}
         />
        
      ))}

    </div>
   ))}
   
  <AddNewQuestionForm 
    content={content}
    addQuestion={()=>dispatch(addQuestion({content}))}
    handleSetContent={setContent}
  />

  </>
 )

}

export default App
