"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ApiClient from "@/lib/ApiClient";
import { CATEGORIES } from "@/lib/endpoints";
import toast from "react-hot-toast";

interface Category {
  id: string;
  name: string;
}

export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await ApiClient.get(CATEGORIES); // Replace with your actual endpoint
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  // Add category (POST request)
  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      try {
        const newCategoryData = {
          name: newCategory.trim(),
        };

        // Send a POST request to add the category
        const response = await ApiClient.post(CATEGORIES, newCategoryData); // Replace with your actual endpoint
        if (response.status === 200 || response.status === 201) {
          toast.success("New Category Added Successfully.");
        }
        setCategories((prevCategories) => [
          ...prevCategories,
          response.data, // Assuming response returns the created category
        ]);
        setNewCategory("");
        setIsAdding(false);
      } catch (error) {
        console.error("Error adding category", error);
      }
    }
  };

  // Handle delete category (DELETE request)
  const deleteCategory = async (id: string) => {
    try {
      await ApiClient.delete(`${CATEGORIES}/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddCategory();
    } else if (e.key === "Escape") {
      setIsAdding(false);
      setNewCategory("");
    }
  };

  // Initial load of categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          return (
            <Badge
              key={category.id}
              className={cn("flex items-center gap-1 pl-3")}
            >
              {category.name}
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 text-white hover:bg-transparent hover:text-white/80"
                onClick={() => deleteCategory(category.id)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {category.name} category</span>
              </Button>
            </Badge>
          );
        })}

        <div
          className={cn(
            "flex transition-all duration-300",
            isAdding ? "w-[200px]" : "w-auto"
          )}
        >
          {isAdding ? (
            <div className="flex w-full items-center gap-1">
              <Input
                ref={inputRef}
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Category name"
                className="h-8"
              />
              <Button
                size="sm"
                className="h-8 px-2"
                onClick={handleAddCategory}
              >
                Add
              </Button>
            </div>
          ) : (
            <Badge
              variant="outline"
              className="cursor-pointer"
              onClick={handleAddClick}
            >
              <Plus className="mr-1 h-3 w-3" /> Add Category
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
