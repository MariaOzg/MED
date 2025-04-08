import Link from 'next/link';

// Пример данных специализаций и врачей
const specialties = [
  { id: 1, name: 'Терапевт' },
  { id: 2, name: 'Кардиолог' },
  { id: 3, name: 'Невролог' },
  { id: 4, name: 'Офтальмолог' },
  { id: 5, name: 'Хирург' },
  { id: 6, name: 'Эндокринолог' },
  { id: 7, name: 'Дерматолог' },
  { id: 8, name: 'Гастроэнтеролог' },
];

export default function Appointment() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Запись на прием</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Выберите специализацию врача, удобную дату и время для консультации
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <form className="space-y-8">
            {/* Выбор специализации */}
            <div>
              <label className="block mb-4 text-lg font-medium text-gray-800">
                Выберите специализацию
              </label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {specialties.map((specialty) => (
                  <div key={specialty.id} className="relative">
                    <input
                      type="radio"
                      id={`specialty-${specialty.id}`}
                      name="specialty"
                      value={specialty.id}
                      className="absolute w-0 h-0 opacity-0"
                    />
                    <label
                      htmlFor={`specialty-${specialty.id}`}
                      className="block p-4 text-center transition-colors border rounded-md cursor-pointer hover:bg-primary-50 hover:border-primary-300 peer-checked:bg-primary-100 peer-checked:border-primary-500"
                    >
                      {specialty.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Выбор врача */}
            <div>
              <label htmlFor="doctor" className="block mb-2 text-lg font-medium text-gray-800">
                Выберите врача
              </label>
              <select
                id="doctor"
                name="doctor"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Выберите специализацию сначала</option>
                {/* Здесь будет динамический список врачей в зависимости от выбранной специализации */}
              </select>
            </div>
            
            {/* Выбор даты */}
            <div>
              <label htmlFor="appointmentDate" className="block mb-2 text-lg font-medium text-gray-800">
                Выберите дату
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            {/* Выбор времени */}
            <div>
              <label htmlFor="appointmentTime" className="block mb-2 text-lg font-medium text-gray-800">
                Выберите время
              </label>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                  <div key={time} className="relative">
                    <input
                      type="radio"
                      id={`time-${time}`}
                      name="appointmentTime"
                      value={time}
                      className="absolute w-0 h-0 opacity-0 peer"
                    />
                    <label
                      htmlFor={`time-${time}`}
                      className="block p-2 text-center transition-colors border rounded-md cursor-pointer hover:bg-primary-50 hover:border-primary-300 peer-checked:bg-primary-100 peer-checked:border-primary-500"
                    >
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Причина обращения */}
            <div>
              <label htmlFor="reason" className="block mb-2 text-lg font-medium text-gray-800">
                Причина обращения
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={4}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Опишите вашу проблему или симптомы"
              />
            </div>
            
            {/* Прикрепление файлов */}
            <div>
              <label htmlFor="files" className="block mb-2 text-lg font-medium text-gray-800">
                Прикрепить файлы (результаты анализов, заключения и т.д.)
              </label>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                className="block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Максимальный размер файла: 10MB. Поддерживаемые форматы: JPG, PNG, PDF.
              </p>
            </div>
            
            {/* Кнопка отправки */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-4 text-lg font-medium text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Записаться на прием
              </button>
            </div>
          </form>
        </div>
        
        <div className="p-6 mt-8 bg-gray-50 rounded-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Важная информация
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Приходите на прием за 15 минут до назначенного времени.
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Не забудьте взять с собой паспорт и полис ОМС.
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Отмена или перенос приема возможны не позднее, чем за 2 часа до назначенного времени.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 