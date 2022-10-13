// 초기 상태 설정
const CommunityState = {
  list: [
    {
      id: 1,
      text: '밥 먹기',
      name: '테스트2',
      time: '13:00',
      views: '5',
      daily: true,
    },
    {
      id: 2,
      text: '취업 하기',
      name: '테스트3',
      time: '14:00',
      views: '6',
      daily: true,
    },
    {
      id: 3,
      text: '모임 하기',
      name: '테스트4',
      time: '15:00',
      views: '10',
      class: true,
    },
  ],
};

export default function Community(state = CommunityState, action) {
  return state;
}
  