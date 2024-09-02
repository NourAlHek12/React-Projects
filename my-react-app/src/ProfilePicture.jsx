
function ProfilePicture(){

    const imgUrl = 'https://th.bing.com/th/id/OIP.aip-M5q-lUbntoLGN6rLwwAAAA?w=200&h=200&rs=1&pid=ImgDetMain';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imgUrl}></img>);
}
export default ProfilePicture