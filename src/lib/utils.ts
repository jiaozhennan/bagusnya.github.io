import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 存储咨询信息到本地存储
export function saveInquiry(data: any) {
  try {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    inquiries.push({
      ...data,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    return true;
  } catch (error) {
    console.error('Failed to save inquiry:', error);
    return false;
  }
}

// 获取所有咨询信息
export function getInquiries() {
  try {
    return JSON.parse(localStorage.getItem('inquiries') || '[]');
  } catch (error) {
    console.error('Failed to get inquiries:', error);
    return [];
  }
}
