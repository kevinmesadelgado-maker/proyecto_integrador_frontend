export default function Login() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#E8DFCC] font-serif">
      <div className="bg-[#CEC1A8] p-10 rounded-xl shadow-xl w-80 border border-[#B59E7D]">

        <h1 className="text-center text-[#584738] text-3xl mb-6">
          Login
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo"
            className="p-3 rounded-lg border border-[#AAA396] bg-[#F1EADA] text-[#584738] placeholder:text-[#AAA396]"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="p-3 rounded-lg border border-[#AAA396] bg-[#F1EADA] text-[#584738] placeholder:text-[#AAA396]"
          />

          <button
            className="mt-4 p-3 rounded-lg bg-[#B59E7D] text-white text-lg hover:bg-[#584738] transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
