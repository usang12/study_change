import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useState } from 'react';

import LoadingPage from '../../components/Loading/Loading';

import "./Question.css";

const dummy = ['이우상', '정병희', '차종순', '정태규'];

function generateQuestion() {
    const q = [];
    let temp = [];

    for (let i = 0; i <= dummy.length; i++) {
        if (temp.length === 2) {
            q.push(temp);
            temp = [];
        }

        // rnadom code
        temp.push(dummy[i]);
    }

    return q;
}

function Choice({
    number,
    setNumber,
    answer,
    setAnswer
}) {
    const handleClick = (value) => () => {
        alert('내 선택은' + value);
        setAnswer([...answer, value]);
        setNumber(number + 1);
    }

    return (
        <div>
            <div>문제 {number + 1}</div>
            <Button variant="success" onClick={handleClick(generateQuestion()[number][0])}>
                {generateQuestion()[number][0]}
            </Button>
            <Button variant="success" onClick={handleClick(generateQuestion()[number][1])}>
                {generateQuestion()[number][1]}
            </Button>
        </div>
    )
}

function Question() {
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState([]);

    return(
        <div className='question-wrapper'>
            <Link to="/result">
                <Button variant="danger">결과보기</Button>
            </Link>
            <Choice 
                number={number} 
                setNumber={setNumber}
                answer={answer}
                setAnswer={setAnswer}
            />
            <div>{answer}</div>
        </div>
    );
}

export default Question;
