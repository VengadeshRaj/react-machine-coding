import DEFAULT_PROFILE from '../images/default_profile.png';

export default function Profile({size=40}) {
  return (
    <div className="p-4">
      <img
        src={DEFAULT_PROFILE}
        alt="Profile"
        loading="lazy"
        className=" rounded-full object-cover"
         style={{ width: size, height: size }}
      />
    </div>
  );
}
