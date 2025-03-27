"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Switch } from "../components/ui/switch";
import ApiClient from "@/lib/ApiClient";
import { CATEGORIES, REMINDERS } from "@/lib/endpoints";
import { BellRing } from "lucide-react";
import toast from "react-hot-toast";

// Define types for form data
interface ReminderFormState {
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
  sendEmail: boolean;
}

function NewReminderPage() {
  const emailId = sessionStorage.getItem("email");
  const [todayDate, setTodayDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const navigate = useNavigate();
  const { control, handleSubmit, formState } = useForm<ReminderFormState>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      category: "",
      sendEmail: true,
    },
  });
  const { errors, isSubmitting } = formState;

  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );

  const fetchCategories = async () => {
    try {
      const response = await ApiClient.get(CATEGORIES);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const onSubmit = async (record: ReminderFormState) => {
    try {
      const payload = {
        title: record.title,
        description: record.description,
        date: record.date,
        time: record.time,
        category_id: categories.find((elem) => elem.name === record.category)
          ?.id,
        email: emailId,
      };
      const response = await ApiClient.post(REMINDERS, payload);
      if (response.status === 200 || response.status === 201) {
        toast.success("New Reminder Added Successfully.");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    // Calculate today's date in YYYY-MM-DD format
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setTodayDate(`${yyyy}-${mm}-${dd}`);

    // Get the current time in HH:mm format
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="flex items-center gap-2">
              <BellRing className="w-8 h-8"></BellRing>
              <span className="text-xl font-bold">ReminderPro</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/40">
        <div className="container py-6 md:py-8 lg:py-10 mx-auto">
          <div className="mb-6 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">
              Create New Reminder
            </h1>
          </div>

          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Reminder Details</CardTitle>
              <CardDescription>
                Fill in the information for your new reminder
              </CardDescription>
            </CardHeader>
            <CardContent>
              {errors.title && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{errors.title?.message}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    control={control}
                    name="title"
                    rules={{ required: "Title is required" }}
                    render={({ field }) => (
                      <Input
                        id="title"
                        placeholder="Enter reminder title"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                      <Textarea
                        id="description"
                        placeholder="Enter reminder details"
                        className="min-h-[100px]"
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">
                      Date <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      control={control}
                      name="date"
                      rules={{ required: "Date is required" }}
                      render={({ field }) => (
                        <Input
                          id="date"
                          min={todayDate}
                          type="date"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">
                      Time <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      control={control}
                      name="time"
                      rules={{ required: "Time is required" }}
                      render={({ field }) => (
                        <Input
                          id="time"
                          type="time"
                          min={currentTime}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Controller
                    control={control}
                    name="category"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.length > 0 ? (
                            categories.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.name}
                              >
                                {category.name}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="loading">Loading...</SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Controller
                    control={control}
                    name="sendEmail"
                    render={({ field }) => (
                      <Switch
                        id="email-notification"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="email-notification">
                    Send email notification
                  </Label>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                        </svg>
                        Creating...
                      </>
                    ) : (
                      "Create Reminder"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 ReminderPro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewReminderPage;
