export type Gender = '男性' | '女性' | 'その他/回答しない';
export interface MBTIQuestion { id: number; question: string; category: "E/I" | "S/N" | "T/F" | "J/P"; }
export interface MBTIAnswer { questionId: number; value: number; category: "E/I" | "S/N" | "T/F" | "J/P"; }
