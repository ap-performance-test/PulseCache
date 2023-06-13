import 'express-async-errors';
import { Router } from 'express';
import config from '../../../config.json';
import axios, { type AxiosResponse } from 'axios';
import { ApiPulseCntData, apiData } from '../../apiData/peopleCntData';

const router: Router = Router();

// 반환할 데이터 타입
interface IApiResponse {
  outblock: Array<{ MSG: number }>;
  RESULT: {
    [key: string]: number;
  };
}
const BUILDING_INITIAL_STATE = {
  // E1 ~ E12
  국제언어교육원: 0,
  정심화국제문화회관: 0,
  자연사박물관: 0,
  공대2호: 0,
  공대3호: 0,
  공대4호: 0,
  인재개발원: 0,
  경상대: 0,
  경상대별관: 0,
  대학본부: 0,
  대학본부별관: 0,
  농업생명공학관: 0,
  상록회관: 0,
  농대1호: 0,
  농대2호: 0,
  농대3호: 0,
  환경소재공학과공장동: 0,
  농업과학기술센터: 0,
  // N1 ~ N15
  도서관: 0,
  정보화본부: 0,
  학군단: 0,
  골프연습장: 0,
  학생생활관: 0,
  이인구인재관: 0,
  제3후생관: 0,
  박물관: 0,
  예술대미술관: 0,
  예술대디자인관: 0,
  예술대음악1호관: 0,
  예술대음악2호관: 0,
  예술대오케스트라홀: 0,
  생명시스템과학대: 0,
  법학전문대학원: 0,
  수의과대: 0,
  동물병원: 0,
  생활과학대: 0,
  실내체육관: 0,
  // W1 ~ W15
  산학연: 0,
  공대5호: 20,
  공대1호: 0,
  자연대1호: 0,
  자연대2호: 0,
  약학대: 0,
  인문대: 0,
  한누리회관: 0,
  제1후생관: 0,
  공동실험실습관: 0,
  백마교양교육관: 0,
  자연대기초1호관: 0,
  자연대기초2호관: 0,
  사회과학대: 0,
  사회과학대강의동: 0,
  약초원관리동: 0,
  노천극장: 0,
  사범대: 0,
};

const calculateResultCount = (result: { [key: string]: number }) => {
  return Object.keys(result).length;
};

const PEOPLE_CNT_IN_BUILDING: IApiResponse = {
  outblock: [{ MSG: calculateResultCount(BUILDING_INITIAL_STATE) }],
  RESULT: BUILDING_INITIAL_STATE,
};
const setPulseCnt = (peopleCnt: ApiPulseCntData) => {
  let updatedPeopleCnt = { ...PEOPLE_CNT_IN_BUILDING.RESULT };
  peopleCnt.RESULT.forEach(({ location, client }) => {
    Object.entries(PEOPLE_CNT_IN_BUILDING.RESULT).forEach(([key]) => {
      if (location.includes(key)) {
        updatedPeopleCnt[key] = updatedPeopleCnt[key] ? Number(updatedPeopleCnt[key]) + Number(client) : Number(client);
      }
    });
  });
  PEOPLE_CNT_IN_BUILDING.RESULT = updatedPeopleCnt;
};

router.get('/pulse_cnt', async (req, res) => {
  try {
    // const data = await fetchJsonFromUrl(config.API_SERVER);
    PEOPLE_CNT_IN_BUILDING.RESULT = { ...BUILDING_INITIAL_STATE };
    setPulseCnt(apiData);
    res.status(200).send(PEOPLE_CNT_IN_BUILDING);
  } catch (error) {
    res.status(500).send({
      error: 'Error fetching data',
    });
  }
});

export default router;
