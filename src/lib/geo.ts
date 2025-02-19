export const getGeocoderWithAddress = (
  fullAddress: string,
): Promise<{ long: number; lat: number }> => {
  return new Promise((resolve, reject) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(fullAddress, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 정상적으로 검색이 완료되었으면 좌표 반환
        resolve({ long: coords.getLng(), lat: coords.getLat() });
      } else {
        // 실패 시 undefined 반환
        reject(undefined);
      }
    });
  });
};
