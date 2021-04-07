import React from "react";

const profileData = {
  Ju: {
    name: "주민수",
    description: "stop-out-student",
  },
  homer: {
    name: "호머",
    description: "아빠?",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </>
  );
}

export default Profile;
