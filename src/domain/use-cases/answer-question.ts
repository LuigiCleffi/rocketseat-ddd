import { Answer } from "@/entities/answer.js";
import type { AnswersRepository } from "@/repositories/answers-repository.js";

interface AnswerQuestionUseCaseRequest {
    questionId: UniqueEntityID;
    instructorId: UniqueEntityID;
    content: string;
}

export class AnswerQuestionUseCase {
    constructor(
        private answersRepository: AnswersRepository
    ) {}

    execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest){
        const answer = Answer.create({
            content,
            authorId: new UniqueEntityID(instructorId.toString()),
            questionId: new UniqueEntityID(questionId.toString()),
        });

        this.answersRepository.create(answer);
        return answer;
    }
}