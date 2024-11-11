export default function PlayOnYourMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-svh">
      <img
        src="/images/coin.png"
        alt="logo" />
      <p className="text-2xl font-semibold uppercase">Play Froogz on your mobile!</p>
      <img
        src="/images/qrcode.png"
        alt="qrcode"
        className="object-contain max-w-xs rounded-xl"
      />
      <a href="https://t.me/FroogsBot?startapp" className="text-2xl font-semibold">
        @FroogsBot
      </a>
    </div>
  );
}
