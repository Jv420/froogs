export default function PlayOnYourMobile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 text-center bg-gray-100">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        <img
          src="/images/coin.png"
          alt="Game logo"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h1 className="mb-6 text-3xl font-bold text-gray-800 uppercase">
          Play Froogz on Your Mobile!
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Tap into the world of Froogz with our mobile app.
          <br />
          Scan the QR code below to get started!
        </p>
        <img
          src="/images/qrcode.png"
          alt="QR Code"
          className="object-contain w-48 h-48 mx-auto mb-8 shadow-md rounded-xl"
        />
        <a
          href="https://t.me/FroogsBot?startapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg font-semibold text-white transition duration-200 bg-green-600 rounded-md shadow-md hover:bg-green-700"
        >
          Launch @FroogsBot
        </a>
        <p className="mt-4 text-sm text-gray-500">
          *Available exclusively on Telegram.
        </p>
      </div>
    </div>
  );
}
