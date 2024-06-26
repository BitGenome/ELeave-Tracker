import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "renderer/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "renderer/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "renderer/components/ui/form";
import { Input } from "renderer/components/ui/input";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().min(1, {
    message: "Employee id must be at least 1 characters.",
  }),
  firstname: z.string().min(1, {
    message: "Firstname must be at least 1 characters.",
  }),
  lastname: z.string().min(1, {
    message: "Lastname must be at least 1 characters.",
  }),
});

type TAddEmployee = z.infer<typeof formSchema>;

export default function AddEmployee() {
  const form = useForm<TAddEmployee>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Employee</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder="Dela Cruz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogContent>
  );
}
