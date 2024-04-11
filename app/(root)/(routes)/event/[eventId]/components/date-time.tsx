// import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
// import { DateTime } from "luxon"; // Assuming you're using luxon for DateTime
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect } from "react";

interface DateTimePickerProps {
  DateTime: Date;
  // setDateTime : (date: Date) => void
  onChange: (date: Date) => void;
  disabled: boolean;
}

export const DateAndTimePicker: React.FC<DateTimePickerProps> =({DateTime,onChange,disabled})=> {
  const [dateTime, setDateTime] = React.useState(DateTime ||new Date());

  console.log(dateTime);

  //   useEffect(() => {
  //     onChange(dateTime);
  // }, [ dateTime, onChange]);

  const onDateChange = (newDateTime:Date)=>{
    onChange(newDateTime);
    setDateTime(newDateTime);
  }
  

  const handleDateChange = (newDate: Date) => {
    const newDateTime = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      dateTime.getHours(),
      dateTime.getMinutes()
    );
    onDateChange(newDateTime);
  };

  const handleTimeChange = (newTime: Date) => {
    const newDateTime = new Date(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate(),
      newTime.getHours(),
      newTime.getMinutes()
    );
    onDateChange(newDateTime);
  };

  return (
    <div className={`w-full flex gap-1  ${disabled? "cursor-not-allowed opacity-50":""}`}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateTime && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateTime ? format(dateTime, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={dateTime}
            onSelect={(e)=>handleDateChange(e as Date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Input
        type="time"
        value={format(dateTime, "HH:mm")}
        onChange={(e) => {
          const [hours, minutes] = e.target.value.split(":");
          const newTime = new Date();
          if (e.target.value === "" || (e.target.value.length === 1 && e.target.value === "0")) {
            // Handle the case where the input is empty or '0'
            const newTime = new Date();
            newTime.setHours(0);
            newTime.setMinutes(0);
            handleTimeChange(newTime);
          } else {
            // Continue with the regular input handling logic
            const newHours = Math.min(Math.max(parseInt(hours, 10), 0), 23);
            const newMinutes = Math.min(Math.max(parseInt(minutes, 10), 0), 59);
      
            const newTime = new Date();
            newTime.setHours(newHours);
            newTime.setMinutes(newMinutes);
            handleTimeChange(newTime);
          }

          
        }}
      />
    </div>
  );
}