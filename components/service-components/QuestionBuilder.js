import StorageManager from './StorageManager';


let questionBank = [
    'What is your partner\'s biggest pet peeve?',
    'What is your partner\'s dream vacation?',
    'What is your partner\'s catchphrase?',
    'What is your partner\'s most notable flaw?',
    'What is your partner\'s favorite animal?',
    'What is your partner\'s worst habit?',
    'What is your favorite thing about your partner?',
    'Who is your partner\'s first kiss?',
    'What is your partner\'s biggest insecurity?',
    'What would your partner change about themself first?',
    'Who is the first person your partner would call if they went to jail?',
    'What is your partner\'s ideal last meal?'
];

class QuestionBuilder {

    static initializeQuestions(numberOfQuestions){
        let questionsToDisplay = questionBank.sort((a, b) => {
            return Math.random() * 2 - 1;
        });
        numberOfQuestions = numberOfQuestions > questionBank.length ? questionBank.length : numberOfQuestions;
        questionsToDisplay.splice(numberOfQuestions - 1, questionBank.length - numberOfQuestions);
        let questionIndex = 0;
        StorageManager.store('questions', JSON.stringify(questionsToDisplay));
        StorageManager.store('questionIndex', JSON.stringify(questionIndex));
    }

    static async getCurrentQuestion(){
        console.log('getting current question');
        let questions = await StorageManager.read('questions');
        let indexString = await StorageManager.read('questionIndex');
        let index = parseInt(indexString);
        let currentQuestion = questions[index];
        return currentQuestion;
    }

    static async getNextQuestion(){
        let questions = await StorageManager.read('questions');
        let indexString = await StorageManager.read('questionIndex');
        let index = parseInt(indexString);
        let nextQuestion = questions[index + 1];
        StorageManager.store('questionIndex', JSON.stringify(index+1));
        return nextQuestion;
    }

    static loadPreviousQuestion(){

    }

}

//Equivalent of a static field - did not use static fields because they are not 
//supported within classes in Safari so they may not be on iPhone or mobile in general
// QuestionBuilder.usedQuestions = [];
// QuestionBuilder.index = 
// let remainingQuestions = questionBank;

export default QuestionBuilder;