export function validateEmail(email: string) {
  // 정규 표현식을 사용하여 이메일 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
