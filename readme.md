# cache server for netspeedtest server

/pulse_cnt 로 공개데이터 api에서 받아온 데이터를
합산처리해서 반환함

## Getting Started

1. How to clone the repository

```
git clone https://github.com/ap-performance-test/PulseCache.git
```

2. How to run the server locally using Docker

```
docker build . -t pulse_cache
docker run -p 3011:3011 pulse_cache
```

api 접근을 위해서 .env 파일 생성후에 API_SERVER을 API키와 함께 정의필요
