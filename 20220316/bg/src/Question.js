import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useState } from 'react';

const dummy = ['이우상', '정병희', '차종순', '정태규'];

function Choice({
    number,
    setNumber,
}) {
    const handleClick = (value) => () => {
        alert('내 선택은' + value);
        setNumber(number + 1);
    }

    return (
        <div>
            <div>문제 {number + 1}</div>
            <Button variant="success" onClick={handleClick(dummy.slice(number * 2, number * 2 + 2)[0])}>
                {dummy.slice(number * 2, number * 2 + 2)[0]}
            </Button>
            <Button variant="success" onClick={handleClick(dummy.slice(number * 2, number * 2 + 2)[1])}>
                {dummy.slice(number * 2, number * 2 + 2)[1]}
            </Button>
        </div>
    )
}

function Question() {
    const [number, setNumber] = useState(0);


    return(
        <div>
            <Link to="/result">
                <Button variant="danger">결과보기</Button>
            </Link>
            <Choice number={number} setNumber={setNumber} />
        </div>
    );
}

export default Question;
