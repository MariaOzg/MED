import Link from 'next/link';

// Пример данных пользователя
const userData = {
  id: '1',
  fullName: 'Иванов Иван Иванович',
  email: 'ivanov@example.com',
  phone: '+7 (901) 123-45-67',
  dateOfBirth: '01.01.1980',
  address: 'г. Москва, ул. Примерная, д. 10, кв. 5',
  insuranceNumber: '1234567890123456',
  insuranceCompany: 'СК "Здоровье"',
  bloodType: 'A (II) Rh+',
  chronicDiseases: [
    'Гипертоническая болезнь I степени',
  ],
  allergies: [
    'Пенициллин',
    'Арахис',
  ],
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  // В реальном приложении данные пользователя будут загружаться на основе ID
  
  return (
    <div className="space-y-8">
      <div className="pb-6 mb-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Личный кабинет</h1>
        <p className="mt-2 text-gray-600">
          Здесь вы можете просматривать и редактировать свои личные данные
        </p>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Личные данные</h2>
          <Link
            href={`/profile/${params.id}/edit`}
            className="px-4 py-2 text-sm font-medium text-primary-600 transition-colors bg-white border border-primary-600 rounded-md hover:bg-primary-50"
          >
            Редактировать
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">ФИО</h3>
              <p className="text-gray-800">{userData.fullName}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Дата рождения</h3>
              <p className="text-gray-800">{userData.dateOfBirth}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Email</h3>
              <p className="text-gray-800">{userData.email}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Телефон</h3>
              <p className="text-gray-800">{userData.phone}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Адрес</h3>
              <p className="text-gray-800">{userData.address}</p>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Номер полиса ОМС</h3>
              <p className="text-gray-800">{userData.insuranceNumber}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Страховая компания</h3>
              <p className="text-gray-800">{userData.insuranceCompany}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Группа крови</h3>
              <p className="text-gray-800">{userData.bloodType}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Хронические заболевания</h3>
              {userData.chronicDiseases.length > 0 ? (
                <ul className="pl-5 list-disc">
                  {userData.chronicDiseases.map((disease, index) => (
                    <li key={index} className="text-gray-800">{disease}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800">Не указаны</p>
              )}
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-medium text-gray-500">Аллергии</h3>
              {userData.allergies.length > 0 ? (
                <ul className="pl-5 list-disc">
                  {userData.allergies.map((allergy, index) => (
                    <li key={index} className="text-gray-800">{allergy}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800">Не указаны</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Безопасность аккаунта</h2>
          <Link
            href={`/profile/${params.id}/security`}
            className="px-4 py-2 text-sm font-medium text-primary-600 transition-colors bg-white border border-primary-600 rounded-md hover:bg-primary-50"
          >
            Изменить
          </Link>
        </div>
        
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Пароль</h3>
          <p className="text-gray-800">••••••••</p>
        </div>
        
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Двухфакторная аутентификация</h3>
          <p className="text-gray-800">Не активирована</p>
        </div>
        
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Последний вход</h3>
          <p className="text-gray-800">10.03.2025, 15:43</p>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Уведомления</h2>
          <Link
            href={`/profile/${params.id}/notifications/settings`}
            className="px-4 py-2 text-sm font-medium text-primary-600 transition-colors bg-white border border-primary-600 rounded-md hover:bg-primary-50"
          >
            Настроить
          </Link>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800">Email-уведомления</h3>
              <p className="text-sm text-gray-600">Получать уведомления о записях и результатах на почту</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition bg-gray-200 rounded-full">
              <input
                type="checkbox"
                className="absolute w-6 h-6 cursor-pointer opacity-0"
                id="toggle-email"
                defaultChecked
              />
              <label
                htmlFor="toggle-email"
                className="block w-full h-full rounded-full cursor-pointer"
              >
                <span className="absolute left-1 top-1 w-4 h-4 transition-all duration-300 ease-in-out transform bg-white rounded-full peer-checked:translate-x-6 peer-checked:bg-white" />
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800">SMS-уведомления</h3>
              <p className="text-sm text-gray-600">Получать уведомления о записях на телефон</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition bg-gray-200 rounded-full">
              <input
                type="checkbox"
                className="absolute w-6 h-6 cursor-pointer opacity-0"
                id="toggle-sms"
                defaultChecked
              />
              <label
                htmlFor="toggle-sms"
                className="block w-full h-full rounded-full cursor-pointer"
              >
                <span className="absolute left-1 top-1 w-4 h-4 transition-all duration-300 ease-in-out transform bg-white rounded-full peer-checked:translate-x-6 peer-checked:bg-white" />
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800">Напоминания о приеме</h3>
              <p className="text-sm text-gray-600">Получать напоминания за день до приема</p>
            </div>
            <div className="relative inline-block w-12 h-6 transition bg-gray-200 rounded-full">
              <input
                type="checkbox"
                className="absolute w-6 h-6 cursor-pointer opacity-0"
                id="toggle-reminder"
                defaultChecked
              />
              <label
                htmlFor="toggle-reminder"
                className="block w-full h-full rounded-full cursor-pointer"
              >
                <span className="absolute left-1 top-1 w-4 h-4 transition-all duration-300 ease-in-out transform bg-white rounded-full peer-checked:translate-x-6 peer-checked:bg-white" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 