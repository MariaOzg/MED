import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-50">
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Вход</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="example@mail.ru"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Пароль
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Забыли пароль?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Введите пароль"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="remember" className="block ml-2 text-sm text-gray-700">
              Запомнить меня
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-colors border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Войти
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Нет аккаунта?{' '}
            <Link href="/register" className="font-medium text-primary-600 hover:text-primary-500">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 