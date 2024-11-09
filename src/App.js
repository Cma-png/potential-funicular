import React, { useState } from 'react';
import { Home, Activity, Utensils, User } from 'lucide-react';
import './index.css';


const Dashboard = ({ stats }) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Workouts</h2>
        <p className="text-3xl">{stats.workoutsThisWeek}</p>
        <p className="text-gray-500">This Week</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Calories Burned</h2>
        <p className="text-3xl">{stats.caloriesBurned}</p>
        <p className="text-gray-500">This Week</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Meals Tracked</h2>
        <p className="text-3xl">{stats.mealsTracked}</p>
        <p className="text-gray-500">This Week</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Calories Consumed</h2>
        <p className="text-3xl">{stats.caloriesConsumed}</p>
        <p className="text-gray-500">This Week</p>
      </div>
    </div>
  </div>
);

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    type: '',
    duration: '',
    caloriesBurned: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, newWorkout]);
    setNewWorkout({ type: '', duration: '', caloriesBurned: '' });
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Add Workout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Workout Type"
            value={newWorkout.type}
            onChange={(e) => setNewWorkout({...newWorkout, type: e.target.value})}
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Duration (minutes)"
            type="number"
            value={newWorkout.duration}
            onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})}
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Calories Burned"
            type="number"
            value={newWorkout.caloriesBurned}
            onChange={(e) => setNewWorkout({...newWorkout, caloriesBurned: e.target.value})}
          />
          <button className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600">
            Add Workout
          </button>
        </form>
      </div>

      <h2 className="text-xl font-bold mb-4">Recent Workouts</h2>
      <div className="space-y-2">
        {workouts.map((workout, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">{workout.type}</h3>
            <p className="text-gray-500">{workout.duration} minutes</p>
            <p className="text-gray-500">{workout.caloriesBurned} calories</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({
    mealType: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeals([...meals, newMeal]);
    setNewMeal({ mealType: '', calories: '', protein: '', carbs: '', fat: '' });
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Add Meal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Meal Type"
            value={newMeal.mealType}
            onChange={(e) => setNewMeal({...newMeal, mealType: e.target.value})}
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Calories"
            type="number"
            value={newMeal.calories}
            onChange={(e) => setNewMeal({...newMeal, calories: e.target.value})}
          />
          <div className="grid grid-cols-3 gap-2">
            <input
              className="border border-gray-300 rounded-lg p-2"
              placeholder="Protein (g)"
              type="number"
              value={newMeal.protein}
              onChange={(e) => setNewMeal({...newMeal, protein: e.target.value})}
            />
            <input
              className="border border-gray-300 rounded-lg p-2"
              placeholder="Carbs (g)"
              type="number"
              value={newMeal.carbs}
              onChange={(e) => setNewMeal({...newMeal, carbs: e.target.value})}
            />
            <input
              className="border border-gray-300 rounded-lg p-2"
              placeholder="Fat (g)"
              type="number"
              value={newMeal.fat}
              onChange={(e) => setNewMeal({...newMeal, fat: e.target.value})}
            />
          </div>
          <button className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600">
            Add Meal
          </button>
        </form>
      </div>

      <h2 className="text-xl font-bold mb-4">Today's Meals</h2>
      <div className="space-y-2">
        {meals.map((meal, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">{meal.mealType}</h3>
            <p className="text-gray-500">{meal.calories} calories</p>
            <p className="text-gray-500">
              P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fat}g
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    goals: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
          />
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Goals"
            rows="4"
            value={profile.goals}
            onChange={(e) => setProfile({...profile, goals: e.target.value})}
          />
          <button className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats] = useState({
    workoutsThisWeek: 0,
    caloriesBurned: 0,
    mealsTracked: 0,
    caloriesConsumed: 0
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} />;
      case 'workouts':
        return <Workouts />;
      case 'meals':
        return <Meals />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard stats={stats} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto flex justify-around p-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center ${activeTab === 'dashboard' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <Home className="h-6 w-6" />
              <span className="text-sm">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('workouts')}
              className={`flex flex-col items-center ${activeTab === 'workouts' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <Activity className="h-6 w-6" />
              <span className="text-sm">Workouts</span>
            </button>
            <button
              onClick={() => setActiveTab('meals')}
              className={`flex flex-col items-center ${activeTab === 'meals' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <Utensils className="h-6 w-6" />
              <span className="text-sm">Meals</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <User className="h-6 w-6" />
              <span className="text-sm">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;