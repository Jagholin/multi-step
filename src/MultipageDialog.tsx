import { useCallback, useRef, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch, useForm } from "react-hook-form";
import css from "./MultipageDialog.module.scss";
import { AddonType, PlanType } from "./models/plans";

export type PageProps = {
  register: UseFormRegister<MyFieldValues>;
  errors: FieldErrors<MyFieldValues>;
  watch: UseFormWatch<MyFieldValues>;
  // handleChangePlan: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  setCurrentPage: (page: number) => void;
  setCurrentFields: (fields: (keyof MyFieldValues)[]) => void;
}

export type MyFieldValues = Record<AddonType, boolean> & {
  name: string;
  email: string;
  phone: string;
  plan: PlanType;
  planTypeYearly: boolean;
}

type Props = {
  pages: React.ComponentType<PageProps>[];
  pageTitles: string[];
}

function MultipageDialog({ pages, pageTitles }: Props) {
  const { register, handleSubmit, watch, formState, trigger: triggerValidation } = useForm<MyFieldValues>({ 
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      planTypeYearly: false,
    },
  });
  const [currentPage, setCurrentPage] = useState(0);
  const currentFields = useRef<(keyof MyFieldValues)[]>([]);

  const nextPageHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerValidation(currentFields.current).then((val) => {
      if (val) {
        setCurrentPage((val) => val + 1);
      }
    })
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
        <MyPage 
          register={register} 
          errors={formState.errors} 
          watch={watch}
          setCurrentFields={(fields: (keyof MyFieldValues)[]) => currentFields.current = fields}
          setCurrentPage={setCurrentPage} />
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
