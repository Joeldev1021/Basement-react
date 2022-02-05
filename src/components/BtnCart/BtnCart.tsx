import "./styles.css";
type BtnCartProps = {
  handleModal: () => void;
}
const BtnCart = ({ handleModal }:BtnCartProps) => {
  return (
        <button onClick={() => handleModal()} className="btn-cart">
          Cart (0)
        </button>
  );
};

export default BtnCart;
