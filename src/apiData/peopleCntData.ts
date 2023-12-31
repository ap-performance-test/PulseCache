// open api 로 받아오는 정보들

export interface LocationData {
  location: string;
  client: number | string;
}

export interface ApiPulseCntData {
  outblock: Array<{ MSG: number }>;
  RESULT: Array<LocationData>;
}

export const apiData: ApiPulseCntData = {
  outblock: [{ MSG: 221 }],
  RESULT: [
    { location: '중앙도서관-1F-102HB-0001-121', client: 3 },
    { location: '중앙도서관-1F-104-1H-0002-121', client: 0 },
    { location: '중앙도서관-1F-104-1H-0003-121', client: 2 },
    { location: '중앙도서관-1F-104-1H-0004-121', client: 0 },
    { location: '중앙도서관-1F-104H-0005-121', client: 21 },
    { location: '중앙도서관-1F-104H-0006-121', client: 19 },
    { location: '중앙도서관-1F-104H-0007-121', client: 52 },
    { location: '중앙도서관-1F-104H-0008-121', client: 18 },
    { location: '중앙도서관-1F-104H-0009-121', client: 7 },
    { location: '중앙도서관-1F-104H-0010-121', client: 32 },
    { location: '중앙도서관-1F-106HB-0017-121', client: 10 },
    { location: '중앙도서관-1F-L_Robi-0025-121', client: 3 },
    { location: '중앙도서관-1F-104H-0013-121', client: 25 },
    { location: '중앙도서관-1F-104H-0011-121', client: 31 },
    { location: '중앙도서관-1F-104H-0014-121', client: 14 },
    { location: '중앙도서관-1F-104H-0015-121', client: 8 },
    { location: 'TEST_AP1', client: 2 },
    { location: 'TEST_AP2', client: 1 },
    { location: '중앙도서관-1F-107H-0021-121', client: 0 },
    { location: '중앙도서관-1F-107H-0019-121', client: 0 },
    { location: '중앙도서관-1F-107H-0020-121', client: 0 },
    { location: '중앙도서관-1F-107H-0018-121', client: 0 },
    { location: '중앙도서관-1F-107H-0023-121', client: 0 },
    { location: '중앙도서관-1F-R_Robi-0026-121', client: 22 },
    { location: '중앙도서관-1F-110H-0024-121', client: 6 },
    { location: '중앙도서관-4F-404H-0081-121', client: 0 },
    { location: '중앙도서관-4F-401H-0077-121', client: 0 },
    { location: '중앙도서관-4F-401H-0076-121', client: 0 },
    { location: '중앙도서관-4F-401H-0074-121', client: 0 },
    { location: '중앙도서관-1F-107H-0022-121', client: 0 },
    { location: '중앙도서관-4F-401H-0072-121', client: 0 },
    { location: '중앙도서관-4F-401H-0073-121', client: 0 },
    { location: '중앙도서관-4F-406H-0085-121', client: 0 },
    { location: '중앙도서관-4F-401H-0075-121', client: 0 },
    { location: '중앙도서관-4F-406H-0086-121', client: 0 },
    { location: '중앙도서관-4F-401H-0078-121', client: 0 },
    { location: '중앙도서관-4F-401H-0079-121', client: 0 },
    { location: '중앙도서관-4F-406H-0084-121', client: 0 },
    { location: '중앙도서관-4F-409H-0087-121', client: 1 },
    { location: '중앙도서관-4F-406H-0082-121', client: 0 },
    { location: '중앙도서관-4F-406H-0083-121', client: 0 },
    { location: '중앙도서관-4F-403H-0080-121', client: 0 },
    { location: '중앙도서관-5F-501H-0094-121', client: 1 },
    { location: '중앙도서관-5F-501H-0093-121', client: 0 },
    { location: '중앙도서관-5F-501H-0092-121', client: 0 },
    { location: '중앙도서관-5F-506H-0100-121', client: 0 },
    { location: '중앙도서관-5F-503H-0095-121', client: 0 },
    { location: '중앙도서관-3F-302H-0062-121', client: 2 },
    { location: '중앙도서관-2F-207H-0053-121', client: 9 },
    { location: '중앙도서관-2F-207H-0048-121', client: 13 },
    { location: '중앙도서관-3F-305HB-0064-121', client: 11 },
    { location: '중앙도서관-3F-307H-0067-121', client: 0 },
    { location: '중앙도서관-2F-207H-0049-121', client: 18 },
    { location: '중앙도서관-3F-308H-0068-121', client: 4 },
    { location: '중앙도서관-2F-207H-0052-121', client: 8 },
    { location: '중앙도서관-2F-207H-0055-121', client: 19 },
    { location: '중앙도서관-3F-315HB-0069-121', client: 0 },
    { location: '중앙도서관-2F-207H-0056-121', client: 19 },
    { location: '중앙도서관-3F-318H-0070-121', client: 0 },
    { location: '중앙도서관-3F-318H-0071-121', client: 1 },
    { location: '중앙도서관-2F-207H-0054-121', client: 4 },
    { location: '중앙도서관-3F-302H-0063-121', client: 0 },
    { location: '중앙도서관-2F-207H-0058-121', client: 27 },
    { location: '중앙도서관-2F-207H-0051-121', client: 15 },
    { location: '중앙도서관-2F-207H-0059-121', client: 16 },
    { location: '중앙도서관-2F-Robi-0027-121', client: 19 },
    { location: '중앙도서관-2F-205H-0045-121', client: 1 },
    { location: '중앙도서관-2F-Robi-0028-121', client: 7 },
    { location: '중앙도서관-2F-201H-0041-121', client: 3 },
    { location: '중앙도서관-2F-201H-0032-121', client: 1 },
    { location: '중앙도서관-2F-201H-0039-121', client: 7 },
    { location: '중앙도서관-2F-201H-0031-121', client: 8 },
    { location: '중앙도서관-2F-201H-0029-121', client: 3 },
    { location: '중앙도서관-2F-201H-0036-121', client: 1 },
    { location: '중앙도서관-2F-201H-0038-121', client: 1 },
    { location: '중앙도서관-2F-201H-0030-121', client: 8 },
    { location: '중앙도서관-2F-204H-0043-121', client: 9 },
    { location: '중앙도서관-2F-201H-0042-121', client: 5 },
    { location: '중앙도서관-2F-204H-0044-121', client: 13 },
    { location: '중앙도서관-2F-207H-0047-121', client: 0 },
    { location: '중앙도서관-5F-501H-0088-121', client: 0 },
    { location: '중앙도서관-5F-501H-0089-121', client: 0 },
    { location: '중앙도서관-1F-104H-0012-121', client: 7 },
    { location: '중앙도서관-5F-501H-0090-121', client: 0 },
    { location: '중앙도서관-5F-501H-0091-121', client: 0 },
    { location: '중앙도서관-2F-201H-0037-121', client: 5 },
    { location: '중앙도서관-2F-201H-0033-121', client: 4 },
    { location: '중앙도서관-2F-201H-0035-121', client: 6 },
    { location: '중앙도서관-5F-503H-0096-121', client: 0 },
    { location: '중앙도서관-2F-201H-0034-121', client: 1 },
    { location: '중앙도서관-5F-503H-0097-121', client: 0 },
    { location: '중앙도서관-5F-503H-0098-121', client: 1 },
    { location: '중앙도서관-5F-503H-0099-121', client: 0 },
    { location: '중앙도서관-2F-206H-0046-121', client: 5 },
    { location: '중앙도서관-2F-207H-0057-121', client: 34 },
    { location: '중앙도서관-3F-306H-0065-121', client: 2 },
    { location: '중앙도서관-3F-306H-0066-121', client: 0 },
    { location: '중앙도서관-2F-207H-0061-121', client: 1 },
    { location: '중앙도서관-2F-207H-0050-121', client: 13 },
    { location: '중앙도서관-2F-201H-0040-121', client: 5 },
    { location: '중앙도서관-2F-207H-0060-121', client: 23 },
    { location: '중앙도서관-1F-105H-0016-121', client: 6 },
    { location: '융합센터_북-1F-0105-121', client: 0 },
    { location: '융합센터_북-2F-0108-121', client: 0 },
    { location: '융합센터_북-2F-0107-121', client: 0 },
    { location: '융합센터_북-3F-0109-121', client: 0 },
    { location: '융합센터_북-3F-0110-121', client: 0 },
    { location: '융합센터_북-1F-0106-121', client: 0 },
    { location: '융합센터_북-1F-0104-121', client: 0 },
    { location: '융합센터_남-1F-0112-121', client: 0 },
    { location: '융합센터_남-1F-0111-121', client: 0 },
    { location: '융합센터_남-1F-0113-121', client: 0 },
    { location: '융합센터_남-1F-0114-121', client: 0 },
    { location: '융합센터_남-2F-0118-121', client: 0 },
    { location: '융합센터_남-2F-0117-121', client: 0 },
    { location: '융합센터_남-2F-0116-121', client: 0 },
    { location: '융합센터_남-2F-0115-121', client: 0 },
    { location: '융합센터_남-3F-0122-121', client: 0 },
    { location: '융합센터_남-3F-0121-121', client: 0 },
    { location: '융합센터_남-3F-0120-121', client: 0 },
    { location: '융합센터_남-3F-0119-121', client: 0 },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원2F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원3F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원2F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원1F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원2F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원3F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원1F', client: '4' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원1F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원2F', client: '2' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원3F', client: '1' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원2F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원3F', client: '0' },
    { location: 'Chungnam National University > 정보통신원 > 정보통신원1F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '3' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '2' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '7' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '3' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '3' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 3F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '8' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '5' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '6' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '2' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 2F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '2' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '0' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '0' },
    { location: 'Chungnam National University > 경상대별관 > KyungS_D(N)_3F', client: '2' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '1' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 4F', client: '2' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '7' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '5' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '7' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '2' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '5' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '3' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 1F', client: '0' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 4F', client: '1' },
    { location: 'Chungnam National University > 약학대,자연대1호관 > 약학대,자연대1호 2F', client: '5' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 3F', client: '3' },
    { location: 'Chungnam National University > 공대2호 > 공대2호 1F', client: '5' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 1F', client: '1' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 1F', client: '4' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 1F', client: '1' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 4F', client: '0' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 2F', client: '6' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 3F', client: '2' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 3F', client: '0' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 1F', client: '0' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 2F', client: '0' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 4F', client: '2' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 1F', client: '1' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 2F', client: '0' },
    { location: 'Chungnam National University > 공대1호 > 공대1호 2F', client: '0' },
  ],
};
