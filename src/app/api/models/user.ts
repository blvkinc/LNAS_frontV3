/* tslint:disable */
/* eslint-disable */
import { Employee } from './employee';
export interface User {
  address?: string;
  dateCreated?: string;
  email?: string;
  employee?: Employee;
  firstName?: string;
  id?: number;
  isApproved?: boolean;
  isBanned?: boolean;
  isEmailVerified?: boolean;
  isMfaEnabled?: boolean;
  isPhoneVerified?: boolean;
  isTempPassword?: boolean;
  isTotpVerified?: boolean;
  lastName?: string;
  lastUpdated?: string;
  mfaSecret?: string;
  password?: string;
  phone?: string;
  role?: 'ADMIN' | 'MODERATOR' | 'SUPER_ADMIN' | 'EMPLOYEE' | 'CUSTOMER' | 'SUPPLIER';
  username?: string;
}
