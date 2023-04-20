import { Input, Button } from "react-daisyui";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { login } from "../api/users";
import { useRouter } from "next/navigation";
import localforage from "localforage";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const onChangeHandler = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: async (data) => {
      const token = await localforage.getItem("token");
      if (!token) {
        await localforage.setItem("token", data);
        // queryClient.setQueryData("token", data);
      }
      push("/");
    },
    onError: (error) => {
      Swal.fire("Oops...", error.response.data.msg, "error");
    },
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate(user);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="sm:col-start-5 sm:col-span-4 col-span-10 col-start-2">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <Input
              onChange={onChangeHandler}
              className="w-full"
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="mb-4">
            <Input
              onChange={onChangeHandler}
              className="w-full"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <Button className="block w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}
