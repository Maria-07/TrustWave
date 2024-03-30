import ParticlesBg from "@/component/UI/Auth/ParticlesBg";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import logo from "../assets/img/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForgetPasswordMutation } from "@/Redux/features/auth/userApi";
import { toast } from "react-toastify";
import { GrIntegration } from "react-icons/gr";

const ForgetPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //* api Integration
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await forgetPassword(data);
      // console.log("response", response);

      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        router.push("/forgot-password-code-check");
      } else {
        setMessage(response?.data?.message);
        toast.error(response?.error?.data?.message);
        reset();
      }
    } catch (error) {
      // console.log("error", error);
    }
  };

  return (
    <div
      className={`flex items-center justify-center py-[10%] text-xl login-bg min-h-[50vh]`}
    >
      <NextSeo

      // Other SEO-related properties like title, description, etc.
      />{" "}
      <div
        style={{
          // background: `url(${bg})`,
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <div className="z-10 px-2 sm:px-16 py-3 sm:py-5 bg-white m-4 sm:m-5 shadow-xl border-8 border-secondary rounded-[35px] absolute login-form">
          <div className="">
            <div div className="">
              <Image
                src={logo}
                width={220}
                alt="TPMS-logo"
                className="mx-auto"
              />

              <h1>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label className="label">
                        <span className="font-semibold  text-xs text-gray-600 text-left">
                          Please enter the email you created your account with.
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="border rounded-md px-3 py-[5px]  text-xs w-full"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Enter Email",
                          },
                          pattern: {
                            value: /@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                            message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                          },
                        })}
                      />
                      <div className="mt-8 mb-5 flex items-center justify-between">
                        <Link
                          href={"/"}
                          className=" py-2 px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                          type="button"
                        >
                          Back
                        </Link>
                        <button
                          className=" py-2 px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </h1>
              <ParticlesBg></ParticlesBg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
