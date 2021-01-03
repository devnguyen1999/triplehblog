import React, { useEffect } from "react";
function Advert() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div className="advert">
      <ins
        className="adsbygoogle"
        style={{display:'block'}}
        data-ad-client="ca-pub-9082816451149795"
        data-ad-slot="24524524"
        data-ad-format="auto"
      />
    </div>
  );
}

export default Advert;
