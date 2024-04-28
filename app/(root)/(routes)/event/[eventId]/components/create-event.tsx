"use client";

import { Input } from "@/components/ui/input";
import { RedirectToSignIn, auth, redirectToSignIn } from "@clerk/nextjs";
import { Category, Event } from "@prisma/client";
import z from "zod";
import { DateAndTimePicker } from "./date-time";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

import { Form, FormDescription, FormLabel } from "@/components/ui/form";

import axios from "axios";

import { Separator } from "@/components/ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import ImageUpload from "@/components/image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useDropzone } from "react-dropzone";
import FileUpload from "./file-upload";
import Footer from "@/components/footer";
import { Switch } from "@/components/ui/switch";

interface CreateEventFormProps {
  initialData: Event | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  image: z.string().min(1, { message: "Image is required" }),
  location: z.string().min(5, { message: "Location is required" }),
  city: z.string().min(1, { message: "city is required" }),
  hostedBy: z.string().min(1),
  description: z.string().min(3, { message: "Description is required" }),
  price: z.number().min(0, { message: "Price cannot be negative" }),
  dateTime: z.date().min(new Date(), { message: "Date cannot be in the past" }),
  totalTickets: z.number().min(1, { message: "Total tickets is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  isArchived: z.boolean().default(false),
});

const CreateEventForm = ({ initialData, categories }: CreateEventFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      image: "",
      location: "",
      city: "",
      hostedBy: "",
      description: "",

      price: 0,
      dateTime: new Date(),
      totalTickets: 0,
      categoryId: "",
      isArchived: false,
    },
  });

  const [dateTime, setDateTime] = React.useState(
    initialData?.dateTime || new Date()
  );

  console.log(initialData);

  console.log(initialData?.dateTime);

  // useEffect(() => {
  //   if (initialData) {
  //     initialData.dateTime = dateTime;
  //   }
  // }, [initialData, dateTime]);
  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        // update event
        await axios.patch(`/api/event/${initialData.id}`, values);
        toast.success("Successfully updated");
        router.push(`/events/${initialData.id}`);
      } else {
        // create event

        const data = await axios.post("/api/event", values);
        toast.success("Successfully created");
        router.push(`/events/${data.data.id}`);
        router.refresh();
      }

      if (initialData) {
      } else {
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="h-full  p-4 space-y-2  mx-10">
      <Form {...form}>
        <div className="space-y-2 w-full text-center">
          <div className="space-y-2 flex justify-between items-center w-full text-center">

          <h3 className="text-lg font-medium">Event Details</h3>

          <FormField
            name="isArchived"
            render={({ field }) => (
              <FormItem className="flex  items-center justify-center gap-2">
                <FormLabel className="text-red-600">Archive</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>

          <Separator className="bg-primary/10" />
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          {/* image */}
          <div className="flex flex-col lg:flex-row  justify-center lg:gap-20">
            <FormField
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center space-y-4">
                  <FormControl>
                    <FileUpload
                      disabled={isLoading}
                      onChange={(e) => field.onChange(e)}
                      imageUrl={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <div className="flex w-full justify-center lg:justify-between items-center"> */}

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Event name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>This is your event name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="location"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="near marine drive"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Add your event location</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="city"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Mumbai"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      city where you organize your event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="hostedBy"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Hosted By</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Host name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Host name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="categoryId"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a category"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select a category for your event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        disabled={isLoading}
                        placeholder="Price of your ticket"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Price of your ticket & for free type 0
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="totalTickets"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Total ticket&apos;s</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={isLoading}
                        placeholder={"100"}
                        min={1}
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormDescription>Total no of ticket&apos;s</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* date and time  */}

              <FormField
                name="dateTime"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Date and Time</FormLabel>
                    <FormControl>
                      <DateAndTimePicker
                        DateTime={field.value}
                        // setDateTime={setDateTime}
                        disabled={isLoading}
                        onChange={(e) => field.onChange(new Date(e))}
                      />
                    </FormControl>
                    <FormDescription>
                      Date and Time of your event
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* </div> */}

          <div className="space-y-2 w-full">
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-background resize-none"
                      rows={7}
                      disabled={isLoading}
                      placeholder={"Description of your event"}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe in detail about your event&apos;s
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-center">
              <Button
                disabled={isLoading}
                size="lg"
                // className="bg-gradient-to-r from-green-500   to-blue-500"
              >
                {initialData ? "Edit your Event" : "Create your Event"}
                <Wand2 className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateEventForm;
