import { useCallback, useRef, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetFocus, UseFormSetValue, UseFormWatch, useForm } from "react-hook-form";
import css from "./styles/MultipageDialog.module.scss";
import { AddonType, PlanType } from "./models/plans";

export type PageProps = {
  register: UseFormRegister<MyFieldValues>;
  errors: FieldErrors<MyFieldValues>;
  watch: UseFormWatch<MyFieldValues>;
  setValue: UseFormSetValue<MyFieldValues>;
  setFocus: UseFormSetFocus<MyFieldValues>;
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
  lastPage: React.ComponentType;
}

function MultipageDialog({ pages, pageTitles, lastPage }: Props) {
  const { register, handleSubmit, watch, formState, trigger: triggerValidation, setValue, setFocus } = useForm<MyFieldValues>({ 
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
  const [displayLastPage, setDisplayLastPage] = useState(false);

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

  const submitFormHandler = useCallback(() => {
    setDisplayLastPage(true);
  }, [])

  const MyPage = pages[currentPage];
  const LastPage = lastPage;
  return (
    <div className={css["dialog_container"]}>
      <aside className={css["dialog_sidebar"]}>
        <ul>
          {pageTitles.map((title, index) => (
            <li key={index} className={index === currentPage ? css["current"] : ""}>
              <div className={css["dialog_sidebar-circle"]}>
                {index + 1}
              </div>
              <div className={css["dialog_sidebar-title"]}>
                <div>Step {index + 1}</div>
                <div>{title}</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <form className={css["dialog_content"]}>
        <div>
          {displayLastPage ? 
            <LastPage /> : 
            <MyPage 
              register={register} 
              errors={formState.errors} 
              watch={watch}
              setValue={setValue}
              setFocus={setFocus}
              setCurrentFields={(fields: (keyof MyFieldValues)[]) => currentFields.current = fields}
              setCurrentPage={setCurrentPage} />
          }
        </div>
        {displayLastPage || <div className={css["dialog_buttons"]}>
          { currentPage > 0 && <button className={css["dialog_back"]} onClick={backPageHandler}>Go Back</button> }
          { currentPage < pages.length - 1 && <button className={css["dialog_next"]} onClick={nextPageHandler}>Next Step</button>}
          { currentPage === pages.length - 1 && <button className={css["dialog_submit"]} onClick={handleSubmit((_data) => submitFormHandler())}>Confirm</button>}
        </div>}
      </form>
    </div>
  )
}

export default MultipageDialog;
