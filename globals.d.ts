export {};

declare global {
  interface Window {
    daum: any;
    naver: any;
  }
  namespace naver {
    namespace maps {
      type Map = any; // 실제 타입으로 교체
    }
  }
}
