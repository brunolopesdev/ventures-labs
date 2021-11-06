import "./index.css";
import DataContext from "../../../context";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerClient, completeFormStep, formStep } =
    useContext(DataContext);

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 2) {
      return (
        <div className="pure-controls">
          <button
            disabled={!isValid}
            type="submit"
            className="pure-button pure-button-primary"
          >
            Salvar
          </button>
        </div>
      );
    } else {
      return (
        <div className="pure-controls">
          <button
            disabled={!isValid}
            onClick={completeFormStep}
            type="button"
            className="pure-button pure-button-primary"
          >
            Próximo
          </button>
        </div>
      );
    }
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  return (
    <main>
      <form
        className="pure-form pure-form-aligned"
        onSubmit={handleSubmit(registerClient)}
      >
        <fieldset>
          {formStep >= 0 && (
            <section className={formStep === 0 ? "visible" : "hidden"}>
              <div className="pure-control-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Por favor preencha o nome",
                    },
                  })}
                />
                {errors.name && (
                  <p className="errorMessage">{errors.name.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="lastName">Sobrenome</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Sobrenome"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Por favor preencha o sobrenome",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="errorMessage">{errors.lastName.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Por favor preencha o email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="errorMessage">{errors.email.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Por favor preencha o telefone",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="errorMessage">{errors.phone.message}</p>
                )}
              </div>
            </section>
          )}

          {formStep >= 1 && (
            <section className={formStep === 1 ? "visible" : "hidden"}>
              <div className="pure-control-group">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  name="cep"
                  placeholder="CEP"
                  {...register("cep", {
                    required: {
                      value: true,
                      message: "Por favor preencha o CEP",
                    },
                  })}
                />
                {errors.cep && (
                  <p className="errorMessage">{errors.cep.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="Adress">Endereço 1</label>
                <input
                  type="text"
                  name="adressOne"
                  placeholder="Endereço 1"
                  {...register("adressOne", {
                    required: {
                      value: true,
                      message: "Por favor preencha o endereço",
                    },
                  })}
                />
                {errors.adressOne && (
                  <p className="errorMessage">{errors.adressOne.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="Adress">Endereço 2</label>
                <input
                  type="text"
                  name="adressTwo"
                  placeholder="Endereço 2"
                  {...register("adressTwo", {
                    required: {
                      value: true,
                      message: "Por favor preencha o segundo endereço",
                    },
                  })}
                />
                {errors.adressTwo && (
                  <p className="errorMessage">{errors.adressTwo.message}</p>
                )}
              </div>
            </section>
          )}

          {formStep >= 2 && (
            <section className={formStep === 2 ? "visible" : "hidden"}>
              <div className="pure-control-group">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input
                  type="date"
                  name="birthDate"
                  placeholder="dd/mm/aaaa"
                  {...register("birthDate", {
                    required: {
                      value: true,
                      message: "Digite a data de nascimento",
                    },
                  })}
                />
                {errors.birthDate && (
                  <p className="errorMessage">{errors.birthDate.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  {...register("cpf", {
                    required: {
                      value: true,
                      message: "Por favor, digite o CPF",
                    },
                  })}
                />
                {errors.cpf && (
                  <p className="errorMessage">{errors.cpf.message}</p>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="rendaMensal">Renda Mensal</label>
                <input
                  type="text"
                  name="rendaMensal"
                  placeholder="Renda Mensal"
                  {...register("rendaMensal", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>
            </section>
          )}

          {formStep === 3 && (
            <section>
              <h2>Cadastrado com sucesso!</h2>
            </section>
          )}
        </fieldset>
        {renderButton()}
      </form>
    </main>
  );
};

export default Register;
