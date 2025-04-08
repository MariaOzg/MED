import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-6xl px-4 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl md:text-6xl">
          Медицинская клиника
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
          Удобная запись на прием, просмотр расписания врачей и отслеживание истории лечения
        </p>
        
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          <div className="p-8 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-primary-600">Запись на прием</h2>
            <p className="mb-4 text-gray-600">Выберите удобное время для посещения специалиста</p>
            <Link 
              href="/appointment" 
              className="inline-block px-6 py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Записаться
            </Link>
          </div>
          
          <div className="p-8 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-primary-600">Расписание врачей</h2>
            <p className="mb-4 text-gray-600">Посмотрите актуальное расписание приема специалистов</p>
            <Link 
              href="/schedule" 
              className="inline-block px-6 py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Расписание
            </Link>
          </div>
          
          <div className="p-8 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-primary-600">История лечения</h2>
            <p className="mb-4 text-gray-600">Отслеживайте историю посещений и план лечения</p>
            <Link 
              href="/history" 
              className="inline-block px-6 py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              История
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <Link 
            href="/login" 
            className="inline-block px-8 py-3 mx-2 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
          >
            Войти
          </Link>
          <Link 
            href="/register" 
            className="inline-block px-8 py-3 mx-2 font-medium transition-colors border rounded-lg text-primary-600 border-primary-600 hover:bg-primary-50"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
} 