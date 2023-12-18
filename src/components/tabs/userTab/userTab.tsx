import { motion } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./login-form"
import Register from "./register-form"

const UserTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-white flex justify-center w-[300px] h-[26.5rem] rounded-lg box-content	 pt-1 pb-1	">
      <Tabs defaultValue="login" className="w-[200px]">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login"><motion.div initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}><Login /></motion.div></TabsContent>
        <TabsContent value="register"><motion.div initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}><Register /></motion.div></TabsContent>
      </Tabs>
    </motion.div>
  )
}

export default UserTab