"use client"

import * as React from "react"
import {
  ResponsiveContainer,
  AreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Area as RechartsArea,
  Bar as RechartsBar,
  Line as RechartsLine,
  Pie as RechartsPie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
} from "recharts"

import { cn } from "@/lib/utils"

// Chart Container
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full h-[350px]", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  ),
)
ChartContainer.displayName = "ChartContainer"

// Chart
interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ className, children, ...props }, ref) => {
  // Find the chart type from children
  const chartType = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) &&
      (child.type === Area || child.type === Bar || child.type === Line || child.type === PieChart),
  )

  // Default to LineChart if no chart type is found
  const ChartComponent = chartType
    ? React.isValidElement(chartType) && chartType.type === Area
      ? AreaChart
      : React.isValidElement(chartType) && chartType.type === Bar
        ? RechartsBarChart
        : React.isValidElement(chartType) && chartType.type === PieChart
          ? RechartsPieChart
          : RechartsLineChart
    : RechartsLineChart

  return (
    <ChartComponent width="100%" height="100%" {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      {children}
    </ChartComponent>
  )
})
Chart.displayName = "Chart"

// Area
const Area = RechartsArea

// Bar
const Bar = RechartsBar

// Line
const Line = RechartsLine

// PieChart
const PieChart = RechartsPie

// ChartTooltip
interface ChartTooltipProps {
  content?: React.ReactNode | ((props: any) => React.ReactNode)
  children?: React.ReactNode
}

const ChartTooltip = ({ content, children }: ChartTooltipProps) => {
  return <RechartsTooltip content={content}>{children}</RechartsTooltip>
}

// ChartTooltipContent
interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: {
    label: string
    value: string | number
    color?: string
  }[]
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, items = [], ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-background p-2 shadow-md", className)} {...props}>
      <div className="grid gap-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              {item.color && <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />}
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
            <span className="text-xs font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
)
ChartTooltipContent.displayName = "ChartTooltipContent"

// ChartLegend
interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: {
    label: string
    color: string
  }[]
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(({ className, items = [], ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-wrap items-center gap-4", className)} {...props}>
    {items.map((item, i) => (
      <ChartLegendItem key={i} label={item.label} color={item.color} />
    ))}
  </div>
))
ChartLegend.displayName = "ChartLegend"

// ChartLegendItem
interface ChartLegendItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  color: string
}

const ChartLegendItem = React.forwardRef<HTMLDivElement, ChartLegendItemProps>(
  ({ className, label, color, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-1", className)} {...props}>
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  ),
)
ChartLegendItem.displayName = "ChartLegendItem"

export {
  ChartContainer,
  Chart,
  Area,
  Bar,
  Line,
  PieChart,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
}

