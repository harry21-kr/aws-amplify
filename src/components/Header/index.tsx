import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-screen h-20 flex items-center justify-center border-b bg-black z-[9999]">
      <div className="max-w-[1224px] w-full flex justify-between">
        <h1 className="font-bold text-2xl animate-pulse">
          AWS Amplify 테스트 사이트입니다.
        </h1>
        <div className="flex gap-8 items-center">
          <Link
            href=""
            className="font-semibold text-lg hover:opacity-70 active:opacity-90 transition-opacity"
          >
            SSG 페이지
          </Link>
          <Link
            href=""
            className="font-semibold text-lg hover:opacity-70 active:opacity-90 transition-opacity"
          >
            SSR 페이지
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
