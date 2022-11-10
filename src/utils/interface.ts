import {User} from '../store/types'

export interface IEditedMessage {
    created_at: number;
    created_date?: string;
    created_time?: string;
    id: string;
    is_new: boolean;
    message: string;
    user: User;
}