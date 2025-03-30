import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="p-6 shadow-xl rounded-2xl bg-white">
        <CardContent className="flex flex-col items-center space-y-4">
          <motion.h1
            className="text-3xl font-bold text-gray-800"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2 }}
            key={count}
          >
            {count}
          </motion.h1>
          <div className="flex space-x-4">
            <Button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              -
            </Button>
            <Button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
