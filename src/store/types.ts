export type Last_message = {
    created_at: number;
    message: string;
    user_id: string;
    user_name: string;
    user_surname: string;
    you: boolean;
  };
  
  export type User = {
    avatar: string;
    id: string;
    name: string;
    surname: string;
    you: boolean;
  };
  
  export type Chat = {
    id: string;
    avatar: string;
    created_at: number;
    count_unread: number;
    private: boolean;
    title: string;
    last_message: Last_message;
    users: Array<User>;
  };

  export type Message = {
    created_at: number;
    id: string;
    is_new: boolean;
    message: string;
    user: User;
  }
  