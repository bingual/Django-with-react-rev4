// /*
//     라우터로 SPA 만들기
//     react-router-dom@5.1.2 기준
// */

// import queryString from 'query-string';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

// const App10 = () => {
//     return (
//         // BrowserRouter : Route를 사용하기 위해 필요
//         <BrowserRouter>
//             <div>
//                 <h1>App 10</h1>
//                 <ul>
//                     <li>
//                         {/* style을 적용시키기 위해 사용
//                             exact: 정확한 매칭여부
//                             to: href과 똑같은 기능을 함
//                         */}
//                         <NavLink
//                             exact
//                             to="/about/"
//                             activeStyle={navActiveStyle}
//                         >
//                             about
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             exact
//                             to="/about/company"
//                             activeStyle={navActiveStyle}
//                         >
//                             aboutCompany
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             exact
//                             to="/profile/"
//                             activeStyle={navActiveStyle}
//                         >
//                             profile
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             exact
//                             to="/weblog/"
//                             activeStyle={navActiveStyle}
//                         >
//                             weblog
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//             {/* 단일 Route를 불러오기 위해서 사용 */}
//             <Switch>
//                 <Route exact path="/about/" component={AboutPage} />
//                 <Route
//                     exact
//                     path="/about/company/"
//                     component={AboutCompanyPage}
//                 />
//                 <Route exact path="/profile/" component={ProfilePage} />
//                 <Route path="/weblog/:post_id" component={PostDetail} />
//                 <Route path="/weblog/" component={PostList} />

//                 {/* path가 없을시 매칭되는게 없을때 해당 컴포넌트를 불러옴 */}
//                 <Route component={RouteNoMatch} />
//             </Switch>
//         </BrowserRouter>
//     );
// };

// // /about/
// const AboutPage = () => (
//     <div>
//         <h2>AboutPage</h2>
//     </div>
// );

// // /about/company/
// const AboutCompanyPage = () => (
//     <div>
//         <h2>AboutCompanyPage</h2>
//     </div>
// );

// // /profile/
// const ProfilePage = ({ location }) => {
//     /*
//         location : 현재 경로 정보
//         hash, .pathname, .search, .state 속성
//     */
//     // queryString.parse()을 이용해 파싱한 문자열을 객체화함
//     const { token } = queryString.parse(location.search);
//     return (
//         <div>
//             <h2>ProfilePage</h2>
//             token : {token}
//         </div>
//     );
// };

// // /weblog/
// const PostList = () => (
//     <div>
//         <h2>PostList</h2>
//         <ul>
//             <li>
//                 {/* NanLink에서 style 기능을 뺀 버전 */}
//                 <Link to="100">100번 포스팅 보기</Link>
//             </li>
//             <li>
//                 <Link to="101">101번 포스팅 보기</Link>
//             </li>
//         </ul>
//     </div>
// );

// const PostDetail = ({ match }) => {
//     /*
//         match : Router 매칭 정보
//         .isExact, .url, .path, .params 속성

//         history : 히스토리 조작
//         .location, .push(...), .replace(...), .goBack(), goForward() 등
//     */
//     const {
//         params: { post_id },
//     } = match;

//     const [post, setPost] = useState();

//     useEffect(
//         () =>
//             setPost({
//                 title: `포스팅 제목 ${post_id}`,
//                 content: `포스팅 내용 ${post_id}번 내용`,
//             }),
//         [post_id],
//     );

//     return (
//         <div>
//             <h2>Post Detail #{post_id}</h2>
//             {JSON.stringify(post)}
//         </div>
//     );
// };

// // NavLink에 적용할 style 객체 생성
// const navActiveStyle = {
//     fontWeight: 'bold',
//     backgroundColor: 'yellow',
// };

// const RouteNoMatch = ({ location }) => (
//     <div>잘못된 경로로 접근하였습니다. ({location.pathname})</div>
// );

// export default App10;
