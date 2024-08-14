import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Card>
        <CardHeader>
          <CardTitle>AiAcademy</CardTitle>
          <CardDescription>Lets Build</CardDescription>
        </CardHeader>
       
      </Card>
    </main>
  );
}
