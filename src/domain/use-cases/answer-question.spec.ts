import type { Answer } from '../entities/answer.js';
import { AnswerQuestionUseCase } from './answer-question.js';

const fakeAnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

    const answer = await answerQuestion.execute({
        instructorId: new UniqueEntityID('instructor-1'),
        questionId: new UniqueEntityID('question-1'),
        content: 'This is an answer'
    })

    expect(answer.content).toEqual('This is an answer');
})