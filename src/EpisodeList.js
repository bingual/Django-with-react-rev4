/*
Axios 라이브러리를 활용한 HTTP 요청
*/
import React from 'react';
import EpisodeAPI from 'EpisodeAPI';
import { Card, Row, Col } from 'antd';

class EpisodeDetail extends React.Component {
    state = {
        episode: this.props.episode,
    };

    render() {
        const {
            episode: {
                name,
                image: { medium: thumbUrl },
            },
        } = this.state;
        return (
            <Card
                style={{ width: 240 }}
                cover={<img src={thumbUrl} alt={name} />}
            >
                <Card.Meta title={name} />
            </Card>
        );
    }
}

class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    };

    async componentDidMount() {
        const apiUrl = '/singlesearch/shows';
        const params = {
            q: 'love',
            embed: 'episodes',
        };
        // 첫번째 인자: URL주소 , 두번째 인자: Options
        const response = await EpisodeAPI.get(apiUrl, { params });
        try {
            // data object의 자식 object의 episodes 필드를 추출해서 변수화
            const {
                data: {
                    _embedded: { episodes },
                },
            } = response;
            this.setState({
                episodeList: episodes,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { episodeList } = this.state;
        return (
            <div>
                <h1>EpisodeList</h1>
                <hr />
                <Row>
                    {episodeList.map((episode, index) => (
                        <Col span={8}>
                            <EpisodeDetail key={index} episode={episode} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default EpisodeList;
