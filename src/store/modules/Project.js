// 초기 상태 설정
const ProjectState = {
  list: [
    {
      id: 1,
      text: '프론트 구해요',
      name: '테스트2',
      time: '13:00',
      views: '5',
      front: '2',
      frontMax: '5',
      back: null,
      backMax: null
    },
    {
      id: 2,
      text: '백엔드 할사람',
      name: '테스트3',
      time: '14:00',
      views: '6',
      front: null,
      frontMax: null,
      back: '0',
      backMax: '2'
    },
    {
      id: 3,
      text: '둘다 구함',
      name: '테스트4',
      time: '15:00',
      views: '10',
      front: '0',
      frontMax: '2',
      back: '0',
      backMax: '3'
    },
  ],
};

export default function Project(state = ProjectState, action) {
  return state;
}
  