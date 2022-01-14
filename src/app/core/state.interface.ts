import { AuthState } from './auth/auth.state';
import { WhatsappState } from './whatsapp/whatsapp.state';

export interface AppState {
  auth: AuthState,
  whatsapp: WhatsappState
}