import { FormEventHandler, useState } from "react";

export const EmailForm = () => {
  const [errors, setErrors] = useState({
    email: "",
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "メールアドレスを入力してください",
      }));
    }
    // console.log(Array.from(form.entries()));
  };
  return (
    <div>
      <h2>Sign Up for updates</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">メールアドレス</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            autoCapitalize="none"
            autoComplete="off"
            required
            pattern="[^@]+@[^\.]+\..+"
          />
          <button>
            <span className="visually-hidden"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z"
              />
            </svg>
          </button>
        </div>
      </form>
      {errors.email && (
        <div role="alert" aria-atomic="true">
          <h3>有効なメールアドレスを入力してください</h3>
          <p>例: example@message.com</p>
        </div>
      )}
    </div>
  );
};
