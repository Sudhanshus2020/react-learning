import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThumbDown } from '@mui/icons-material'
import { ThumbUp } from '@mui/icons-material'

export default function Replies({
    replyId,
    content,
    createdAt,
    createdBy,
    score,
    bgColor,
    upVoterHandler,
    downVoteHandler
}){


return (
    <div className='reply_wrapper'>
        <article className='replies comment_grid'>
            <div className='header header_section'>
            <div className="avatar" style={{ backgroundColor : bgColor}}>
  <span>{createdBy.toString().slice(0,2).toUpperCase()}</span>
</div>
                <h2>{createdBy}</h2>
                <span className='comment_date'>{createdAt}</span>
            </div>
            <p className='content'>{content}</p>
            <div className='score_controls votes'>
            <button onClick={upVoterHandler}>
              <ThumbUp/>
            </button>
            <button type='button' className='scores vote_count'>
              {score}
            </button>
            <button onClick={downVoteHandler}>
               <ThumbDown/>
            </button>
        </div>
        </article>
    </div>
)
}