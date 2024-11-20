import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import CheckInContent from "./CheckInContent";
import { auth, db } from "/firebaseConfig";

const CheckIn = ({ setCurrentPage }) => {
  const [countOsu, setCountOsu] = useState(0);
  const [countEndoji, setCountEndoji] = useState(0);
  const [countSeto, setCountSeto] = useState(0);

  useEffect(() => {
    const fetchCounts = async (user) => {
      try {
        const osuDocRef = doc(db, "大須商店街", user.uid);
        const osuDocSnap = await getDoc(osuDocRef);

        if (osuDocSnap.exists()) {
          const data = osuDocSnap.data();

          setCountOsu(data.count || 0);

          const endojiDocRef = doc(db, "円頓寺商店街", user.uid);

          const endojiDocSnap = await getDoc(endojiDocRef);

          if (endojiDocSnap.exists()) {
            const endojiData = endojiDocSnap.data();

            setCountEndoji(endojiData.count || 0);
          }

          const setoDocRef = doc(db, "せと末広町商店街", user.uid);

          const setoDocSnap = await getDoc(setoDocRef);

          if (setoDocSnap.exists()) {
            const setoData = setoDocSnap.data();

            setCountSeto(setoData.count || 0);
          }
        }
      } catch (error) {}
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchCounts(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="w-full bg-customBg">
        <div className="max-w-xs mx-auto">
          <div
            onClick={() => setCurrentPage("Menu")}
            className="flex pb-3 pt-14 "
          >
            <img src="./images/angle-left.svg" alt="左矢印" />
            <p className="mx-auto text-white">チェックイン管理</p>
          </div>
        </div>
      </div>
      <CheckInContent MenuText="大須商店街" MenuCount={countOsu} />
      <CheckInContent MenuText="円頓寺商店街" MenuCount={countEndoji} />
      <CheckInContent MenuText="せと末広町商店街" MenuCount={countSeto} />
    </div>
  );
};

export default CheckIn;
