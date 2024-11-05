@import url('css/font-roboto.css');
:root {
    --clr-light-white: #ffffff;
    --clr-light-grey: #e5e6e7;
    --clr-dark-grey: #838383;
    --clr-light-green: #c7ebcc;
    --clr-dark-green: #31884d;

    --clr-main-light-blue: #e0eaf5;
    --clr-main-dark-blue: #317bbb;
    --clr-main-dark-orange: #f0a00c;

    --clr-text-dark-black: #0b213d;
    --clr-text-dark-blue: #213e8d;
    --clr-text-light-red: #e75158;


    --ff-primary: 'Roboto', sans-serif;
    --transition: all 0.3s linear;
}
.mobrog-v1-language-selector-displayNone {
    display: none;
}
.mobrog-v1-language-selector {
    width: 20em;
}
.mobrog-v1-selected-language {
    width: 100%;
    border: 2px solid var(--clr-light-white);
    border-radius: 2px;
    box-shadow: 2px 5px 5px #8080801f;
    padding: 0.5em 0.5em 0.5em 1em;
    text-align: center;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}
.mobrog-v1-selected-language i {
    float: right;
    padding-right: 0.5em;
    padding-top: 0.2em;
    padding-left: 0.5em;
}
.mobrog-v1-all-languages {
    border: 1px solid var(--clr-light-grey);
    display: flex;
    flex-direction: column;
    margin-top: -12em;
    padding: 0.5em 0.8em 0.5em 0.7em;
    background-color: var(--clr-light-white);
    max-height: 12em;
    min-height: 12em;
    overflow-y: auto;
}
.mobrog-v1-all-languages a {
    padding: 5px 0 5px 8px;
}
.mobrog-v1-all-languages a img,
.mobrog-v1-selected-language img {
    margin-right: 0.5em;
}
#myInputFilter{
    padding: 0.5em;
border-top: none;
border-left: none;
border-right: none;
}
.mobrog-v1-all-languages input:focus{
    outline: none;
}
.mobrog-v1-all-languages a:hover {
    background-color: var(--clr-light-grey);
}
.mobrog-v1-selected-language-container-div{
    display: flex;
    justify-content: center;
    width: 100%;
}
@media (max-width: 1090px) {
    .mobrog-v1-language-selector,
    .mobrog-v1-selected-language,
    .mobrog-v1-all-languages{
        width: 100%;
    }
    .mobrog-v1-language-selector {
        margin-left: 0;
    }
    .mobrog-v1-all-languages {
        text-align: left;
    }
}