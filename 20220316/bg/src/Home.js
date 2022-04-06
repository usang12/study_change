import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <Link to="/question">
                <button>시작하기</button>
            </Link>
        </div>
    );
}

export default Home;
