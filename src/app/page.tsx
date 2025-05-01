import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full">
      <Link
        className="font-semibold text-lg hover:opacity-70 active:opacity-90 transition-opacity"
        href="https://aws.amazon.com/ko/amplify/"
        target="_blank"
      >
        AWS Amplify 알아보기!
      </Link>
    </main>
  );
}
