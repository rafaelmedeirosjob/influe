import { RegisterForm } from "@/components/auth/register-form";
import { GET } from "@/app/api/categories/route"

const RegisterPage = async () => {
  const categories = GET;
  return ( 
    <RegisterForm categories:categories />
  );
}
 
export default RegisterPage;