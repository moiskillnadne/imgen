import { useState } from 'react';
import { Header } from './Header';

type GenerationType = 'pet-human' | 'action-figure' | 'easter-card'

const themes = [{
  title: 'ПИТОМЕЦ В ОБРАЗЕ ЧЕЛОВЕКА',
  type: 'pet-human'
}, {
  title: 'ВАША ЭКШН-ФИГУРКА',
  type: 'action-figure'
}, {
  title: 'ОТКРЫТКА НА ПАСХУ',
  type: 'easter-card'
}
]

const examples = {
  'pet-human': './pet-human-example.png',
  'action-figure': './action-toy-example.png',
  'easter-card': './easter-gift-example.png'
}

export const GenerationPage = () => {
  const [selectedTheme, setSelectedTheme] = useState<GenerationType>('pet-human');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[90vh]">
        <Header />

        <div className="p-10">
          <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
            <div className="flex flex-col gap-5">
              {themes.map((theme, index) => (
                <button
                  key={theme.type}
                  onClick={() => setSelectedTheme(theme.type as GenerationType)}
                  className={`
                    px-8 py-5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1
                    ${selectedTheme === theme.type 
                      ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40' 
                      : 'bg-white text-gray-600 border-2 border-gray-200 shadow-md hover:border-pink-500 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-500/20'
                    }
                  `}
                >
                  {theme.title}
                </button>
              ))}
              
              <div className="text-center text-gray-400 italic mt-5 text-sm">
                СКОРО ПОЯВЯТСЯ НОВЫЕ ТЕМЫ...
              </div>
            </div>

            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-10 mt-5 text-center cursor-default"
            >
              <div className="text-gray-400 italic mt-5 text-sm">
                ОРИГИНАЛ | РЕЗУЛЬТАТ
              </div>
              <img 
                src={examples[selectedTheme]} 
                alt="Uploaded" 
                className="max-w-full max-h-70 mx-auto rounded-lg"
              />

              <div className="text-gray-400 italic mt-5 text-sm">
                *Пример того как работает
              </div>

              <button
                  onClick={() => console.log('generate')}
                  className={`
                    mt-5 px-8 py-5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1
                    bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40
                  `}
                >
                  СГЕНЕРИРОВАТЬ ИЗОБРАЖЕНИЕ
                </button>
            </div>
          </div>
        </div>

        <div className="text-center px-10 py-5 pb-10">
          <a 
            href="#" 
            className="text-pink-500 text-sm hover:border-b border-pink-500 transition-all duration-300"
          >
            УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
          </a>
        </div>
      </div>
    </div>
  );
};
