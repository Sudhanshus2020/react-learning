export default function AddNewQuestionForm({
    addQuestion,
    handleSetContent,
    content
}){
    function handleSubmit(e) {
        e.preventDefault();
        addQuestion();
        handleSetContent('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="comment_box">
                <textarea type="text" 
                placeholder="Post a question..."
                value={content}
                onChange={(e)=>handleSetContent(e.target.value)}></textarea>
                <div>
                    <button type="submit"  className="send add_comment">SEND</button>
                </div>
            </form>
        </div>
    )
}