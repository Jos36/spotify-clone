import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-grow text-white">
      <header>
        <div>
          <img src={session?.user.image} alt="" />
        </div>
      </header>
      section
      <h1>center</h1>
    </div>
  );
}

export default Center;
