import Image from 'next/image';

export default function Home() {
  return (
    <section className='flex justify-center items-center border'>

      <div className='bg-white items-center justify-center flex md-mx-auto lg:max-w-md md:max-w-md md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
        <div className='w-full h-100'>
          <h1 className='text-2xl  font-semibold '> SDEngage</h1>
          <h2 className='text-xl md:text-2xl font-bold leading-tight mt-12'>Inicia sesión en tu cuenta</h2>

          <form action='#' method='POST' className='mt-6'>
            <div>
              <label className='block text-gray-700'>Correo Electrónico</label>
              <input type='email' id='email' placeholder='Ingresa Correo Electrónico' className='w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white' autoComplete='email' autoFocus required /> 
            </div>

            <div className='mt-4'>
              <label className='block text-gray-700'>Contraseña</label>
              <input type='password' id='password' minLength={6} placeholder='Ingresa tu contraseña' className='w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white' autoComplete='current-password' autoFocus required /> 
            </div>
            
            <div className='text-right mt-2'>
              <a href='#' type='submit' className='text-sm font-semibold text-gray-700 hover:text-[#14A647] focus:text-blue-700 focus:outline-none'>¿Olvidaste la contraseña?</a>
            </div>

            <button type='submit' className='w-full block bg-[#14A647]  hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none'>Iniciar sesión</button>

            <p className='mt-8'>
              ¿Necesitas una cuenta?
              <a href='#' className='text-[#14A647] hover:text-[#0A732F] font-semibold'> Crear una cuenta</a>
            </p>

            <p className='text-sm text-gray-500 mt-12'>
              &copy; 2023 SDEngage inicio de sesión
            </p>

          </form>

        </div>
      </div>

    </section>
  );
}
