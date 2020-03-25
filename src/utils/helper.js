
export function formatQuestions(question){
    const {author, optionOne, optionTwo} = question;
    return {
        author : author,
        optionOne : optionOne.text,
        optionTwo : optionTwo.text,
    }
}