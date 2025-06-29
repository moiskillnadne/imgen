import { useState } from 'react';
import { Plus, LogOut, User, Image, Sparkles } from 'lucide-react';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router';
import { useUserStore } from '../store/userStore';

export const ProfilePage = () => {
  const router = useNavigate()
  const email = useUserStore((s) => s.email);
  const [generations] = useState(12);
  
  // Mock data for generated items
  const [generatedItems] = useState([
    { id: 1, type: 'pet-human', title: 'Pet as Human', image: '🐕‍🦺', color: 'bg-blue-100' },
    { id: 2, type: 'action-figure', title: 'Action Figure', image: '🦸', color: 'bg-purple-100' },
    { id: 3, type: 'easter-card', title: 'Easter Card', image: '🐰', color: 'bg-pink-100' },
    { id: 4, type: 'fantasy', title: 'Fantasy Art', image: '🧙', color: 'bg-green-100' },
    { id: 5, type: 'portrait', title: 'Portrait', image: '👤', color: 'bg-yellow-100' },
  ]);

  const handleSignOut = async() => {
    await signOut()
  };

  const handleNewGeneration = () => {
    router('/generation')
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 overflow-y-auto">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Profile, <span className="text-pink-500">{email}</span>
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <User className="w-4 h-4" />
              You are logged in as {email}
            </p>
          </div>
          
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:text-red-500 border border-gray-200"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span className="text-gray-700 font-medium">
              Generations: <span className="text-pink-500 font-bold">{generations}</span>
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add New Generation Button */}
          <div
            onClick={handleNewGeneration}
            className="aspect-square bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-dashed border-pink-200 hover:border-pink-400 flex flex-col items-center justify-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 font-medium text-center px-4">
              Create New Generation
            </p>
            <p className="text-gray-400 text-sm text-center px-4 mt-1">
              Start your creative journey
            </p>
          </div>

          {generatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => console.log('item')}
              className="aspect-square bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="h-full flex flex-col">
                {/* Image Area */}
                <div className={`flex-1 ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                  <div className="text-6xl">
                    {item.image}
                  </div>
                </div>
                
                {/* Info Area */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Image className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">Generated</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Placeholders */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="aspect-square bg-white rounded-3xl shadow-lg border-2 border-gray-100 flex flex-col items-center justify-center opacity-50"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm text-center px-4">
                Coming Soon
              </p>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            New themes and features coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};
