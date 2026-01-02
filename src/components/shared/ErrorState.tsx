"use client";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";

interface ErrorStateProps {
  message?: string;
}

const ErrorState = ({
  message = "حدث خطأ غير متوقع أثناء معالجة طلبك، يرجى المحاولة مرة أخرى.",
}: ErrorStateProps) => {
  return (
    <div className="animate-fade-up flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2">
        عذراً، حدث خطأ ما!
      </h3>

      <p className="text-muted-foreground max-w-sm mb-6">{message}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="min-w-[140px]"
        >
          <RefreshCcw className="h-4 w-4 mr-2" />
          تحديث الصفحة
        </Button>
      </div>
    </div>
  );
};

export default ErrorState;
