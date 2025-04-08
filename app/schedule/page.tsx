import Link from 'next/link';

// Пример данных врачей и расписаний
const doctors = [
  {
    id: 1,
    name: 'Иванова Елена Петровна',
    specialty: 'Терапевт',
    photo: '/images/doctor-1.jpg',
    description: 'Опыт работы 15 лет. Специализация на лечении заболеваний внутренних органов.',
    schedule: [
      { day: 'Понедельник', time: '09:00 - 17:00' },
      { day: 'Среда', time: '09:00 - 17:00' },
      { day: 'Пятница', time: '09:00 - 15:00' },
    ],
  },
  {
    id: 2,
    name: 'Петров Андрей Сергеевич',
    specialty: 'Кардиолог',
    photo: '/images/doctor-2.jpg',
    description: 'Опыт работы 20 лет. Кандидат медицинских наук. Специализация на лечении сердечно-сосудистых заболеваний.',
    schedule: [
      { day: 'Вторник', time: '10:00 - 18:00' },
      { day: 'Четверг', time: '10:00 - 18:00' },
      { day: 'Суббота', time: '10:00 - 14:00' },
    ],
  },
  {
    id: 3,
    name: 'Сидорова Анна Викторовна',
    specialty: 'Невролог',
    photo: '/images/doctor-3.jpg',
    description: 'Опыт работы 12 лет. Специализация на лечении заболеваний нервной системы.',
    schedule: [
      { day: 'Понедельник', time: '10:00 - 18:00' },
      { day: 'Четверг', time: '10:00 - 18:00' },
      { day: 'Пятница', time: '10:00 - 16:00' },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Расписание врачей</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Ознакомьтесь с расписанием наших специалистов и запишитесь на прием в удобное для вас время
        </p>
      </div>
      
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative h-48 bg-gray-200">
              {/* В реальном проекте здесь будет изображение врача */}
              <div className="flex items-center justify-center h-full text-gray-400">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="mb-4 text-lg font-medium text-primary-600">{doctor.specialty}</p>
              <p className="mb-6 text-gray-600">{doctor.description}</p>
              
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium text-gray-800">График работы:</h3>
                <ul className="space-y-2">
                  {doctor.schedule.map((item, index) => (
                    <li key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={`/appointment/${doctor.id}`}
                className="block w-full py-3 text-center text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
              >
                Записаться на прием
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 