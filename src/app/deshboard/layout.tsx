"use client";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MeasureLayout(props: {
  children: React.ReactNode;
  mainsection: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const loginSegments = useSelectedLayoutSegment("mainsection");
  console.log("loginSegments", loginSegments);
  return (
    <>
      <div>{props.children}</div>
      <div>{props.mainsection}</div>
      <div>{props.sidebar}</div>
    </>
  );
}