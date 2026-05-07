"use client";

import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter()

  const [isShowPassword, setIsShowPassword] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({name, image, email, password});

    const {data:res, error} = await authClient.signUp.email({
      name,
      email,
      image,
      password
    })
    // console.log({data, error});
     if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Registration Successful😊 Please Login with same info.");
      router.push('/signin')
    
    }
  };

  return (
    <Card className="border-0 shadow-2xl mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Register Your Account</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
      
                  return null;
                }}
                className={'relative'}
              >
                <Label>Password</Label>
                <Input 
                placeholder="Enter your password"
                type={isShowPassword ? "text" : "password"}
                 />
                 <span
                    className="absolute right-3 top-8 cursor-pointer"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </span>
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>

        <div>
          <Button type="submit" fullWidth>Register</Button>
        </div>
        <p className="text-center">
          You have an Account?{" "}
          <span className="text-blue-400">
            <Link href={"signin"}>Sign In</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <div className="space-y-3">
          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <Button className="w-full" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
        </div>
      </Form>
      <Toaster
  position="top-center"
  reverseOrder={true}
/>
    </Card>
  );
}
