import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            МедКлиника
          </Link>

          {/* Мобильная кнопка меню */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/doctors" className="text-gray-600 hover:text-primary-600">
              Врачи
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary-600">
              Услуги
            </Link>
            <Link href="/appointment" className="text-gray-600 hover:text-primary-600">
              Запись на прием
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              О нас
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600">
              Контакты
            </Link>
          </nav>

          {/* Кнопки авторизации для десктопа */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-primary-600 transition-colors border border-primary-600 rounded hover:bg-primary-50"
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white transition-colors rounded bg-primary-600 hover:bg-primary-700"
            >
              Регистрация
            </Link>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/doctors" className="text-gray-600 hover:text-primary-600">
                Врачи
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600">
                Услуги
              </Link>
              <Link href="/appointment" className="text-gray-600 hover:text-primary-600">
                Запись на прием
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600">
                О нас
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600">
                Контакты
              </Link>
              <div className="flex flex-col pt-4 mt-4 space-y-2 border-t">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-center text-primary-600 transition-colors border border-primary-600 rounded hover:bg-primary-50"
                >
                  Войти
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-center text-white transition-colors rounded bg-primary-600 hover:bg-primary-700"
                >
                  Регистрация
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 