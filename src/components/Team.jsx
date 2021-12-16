import "./Team.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import TeamMembers from "../data/TeamMembers";

function MemberBox(props) {
  return (
		<div
			className={
				"person-box " + (props.val ? "person-box-native" : "person-box-white")
			}
		>
			<div className="icons">
				<a href={props.data.github} className="team-a">
					<FaGithub className="icon-style" />
				</a>
				<a href={props.data.instagram} className="team-a">
					<FaInstagram className="icon-style" />
				</a>
				<a href={props.data.linkedin} className="team-a">
					<FaLinkedin className="icon-style" />
				</a>
			</div>
			<div
				className={
					"person-name " +
					(props.val ? "person-name-black" : "person-name-native")
				}
			>
				{props.data.name.toUpperCase()}
			</div>
			<div
				className={
					"person-work " +
					(props.val ? "person-work-white" : "person-work-black")
				}
			>
				{props.data.work}
			</div>
		</div>
	);
}

function Team() {
  return (
    <div className="team-section mt-16 mx-auto">
      <div className="header">
        <span className="header-our">OUR</span>{" "}
        <span className="header-team">TEAM</span>
      </div>
      <div className="grid">
        {TeamMembers.map((member, index) => {
          return <MemberBox key={index} val={index % 2} data={member} />; //val is for alternating colors
        })}
      </div>
    </div>
  );
}

export default Team;
