import React, {useEffect} from 'react';
import branch from '../../images/branch.svg';
import branchTwo from '../../images/branchTwo.svg';
import present from '../../images/present/present.svg';
import './Present.scss';

function Present() {
    useEffect(() => {
        const inputField = document.getElementById('exampleInputEmail');
        const inputContainer = document.querySelector('.input-container');
        const cross = document.querySelector('.present__cross');

        if (inputField) {
            const handleFocus = () => {
                inputField.dataset.placeholder = inputField.placeholder;
                inputField.placeholder = '';
                inputContainer.style.borderColor = '#737702';
            };

            const handleBlur = () => {
                inputField.placeholder = inputField.dataset.placeholder;
                inputContainer.style.borderColor = '#A5AB00';
                inputField.style.borderLeft = 'none';
            };

            const handleInput = () => {
                if (inputField.value) {
                    inputField.classList.add('has-text');
                } else {
                    inputField.classList.remove('has-text');
                }
            };

            const handleCrossClick = () => {
                inputField.value = '';
                inputField.classList.remove('has-text');
            };

            inputField.addEventListener('focus', handleFocus);
            inputField.addEventListener('blur', handleBlur);
            inputField.addEventListener('input', handleInput);
            cross.addEventListener('click', handleCrossClick);


            return () => {
                inputField.removeEventListener('focus', handleFocus);
                inputField.removeEventListener('blur', handleBlur);
                inputField.removeEventListener('input', handleInput);
                cross.removeEventListener('click', handleCrossClick);
            };
        }
    }, []);

    return (
        <section className="present">
            <div className="container present__container">
                <div className="present__image present__image_one">
                    <img src={branch} alt="branch one"/>
                </div>
                <div className="present__image present__image_two">
                    <img src={branchTwo} alt="branch two"/>
                </div>
                <div className="present__image present__image_three">
                    <img src={branch} alt="branch three"/>
                </div>
                <div className="present__image present__image_four">
                    <img src={branchTwo} alt="branch four"/>
                </div>
                <div className="inner present__inner">
                    <div className="present__block">
                        <h2>Получите методичку в подарок</h2>
                    </div>
                    <div className="present__checkboxs">
                        <div className="present__img">
                            <img src={present} alt="present"/>
                        </div>
                        <div className="present__checkbox">
                            <input type="checkbox" id="checkbox-one" name="scales" required defaultChecked />
                            <label htmlFor="checkbox-one" id="checkboxOneLabel">По химии лучевой терапии</label>
                        </div>
                        <div className="present__checkbox">
                            <input type="checkbox" id="checkbox-three" name="scales" required defaultChecked />
                            <label htmlFor="checkbox-three" id="checkboxThreeLabel">По щитовидной железе у подростков</label>
                        </div>
                        <div className="present__checkbox">
                            <input type="checkbox" id="checkbox-two" name="scales" required defaultChecked />
                            <label htmlFor="checkbox-two" id="checkboxTwoLabel">По соматическим заболеваниям</label>
                        </div>
                        <div className="present__checkbox">
                            <input type="checkbox" id="checkbox-four" name="scales" required defaultChecked />
                            <label htmlFor="checkbox-four" id="checkboxLabel">Базовая методичка о Биовестине</label>
                        </div>
                    </div>
                    <form className="present__form" name="form-email" id="form-manual" autoComplete="on">
                        <label htmlFor="exampleInputEmail">Введите ваш e-mail</label>
                        <div className="input-container">
                            <input
                                className="text-medium input"
                                name="email"
                                type="text"
                                id="exampleInputEmail"
                                minLength="5"
                                maxLength="40"
                                autoComplete="on"
                                placeholder="tratata@mail.ru"
                                required
                            />
                            <div className="present__cross">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10L0 9L4 5L0 1L1 0L5 4L9 0L10 1L6 5L10 9L9 10L5 6L1 10Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                        <span className="text-small present__message-error"></span>
                        <button className="button present__button" type="submit">Получить методичку</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Present;
