import { useState } from 'react';
import Link from 'next/link';

// Пример данных истории лечения
const visits = [
  {
    id: 1,
    date: '15.03.2025',
    doctor: 'Иванова Е.П.',
    specialty: 'Терапевт',
    diagnosis: 'ОРВИ',
    notes: 'Острое респираторное заболевание, сопровождающееся повышением температуры до 38.5°C, болью в горле и общей слабостью.',
    recommendations: 'Постельный режим, обильное питье, симптоматическое лечение.',
    planned: [
      { id: 1, name: 'Общий анализ крови', status: 'completed' },
      { id: 2, name: 'Мазок из зева на флору', status: 'completed' },
      { id: 3, name: 'Контрольный осмотр через 5 дней', status: 'pending' },
    ],
    actual: [
      { id: 1, name: 'Общий анализ крови', date: '15.03.2025' },
      { id: 2, name: 'Мазок из зева на флору', date: '15.03.2025' },
    ],
  },
  {
    id: 2,
    date: '10.02.2025',
    doctor: 'Петров А.С.',
    specialty: 'Кардиолог',
    diagnosis: 'Артериальная гипертензия I степени',
    notes: 'При осмотре артериальное давление 145/90 мм рт. ст., пульс 78 уд/мин. Жалобы на периодические головные боли.',
    recommendations: 'Диета с ограничением соли и животных жиров, контроль артериального давления, регулярные физические нагрузки умеренной интенсивности.',
    planned: [
      { id: 1, name: 'ЭКГ', status: 'completed' },
      { id: 2, name: 'Эхокардиография', status: 'completed' },
      { id: 3, name: 'Суточное мониторирование АД', status: 'completed' },
      { id: 4, name: 'Контрольный осмотр через 1 месяц', status: 'cancelled' },
      { id: 5, name: 'Анализы крови на липидный профиль', status: 'completed' },
    ],
    actual: [
      { id: 1, name: 'ЭКГ', date: '10.02.2025' },
      { id: 2, name: 'Эхокардиография', date: '12.02.2025' },
      { id: 3, name: 'Суточное мониторирование АД', date: '15.02.2025' },
      { id: 5, name: 'Анализы крови на липидный профиль', date: '10.02.2025' },
    ],
  },
  {
    id: 3,
    date: '05.01.2025',
    doctor: 'Сидорова А.В.',
    specialty: 'Невролог',
    diagnosis: 'Остеохондроз поясничного отдела позвоночника',
    notes: 'Жалобы на боли в пояснице, усиливающиеся при физической нагрузке и длительном пребывании в положении сидя.',
    recommendations: 'Ограничение физических нагрузок, ношение поясничного корсета, курс массажа, лечебная физкультура.',
    planned: [
      { id: 1, name: 'МРТ поясничного отдела позвоночника', status: 'completed' },
      { id: 2, name: 'Курс массажа (10 сеансов)', status: 'completed' },
      { id: 3, name: 'Физиотерапия (15 сеансов)', status: 'partial' },
      { id: 4, name: 'Консультация физиотерапевта', status: 'completed' },
    ],
    actual: [
      { id: 1, name: 'МРТ поясничного отдела позвоночника', date: '07.01.2025' },
      { id: 2, name: 'Курс массажа (10 сеансов)', date: '10.01.2025 - 25.01.2025' },
      { id: 3, name: 'Физиотерапия (8 сеансов)', date: '12.01.2025 - 22.01.2025' },
      { id: 4, name: 'Консультация физиотерапевта', date: '08.01.2025' },
    ],
  },
];

export default function History() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">История лечения</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Ваша медицинская история, диагнозы, назначения и результаты лечения
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {visits.map((visit) => (
          <div key={visit.id} className="mb-10 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Прием {visit.date}
                </h2>
                <div className="flex items-center mt-2 space-x-2 sm:mt-0">
                  <span className="px-3 py-1 text-sm font-medium text-primary-800 bg-primary-100 rounded-full">
                    {visit.specialty}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                    {visit.doctor}
                  </span>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Диагноз</h3>
                  <p className="p-3 text-gray-700 bg-gray-50 rounded-md">{visit.diagnosis}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Рекомендации</h3>
                  <p className="p-3 text-gray-700 bg-gray-50 rounded-md">{visit.recommendations}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-medium text-gray-800">Примечания</h3>
                <p className="p-3 text-gray-700 bg-gray-50 rounded-md">{visit.notes}</p>
              </div>
            </div>
            
            <div className="p-6 border-b">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                План и фактические услуги
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="p-3 font-medium text-gray-700 border-b">Услуга</th>
                      <th className="p-3 font-medium text-gray-700 border-b">План</th>
                      <th className="p-3 font-medium text-gray-700 border-b">Факт</th>
                      <th className="p-3 font-medium text-gray-700 border-b">Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visit.planned.map((service) => {
                      const actualService = visit.actual.find(item => item.id === service.id);
                      
                      return (
                        <tr key={service.id} className="border-b">
                          <td className="p-3 text-gray-800">{service.name}</td>
                          <td className="p-3 text-gray-800">✓</td>
                          <td className="p-3 text-gray-800">
                            {actualService ? actualService.date : '—'}
                          </td>
                          <td className="p-3">
                            {service.status === 'completed' && (
                              <span className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                                Выполнено
                              </span>
                            )}
                            {service.status === 'pending' && (
                              <span className="px-2 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                                Ожидается
                              </span>
                            )}
                            {service.status === 'cancelled' && (
                              <span className="px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                                Отменено
                              </span>
                            )}
                            {service.status === 'partial' && (
                              <span className="px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                                Частично
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex justify-between p-6">
              <Link
                href={`/history/visit/${visit.id}`}
                className="px-4 py-2 text-sm font-medium transition-colors border rounded text-primary-600 border-primary-600 hover:bg-primary-50"
              >
                Подробнее
              </Link>
              
              <div className="space-x-2">
                <Link
                  href={`/history/print/${visit.id}`}
                  className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors border border-gray-300 rounded hover:bg-gray-50"
                >
                  Печать
                </Link>
                <Link
                  href={`/history/download/${visit.id}`}
                  className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors border border-gray-300 rounded hover:bg-gray-50"
                >
                  Скачать PDF
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-6 mt-8 text-center bg-gray-50 rounded-lg">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Не нашли нужную информацию?
          </h3>
          <p className="mb-6 text-gray-600">
            Возможно, ваша медицинская карта содержит записи, которые еще не были добавлены в электронную систему.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
} 