import { useCallback, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister, useForm } from "react-hook-form";
import css from "./MultipageDialog.module.scss";

export type PageProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

type Props = {
  pages: React.ComponentType<PageProps>[];
  pageTitles: string[];
}

function MultipageDialog({ pages, pageTitles }: Props) {
  const { register, handleSubmit, watch, formState } = useForm({ mode: "onBlur"});
  const [currentPage, setCurrentPage] = useState(0);

  const nextPageHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage((val) => val + 1);
  }, []);

  const backPageHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage((val) => val - 1);
  }, []);

  const MyPage = pages[currentPage];
  return (
    <div className={css["dialog-container"]}>
      <div className={css["dialog-sidebar"]}>
        <ul>
          {pageTitles.map((title, index) => (
            <li key={index} onClick={() => setCurrentPage(index)}>
              {title}
            </li>
          ))}
        </ul>
      </div>
      <form className={css["dialog-content"]}>
        <MyPage register={register} errors={formState.errors} />
        <div className={css["dialog-buttons"]}>
          { currentPage > 0 && <button className={css["dialog-back"]} onClick={backPageHandler}>Go back</button> }
          { currentPage < pages.length - 1 && <button className={css["dialog-next"]} onClick={nextPageHandler}>Next Step</button>}
          { currentPage === pages.length - 1 && <button className={css["dialog-submit"]} onClick={handleSubmit((data) => console.log(data))}>Confirm</button>}
        </div>
      </form>
    </div>
  )
}

export default MultipageDialog;