import { AdminSection } from "@/utils/types";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Clock,
  Edit,
  Eye,
  FileText,
  MessageSquare,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react";

// Helper function to remove "all" option from arrays
const removeFirstItem = <T>(array: T[]): T[] => array.slice(1);

// sy cities
export const syCities = [
  { value: "all-cities", label: "جميع المدن" },
  { value: "damascus", label: "دمشق" },
  { value: "damascus-countryside", label: "ريف دمشق" },
  { value: "aleppo", label: "حلب" },
  { value: "homs", label: "حمص" },
  { value: "latakia", label: "اللاذقية" },
  { value: "tartus", label: "طرطوس" },
  { value: "hama", label: "حماة" },
  { value: "deir-ez-zor", label: "دير الزور" },
  { value: "raqqa", label: "الرقة" },
  { value: "idlib", label: "إدلب" },
  { value: "daraa", label: "درعا" },
  { value: "quneitra", label: "القنيطرة" },
  { value: "as-suwayda", label: "السويداء" },
  { value: "hasakah", label: "الحسكة" },
];

export const syCitiesWithoutAll = removeFirstItem(syCities);

// إحصائيات سريعة

export const statsCards = [
  {
    title: "إجمالي الخدمات",
    value: "219",
    icon: ClipboardList,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "التقارير",
    value: "0",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "بانتظار المراجعة",
    value: "3",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    title: "إجمالي البلاغات",
    value: "2",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];
export const servicesStatsCards = [
  {
    title: "إجمالي الخدمات",
    value: "219",
    icon: ClipboardList,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },

  {
    title: "بانتظار المراجعة",
    value: "3",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    title: "الخدمات المقبولة",
    value: "200",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    title: "إجمالي البلاغات",
    value: "2",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

export const adminSections: AdminSection[] = [
  {
    title: "إدارة الخدمات",
    description: "إدارة ومراجعة الخدمات المسجلة",
    icon: FileText,
    iconColor: "text-blue-500",
    buttonText: "عرض الخدمات",
    buttonIcon: Eye,
    path: "/admin/services",
  },
  {
    title: "إدارة التعديلات",
    description: "مراجعة وإدارة تعديلات المستخدمين",
    icon: Edit,
    iconColor: "text-green-500",
    buttonText: "إدارة التعديلات",
    buttonIcon: Edit,
    path: "/admin/edits",
  },
  {
    title: "إدارة البلاغات",
    description: "مراجعة وإدارة بلاغات المستخدمين",
    icon: MessageSquare,
    iconColor: "text-orange-500",
    buttonText: "إدارة البلاغات",
    buttonIcon: AlertTriangle,
    path: "/admin/reports",
  },
  {
    title: "التقارير والإحصائيات",
    description: "عرض التقارير والإحصائيات التفصيلية",
    icon: BarChart3,
    iconColor: "text-purple-500",
    buttonText: "عرض التقارير",
    buttonIcon: TrendingUp,
    path: "/admin/analytics",
  },
  {
    title: "الإعدادات العامة",
    description: "تكوين إعدادات النظام والموقع",
    icon: Settings,
    iconColor: "text-gray-500",
    buttonText: "فتح الإعدادات",
    buttonIcon: Settings,
    path: "/admin/settings",
  },
  {
    title: "الأمان والحماية",
    description: "إدارة الأمان وسجلات النظام",
    icon: Shield,
    iconColor: "text-red-500",
    buttonText: "إعدادات الأمان",
    buttonIcon: Shield,
    path: "/admin/security",
  },
];
