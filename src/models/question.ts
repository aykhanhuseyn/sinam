import Answer from './answer';
import User from './user';

interface Question {
  ID: number;
	Title: string;
	qContent: string;
	Answers: Array<Answer>;
	User: string; // user's string id 
}

export default Question;
