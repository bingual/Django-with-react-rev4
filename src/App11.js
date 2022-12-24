/*
    라우터로 SPA 만들기
    react-router-dom@6.5.0 기준
*/
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Link,
    NavLink,
    Route,
    Routes,
    useLocation,
    useParams,
    useSearchParams,
} from 'react-router-dom';

const App11 = () => {
    return (
        // BrowserRouter : Route를 사용하기 위해 필요
        <BrowserRouter>
            <div>
                <h1>App 10</h1>
                <ul>
                    <li>
                        {/* style을 적용시키기 위해 사용
                            exact: 정확한 매칭여부
                            to: href과 똑같은 기능을 함
                        */}
                        <NavLink to="/about/" style={navActiveStyle}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/company/" style={navActiveStyle}>
                            aboutCompany
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/" style={navActiveStyle}>
                            profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/weblog/" style={navActiveStyle}>
                            weblog
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* 모든 Route는 Routes 내에 정의되어야만함 */}
            <Routes>
                <Route path="/about/" element={<AboutPage />} />
                <Route path="/about/company/" element={<AboutCompanyPage />} />
                <Route path="/profile/" element={<ProfilePage />} />
                <Route path="/weblog/:post_id" element={<PostDetail />} />
                <Route path="/weblog/" element={<PostList />} />

                {/* path를 *로 지정시 매칭되는게 없을때 해당 엘리먼트를 불러옴 */}
                <Route path="*" element={<RouteNoMatch />} />
            </Routes>
        </BrowserRouter>
    );
};

// NavLink에 적용할 style 함수 생성
const navActiveStyle = ({ isActive }) => {
    // isActive 속성을 받아서 삼항연산자 처리필요
    return isActive ? { fontWeight: 'bold', backgroundColor: 'yellow' } : null;
};

// /about/
const AboutPage = () => (
    <div>
        <h2>AboutPage</h2>
    </div>
);

// /about/company/
const AboutCompanyPage = () => (
    <div>
        <h2>AboutCompanyPage</h2>
    </div>
);

// /profile/
const ProfilePage = () => {
    // query string을 조회/수정할 수 있는 getter/setter 함수 획득
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    return (
        <div>
            <h2>ProfilePage</h2>
            token: {token}
        </div>
    );
};

// /weblog/
const PostList = () => (
    <div>
        <h2>PostList</h2>
        <ul>
            <li>
                {/* NanLink에서 style 기능을 뺀 버전 */}
                <Link to="100">100번 포스팅 보기</Link>
            </li>
            <li>
                <Link to="101">101번 포스팅 보기</Link>
            </li>
        </ul>
    </div>
);

const PostDetail = () => {
    // Route params 획득
    const { post_id } = useParams();

    const [post, setPost] = useState();

    useEffect(
        () =>
            setPost({
                title: `포스팅 제목 ${post_id}`,
                content: `포스팅 내용 ${post_id}번 내용`,
            }),
        [post_id],
    );

    return (
        <div>
            <h2>Post Detail #{post_id}</h2>
            {JSON.stringify(post)}
        </div>
    );
};

const RouteNoMatch = () => {
    // location 획득
    const location = useLocation();
    return <div>잘못된 경로로 접근하였습니다. ({location.pathname})</div>;
};

export default App11;
