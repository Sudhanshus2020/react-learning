import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Reply } from '@mui/icons-material'
import { addReply } from '../redux/question/questionsSlice'

export default function Question({
  id,
  content,
  createdAt,
  createdBy,
  bgColor,
  username
}) {
    const [showReplyInput, setShowReplayInput] = useState(false);
    const [replyInput, setReplyInput] = useState('@'+username+',');
    const currentUser = useSelector((state) => state.question.currentUser);
    const dispatch = useDispatch();

    function handleReplySubmit(e) {
        e.preventDefault();
        dispatch(addReply({ questionId: id, content: replyInput, createdAt: "Just now", createdBy: currentUser.username }));
        setShowReplayInput(false);
        setReplyInput('@'+username+',');
    }

    function cancel(e) {
        e.preventDefault();
        setShowReplayInput(false);
        setReplyInput('@'+username+',');
    }

return (
  <>
  <br/>
    <article className='comment_grid'>
        <div className='comment_header'>
            <div className='header header_section'>
            <div className="avatar" style={{ backgroundColor : bgColor}}>
  <span>{createdBy.toString().slice(0,2).toUpperCase()}</span>
</div>
                <h2>{createdBy}</h2>
                <b className="comment_date">{createdAt}</b>
            </div>
        </div>
        <p className="content"> <b>Question: </b> {content}</p>
        
        <div className="">
          
        </div>
        
        <div  className="vr_ interactions">
        <button className='reply' type="button" 
        onClick={()=> setShowReplayInput(true)}>
        <Reply/><span>Reply</span> 
        </button>
     </div>    
    </article>
    
    {showReplyInput &&
        <div className={`${showReplyInput ? 'drop': ''} comments_text_area`}>
            <div className='comment_box reply_from_container'>
                <form onSubmit={handleReplySubmit}>
                    <textarea
                     type='text'
                     className='reply_input'
                     value={replyInput}
                     onChange={(e)=> setReplyInput(e.target.value)}
                    ></textarea>
                    <button type='submit' className='send replay_btn'>Reply</button>
                    
                    <button 
            type="submit"
            className="cancel"
            onClick={cancel}
            >Cancel</button>
                
                </form>
            </div>
        </div>
     }
    
  </>
)}