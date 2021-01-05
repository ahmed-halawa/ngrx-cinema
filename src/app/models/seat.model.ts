export interface ISeat {
  id: string;
  order: number;
  status: 'vip' | 'standard' | 'economical';
  reserved: boolean;
  position: 'left' | 'right' | 'center';
}
