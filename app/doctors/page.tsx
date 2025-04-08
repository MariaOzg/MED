import Link from 'next/link';

// Пример данных врачей
const doctors = [
  {
    id: 1,
    name: 'Иванова Елена Петровна',
    specialty: 'Терапевт',
    photo: '/images/doctor-1.jpg',
    experience: '15 лет',
    education: 'Московский государственный медицинский университет им. И.М. Сеченова',
    achievements: 'Кандидат медицинских наук, автор научных публикаций по внутренним болезням',
    description: 'Специализируется на диагностике и лечении заболеваний внутренних органов. Постоянно совершенствует свои знания, участвуя в медицинских конференциях и семинарах.',
  },
  {
    id: 2,
    name: 'Петров Андрей Сергеевич',
    specialty: 'Кардиолог',
    photo: '/images/doctor-2.jpg',
    experience: '20 лет',
    education: 'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
    achievements: 'Кандидат медицинских наук, член Российского кардиологического общества',
    description: 'Специализируется на диагностике и лечении заболеваний сердечно-сосудистой системы. Владеет современными методами диагностики и лечения сердечных заболеваний.',
  },
  {
    id: 3,
    name: 'Сидорова Анна Викторовна',
    specialty: 'Невролог',
    photo: '/images/doctor-3.jpg',
    experience: '12 лет',
    education: 'Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова',
    achievements: 'Член Российского общества неврологов, участник международных конференций',
    description: 'Специализируется на диагностике и лечении заболеваний нервной системы. Применяет комплексный подход к лечению, включающий медикаментозную терапию и немедикаментозные методы.',
  },
  {
    id: 4,
    name: 'Козлов Дмитрий Александрович',
    specialty: 'Хирург',
    photo: '/images/doctor-4.jpg',
    experience: '18 лет',
    education: 'Московский государственный медицинский университет им. И.М. Сеченова',
    achievements: 'Доктор медицинских наук, автор научных работ по малоинвазивной хирургии',
    description: 'Специализируется на общей и малоинвазивной хирургии. Владеет современными хирургическими техниками, позволяющими минимизировать травматичность операций.',
  },
  {
    id: 5,
    name: 'Новикова Мария Алексеевна',
    specialty: 'Эндокринолог',
    photo: '/images/doctor-5.jpg',
    experience: '10 лет',
    education: 'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова',
    achievements: 'Член Российской ассоциации эндокринологов',
    description: 'Специализируется на диагностике и лечении заболеваний эндокринной системы. Особое внимание уделяет лечению сахарного диабета и заболеваний щитовидной железы.',
  },
  {
    id: 6,
    name: 'Морозов Игорь Владимирович',
    specialty: 'Офтальмолог',
    photo: '/images/doctor-6.jpg',
    experience: '16 лет',
    education: 'Московский государственный медико-стоматологический университет',
    achievements: 'Кандидат медицинских наук, автор методик лечения заболеваний сетчатки',
    description: 'Специализируется на диагностике и лечении заболеваний органов зрения. Владеет современными методиками диагностики и лечения глазных болезней.',
  },
];

export default function Doctors() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Наши специалисты</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Квалифицированные врачи с многолетним опытом работы
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="overflow-hidden bg-white rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative h-64 bg-gray-200">
              {/* В реальном проекте здесь будет изображение врача */}
              <div className="flex items-center justify-center h-full text-gray-400">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                <span className="px-3 py-1 text-sm font-medium text-primary-800 bg-primary-100 rounded-full">
                  {doctor.specialty}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Опыт работы: {doctor.experience}</span>
                </div>
                
                <div className="flex items-start mb-2">
                  <svg className="w-5 h-5 mt-1 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-700">Образование: {doctor.education}</span>
                </div>
                
                <div className="flex items-start mb-4">
                  <svg className="w-5 h-5 mt-1 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700">{doctor.achievements}</span>
                </div>
              </div>
              
              <p className="mb-6 text-gray-600">{doctor.description}</p>
              
              <div className="flex space-x-3">
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="flex-1 px-4 py-2 text-center text-primary-600 transition-colors border border-primary-600 rounded-md hover:bg-primary-50"
                >
                  Подробнее
                </Link>
                <Link
                  href={`/appointment/${doctor.id}`}
                  className="flex-1 px-4 py-2 text-center text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
                >
                  Записаться
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-8 mt-12 text-center bg-gray-50 rounded-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Не нашли нужного специалиста?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
          Свяжитесь с нами, и мы поможем подобрать подходящего врача для решения вашей проблемы.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
        >
          Связаться с нами
        </Link>
      </div>
    </div>
  );
} 