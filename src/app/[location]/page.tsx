"use client";

import HomeButton from "../components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};

export default function Detail({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <HomeButton />
    </>
  );
}
