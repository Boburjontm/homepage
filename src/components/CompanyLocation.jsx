import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CompanyLocation = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="flex flex-col-reverse gap-[10px] md:flex md:flex-row">
        <div className="w-full rounded-[10px] border border-[#E5E2EE] p-[1px] md:w-1/2">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71612.86962707754!2d37.46566853285853!3d55.881711500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5376eb1b5889b%3A0xcbb73c6e1aef05bd!2sGMT-CENTR.COM!5e0!3m2!1sru!2s!4v1719929927274!5m2!1sru!2s"
            className="h-full w-full rounded-[10px]"
          ></iframe>
        </div>
        <div className="w-full rounded-[10px] border border-[#E5E2EE] p-5 md:w-1/2 lg:p-10">
          <h1 className="mb-2 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-[30px]">
            Остались вопросы?
          </h1>
          <p className="md:text-xm mb-8 font-medium leading-[140%] text-[#7A7687] md:leading-[118%] lg:mb-10 lg:text-[16px]">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form>
            <Box
              className="md:mb-8 lg:mb-10"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "100%",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#7A7687",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#088269",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#088269", 
                },
                "& .MuiInputBase-input": {
                  color: "#7A7687",
                },
                "& .MuiInputBase-input:focus": {
                  color: "#7A7687", 
                },
                "& .MuiInputLabel-root": {
                  color: "#7A7687",
                },
                "& .MuiInputLabel-root:hover": {
                  color: "#088269", 
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#088269", 
                },
              }}
              noValidate
              autoComplete="on"
            >
              <div>
                <TextField
                  className="w-full"
                  id="standard-multiline-flexible"
                  label="Ваше имя"
                  required
                  multiline
                  maxRows={1}
                  variant="standard"
                />
                <TextField
                  className="w-full"
                  id="standard-multiline-flexible"
                  label="Ваш телефон"
                  required
                  multiline
                  maxRows={1}
                  variant="standard"
                />
                <TextField
                  className="w-full"
                  id="standard-multiline-flexible"
                  label="Ваш email"
                  required
                  multiline
                  maxRows={1}
                  variant="standard"
                />
                <TextField
                  className="w-full"
                  required
                  id="standard-multiline-flexible"
                  label="Ваш вопрос"
                  multiline
                  maxRows={1}
                  variant="standard"
                />
              </div>
            </Box>
            <div className="mt-2 lg:flex lg:gap-7">
              <button className="mb-3 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm">
                Отправить
              </button>
              <p className="text-[10px] font-medium text-[#7A7687] lg:text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyLocation;
