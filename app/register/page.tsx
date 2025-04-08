import Link from 'next/link';

export default function Register() {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-50">
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Регистрация</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
              ФИО
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Иванов Иван Иванович"
            />
          </div>
          
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
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          
          <div>
            <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-700">
              Дата рождения
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Минимум 8 символов"
            />
          </div>
          
          <div>
            <label htmlFor="passwordConfirm" className="block mb-2 text-sm font-medium text-gray-700">
              Подтверждение пароля
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Повторите пароль"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="terms" className="block ml-2 text-sm text-gray-700">
              Я согласен с <Link href="/terms" className="text-primary-600 hover:underline">условиями использования</Link> и <Link href="/privacy" className="text-primary-600 hover:underline">политикой конфиденциальности</Link>
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-colors border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Уже есть аккаунт?{' '}
            <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 