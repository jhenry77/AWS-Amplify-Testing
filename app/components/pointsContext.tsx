import React, { createContext, ReactNode, useState } from 'react';

// Create the context
export const UserPointsContext = React.createContext({
  userPoints: 0,
  updateUserPoints: (points: number) => {},
});

export const UserPointsProvider = ({ children }: { children: React.ReactNode }) => {
    const [userPoints, setUserPoints] = useState(0);
  
    const updateUserPoints = (points: number) => {
      setUserPoints(points);
    };
  
    return (
      <UserPointsContext.Provider value={{ userPoints, updateUserPoints }}>
        {children}
      </UserPointsContext.Provider>
    );
  };