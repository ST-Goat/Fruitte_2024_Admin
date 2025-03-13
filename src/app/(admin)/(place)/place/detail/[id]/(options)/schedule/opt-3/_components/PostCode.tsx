import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { searchAddress } from "@/lib/geo";
import * as hook from "@/features/place/hooks/placeSchedule";

const Postcode = () => {
  const {
    placeText,
    setPlaceText,
    region,
    setRegion,
    address,
    setAddress,
    lat,
    setLat,
    long,
    setLong,
  } = hook.usePlaceScheduleOpt3Store();

  const open = useDaumPostcodePopup();

  const handleComplete = async (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(data);

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    const result = await searchAddress(fullAddress); // `await`으로 결과 받기

    if (result) {
      setLong(String(result.x));
      setLat(String(result.y));
      setAddress(fullAddress);
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      onClick={handleClick}
    >
      주소찾기
    </button>
  );
};

export default Postcode;
