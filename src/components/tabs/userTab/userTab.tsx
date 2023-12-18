import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./login-form"
import Register from "./register-form"

const UserTab = () => {
  return (
    <div className="bg-black flex justify-center w-[300px] h-[26.5rem] rounded-lg box-content	 pt-1 pb-1	">
      <Tabs defaultValue="account" className="w-[200px]">
        <TabsList>
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><Login /></TabsContent>
        <TabsContent value="password"><Register /></TabsContent>
      </Tabs>
    </div>
  )
}

export default UserTab