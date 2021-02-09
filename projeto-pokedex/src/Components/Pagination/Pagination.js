import { MAX_ITENS, MAX_LEFT } from "../../Constant/Constant";

const Pagination = ({ limit, total, offset }) => {

  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total /  limit)
  const first = Math.max(current - MAX_LEFT, 1)

  return (
      <ul>
          {
              Array.from({ length: MAX_ITENS }).map((_, index)=> index + first)
          }
      </ul>
  )
};

export default Pagination;
