import Image from "next/image";

function MainDesc() {
  const itemClass: string =
    "carousel-item card w-60 bg-opacity-90 bg-white shadow-xl flex flex-col items-center";
  const itemTitleClass: string = "text-2xl font-medium py-3 text-slate-600";
  const itemContentClass: string = "flex-wrap p-3 text-slate-500";
  return (
    <div className="relative z-10 carousel carousel-center space-x-5 p-4">
      <div className={itemClass}>
        <h2 className={itemTitleClass}>Why lazy?</h2>
        <p className={itemContentClass}>
          Focused on simplified, low-effort approaches to options trading.
          <br />
          Aiming for minimal time and stress, emphasizing simplicity,
          consistency, risk management, and a less handy trading style.
        </p>
      </div>
      <div className={itemClass}>
        <h2 className={itemTitleClass}>Why Options?</h2>
        <p></p>
      </div>
      <div className={itemClass}>
        <h2 className={itemTitleClass}>Why Strategies?</h2>
        <p></p>
      </div>
      <div className={itemClass}>
        <h2 className={itemTitleClass}>Why Bots?</h2>
        <p></p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center relative w-full overflow-hidden z-0">
        <Image
          className="object-cover"
          alt="bot is trading options strategies"
          src="/main-bg.png"
          quality={100}
          fill
          style={{
            filter: "brightness(0.4) grayscale(0.5) contrast(0.6)",
          }}
        />
        <h1 className="relative z-10 text-5xl text-slate-100 drop-shadow-2xl font-black p-10">
          Lazy Options Strategies Bots
        </h1>
        <MainDesc />
      </div>
    </main>
  );
}
