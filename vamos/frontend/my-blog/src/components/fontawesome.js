import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenNib,
  faInfinity,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faInfinity, faPenNib, faPaperPlane);

const EditBox = () => {
  return <FontAwesomeIcon icon={faPenNib} />;
};

const SendChange = () => {
  return <FontAwesomeIcon icon={faPaperPlane} />;
};

export { EditBox, SendChange };
