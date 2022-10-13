// 초기 상태 설정
const ProjectState = {
  list: [
    {
      id: 1,
      text: '카카오 클론코딩',
      name: '테스트2',
      tier: 'silver',
      time: '13:00',
      views: 5,
      front: 3,
      frontMax: 5,
      back: null,
      backMax: null,
      etc: null,
      etcMax: null,
      lastDay: '2022.10.31'
    },
    {
      id: 2,
      text: '유튜브 클론코딩',
      name: '테스트3',
      tier: 'gold',
      time: '14:00',
      views: 6,
      front: null,
      frontMax: null,
      back: 0,
      backMax: 2,
      etc: 1,
      etcMax: 1,
      lastDay: '2022.11.31'
    },
    {
      id: 3,
      text: '기획부터 개발까지',
      name: '테스트4',
      tier: 'master',
      time: '15:00',
      views: 10,
      front: 0,
      frontMax: 2,
      back: 0,
      backMax: 3,
      etc: 2,
      etcMax: 3,
      lastDay: '2022.9.31'
    },
  ],
};

export default function Project(state = ProjectState, action) {
  return state;
}
  