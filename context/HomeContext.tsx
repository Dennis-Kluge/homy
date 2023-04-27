import {PropsWithChildren, createContext, useState} from 'react';
import {INotification, IRoom, ISensor} from '../types';

interface IHomeContext {
  sensors: ISensor[];
  notifications: INotification[];
  resetNotification: () => void;
}

const defaultState: IHomeContext = {
  sensors: [],
  notifications: [],
  resetNotification: () => {},
};

const HomeContext = createContext<IHomeContext>(defaultState);

export const HomeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([
    {
      id: 1,
      message: 'Temprature too high in basement',
      severity: 'HIGH',
      description: 'long text',
    },
    {
      id: 2,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 3,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 4,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 5,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 6,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 7,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 8,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 9,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 10,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 11,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
    {
      id: 12,
      message: 'Finsihed watering the garen',
      severity: 'LOW',
      description: 'long text',
    },
  ]);

  const livingRoom: IRoom = {name: 'Living Room'};
  const basement: IRoom = {name: 'Basement'};
  const masterBathroom: IRoom = {name: 'Master Bathroom'};

  const sensors: ISensor[] = [
    {
      room: livingRoom,
      name: 'Front Window',
      value: 'Open',
      unit: '',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
    {
      room: livingRoom,
      name: 'Temprature',
      value: 19.8,
      unit: '°C',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
    {
      room: livingRoom,
      name: 'Humidity',
      value: 57,
      unit: '%',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
    {
      room: masterBathroom,
      name: 'Temprature',
      value: 22.1,
      unit: '°C',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
    {
      room: livingRoom,
      name: 'Humidity',
      value: 83,
      unit: '%',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
    {
      room: basement,
      name: 'Temprature',
      value: 13.9,
      unit: '°C',
      description:
        'This sensor is located in a very beautiful place and always delivers the freshest information',
    },
  ];

  const resetNotification = () => setNotifications([]);

  return (
    <HomeContext.Provider value={{notifications, sensors, resetNotification}}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
