import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";

const initialState = {

    allusers: [
        {"sudhanshu": {"initials": "SS", "name" : "Sudhanshu S"}}
    ],

    currentUser: {
        "username": "sudhanshu", "initials": "SS", "name" : "Sudhanshu S"
    },

    questions : [{
        "id" : "1",
        "content" : "What is JSX?",
        "createdAt" : "15 days ago",
        "createdBy" : "sudhanshu",
        "replies" : [
            {
            "id" : "11",
            "content" : "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easy to create components and write code that is both easy to read and easy to understand. JSX is not required in React, but it is recommended because it makes your code more readable.",
            "createdAt" : "14 days ago",
            "createdBy" : "sadhna",
            "score" : 10,
            }
        ]
      }, {
        "id" : "2",
        "content" : "What is the Virtual DOM? How Virtual DOM works?",
        "createdAt" : "14 days ago",
        "createdBy" : "john",
        "replies" : [
            {
            "id" : "21",
            "content" : "A virtual DOM is a basic JavaScript object which is simply the copy of the real DOM. It is a tree that consists of the elements, attributes and content as objects and their properties. React render function then creates a node tree out of the React components. It then updates this tree in response to the mutations within the data model.",
            "createdAt" : "10 days ago",
            "createdBy" : "sagar",
            "score" : 5,
            },
            {
                "id" : "22",
                "content" : "In React, the virtual DOM is a lightweight representation of the actual DOM. It is used to track changes to the UI and to efficiently update the DOM when those changes occur.",
                "createdAt" : "10 days ago",
                "createdBy" : "fred",
                "score" : 7,
            }
        ]
      }]
}

export const questionsSlice = createSlice({
  name: 'questions', 
  initialState,
  reducers: {
    addQuestion : (state, action) => {
      const {content} = action.payload
      const newQuestion = {
        id: uuidV4(),
        content,
        createdAt: 'Just now',
        createdBy: state.currentUser.username,
        replies: [],
      }

      state.questions.push(newQuestion);
    },
    addReply : (state, action) => {
      const {questionId, content, createdAt, createdBy} = action.payload;
      const question = state.questions.find((q)=> q.id === questionId);
      if(question) {
        const newReply = {
          id : uuidV4(),
          content,
          createdAt,
          createdBy,
          score : 0
        }
        question.replies.push(newReply);
      }
    },
    
    upVoteReply : (state, action) => {
      const { questionId, replyId} = action.payload;
      const question = state.questions.find((q)=> q.id === questionId);

      if(question) {
        const reply = question.replies.find((r) => r.id === replyId);
        if(reply) {
          reply.score++;
        }
      }
    },
    downVoteReply : (state, action) => {
      const { questionId, replyId} = action.payload;
      const question = state.questions.find((q)=> q.id === questionId);

      if(question) {
        const reply = question.replies.find((r) => r.id === replyId);
        if(reply) {
          reply.score--;
        }
      }
    }

}});

export const {
  addQuestion,
  upVoteReply,
  downVoteReply,
  addReply
  
} = questionsSlice.actions;


export default questionsSlice.reducer;