export interface IRoom {
  name: string;
}

export interface ISensor {
  room: IRoom;
  name: string;
  value: number | string;
  unit: string;
  description: string;
}

export interface INotification {
  id: number;
  message: string;
  description: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
}
