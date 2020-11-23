// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default library.add(
    faOpenHeart,
    faHeart
);