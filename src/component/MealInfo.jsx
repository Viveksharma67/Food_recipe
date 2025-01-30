import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [meal, setMeal] = useState(null);

  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await response.json();
      setMeal(jsonData.meals ? jsonData.meals[0] : null);
    } catch (error) {
      console.error("Error fetching meal data:", error);
    }
  };

  useEffect(() => {
    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Meal Information</h2>
      {meal ? (
        <div style={styles.mealContainer}>
          <h3 style={styles.mealName}>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} style={styles.image} />
          <p style={styles.instructions}>{meal.strInstructions}</p>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  mealContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  mealName: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    margin: "10px 0",
  },
  instructions: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  loading: {
    fontSize: "18px",
    fontStyle: "italic",
  },
};

export default MealInfo;
