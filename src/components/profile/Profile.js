import React from "react";
import Stats from "./Stats";

function Profile(profile) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
          alt="user avatar"
          class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <Stats stats={profile.stats} />
    </div>
  );
}

export default Profile;
