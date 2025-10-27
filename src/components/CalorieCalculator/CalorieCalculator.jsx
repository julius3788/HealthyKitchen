import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [foodName, setFoodName] = useState('');
  const [portion, setPortion] = useState('100g');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const searchFood = async () => {
    if (!foodName.trim()) {
      setError('Please enter a food name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Open Food Facts API
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(foodName)}&search_simple=1&action=process&json=1`
      );
      
      const data = await response.json();
      
      if (data.products && data.products.length > 0) {
        const product = data.products[0];
        const nutrition = product.nutriments;
        
        // Calculate based on portion
        const multiplier = getPortionMultiplier(portion);
        
        setResult({
          foodName: product.product_name || foodName,
          calories: Math.round((nutrition['energy-kcal'] || 0) * multiplier),
          protein: Math.round((nutrition.protein || 0) * multiplier),
          carbs: Math.round((nutrition.carbohydrates || 0) * multiplier),
          fat: Math.round((nutrition.fat || 0) * multiplier),
          brand: product.brands || 'Generic',
          image: product.image_url
        });
      } else {
        setError('Food not found in database');
      }
    } catch (err) {
      setError('Failed to fetch nutrition data');
    } finally {
      setLoading(false);
    }
  };

  const getPortionMultiplier = (portion) => {
    const multipliers = {
      '50g': 0.5,
      '100g': 1,
      '150g': 1.5,
      '200g': 2,
      '1 serving': 1
    };
    return multipliers[portion] || 1;
  };

  const getHealthFeedback = (calories, protein, carbs, fat) => {
    if (calories > 500) return 'High calorie meal - consider smaller portions';
    if (protein > 20) return 'Great protein source!';
    if (carbs > 50) return 'Carb-heavy - balance with protein';
    return 'Well-balanced meal choice!';
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        🍎 Nutrition Calculator
      </h2>

      {/* Food Search */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Food Name
          </label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="e.g., Apple, Chicken Breast, Rice..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
            onKeyPress={(e) => e.key === 'Enter' && searchFood()}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Portion Size
          </label>
          <select
            value={portion}
            onChange={(e) => setPortion(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="50g">50g</option>
            <option value="100g">100g</option>
            <option value="150g">150g</option>
            <option value="200g">200g</option>
            <option value="1 serving">1 serving</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={searchFood}
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50"
      >
        {loading ? '🔍 Searching...' : 'Calculate Nutrition'}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4 mb-4">
            {result.image && (
              <img 
                src={result.image} 
                alt={result.foodName}
                className="w-16 h-16 object-cover rounded-lg"
              />
            )}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {result.foodName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {result.brand} • {portion}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-primary">{result.calories}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Calories</p>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-primary">{result.protein}g</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Protein</p>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-primary">{result.carbs}g</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Carbs</p>
            </div>
            <div className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-primary">{result.fat}g</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Fat</p>
            </div>
          </div>

          {/* Health Feedback */}
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              💡 {getHealthFeedback(result.calories, result.protein, result.carbs, result.fat)}
            </p>
          </div>

          <button
            onClick={() => setResult(null)}
            className="w-full mt-4 text-gray-600 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-white"
          >
            Analyze another food
          </button>
        </div>
      )}

      {/* Tips */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-300">
          💡 <strong>Tips:</strong> Search for common foods like "banana", "chicken breast", 
          "brown rice" for best results. Database may not contain all local foods.
        </p>
      </div>
    </div>
  );
};

export default CalorieCalculator;