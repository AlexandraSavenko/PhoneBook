import { bool, boolean } from "yup"
import clsx from "clsx"
import css from "./ValidPassword.module.css"

interface Props {
    isValid:
    {a: boolean, 
    A: boolean, 
    num: boolean, 
    sym: boolean}
}
const ValidPassword: React.FC<Props> = ({isValid: {a, A, num, sym}}) => {
return <div className={css.wrap}>
    <p>Your password must include:</p>
 <ul className={css.list}>
    <li className={clsx(a ? css.valid : css.invalid)}>
        letters a-z
    </li>
    <li className={clsx(A ? css.valid : css.invalid)}>
        letters A-Z
    </li>
    <li className={clsx(num ? css.valid : css.invalid)}>
        numbers 0-9
    </li>
    <li className={clsx(sym ? css.valid : css.invalid)}>
        any symbols
    </li>
</ul>
</div>
}

export default ValidPassword;