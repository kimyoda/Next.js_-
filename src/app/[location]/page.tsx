import HomeButton from "../components/HomeButton";
import { getForecast } from "../utils/getForecast";

// 수정된 Props 타입
type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name?: string;
  };
};

export async function generateMetadata({ searchParams }: Props) {
  const name = searchParams?.name || "Unknown";

  return {
    title: `날씨 앱 - ${name}`,
    description: `${name} 날씨를 알려드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  // 동기적으로 params와 searchParams 처리
  const name = searchParams?.name || "Unknown";
  const location = params?.location;

  // location이 없는 경우 에러 처리
  if (!location) {
    throw new Error("Location is required!");
  }

  // API 호출
  const res = await getForecast(location);
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
