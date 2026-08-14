// ============================================================
// HOECHEM SACCO — Shared TypeScript Types
// ============================================================

// ---- Enums ----

export enum UserRole {
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  INACTIVE = 'INACTIVE',
}

export enum MembershipStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum LoanStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  DEFAULTED = 'DEFAULTED',
  WRITTEN_OFF = 'WRITTEN_OFF',
}

export enum LoanApplicationStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DISBURSED = 'DISBURSED',
}

export enum LoanType {
  DEVELOPMENT = 'DEVELOPMENT',
  SCHOOL_FEES = 'SCHOOL_FEES',
  EMERGENCY = 'EMERGENCY',
  REFINANCING = 'REFINANCING',
  RESTRUCTURING = 'RESTRUCTURING',
  MPESA = 'MPESA',
  DIGITAL = 'DIGITAL',
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  LOAN_DISBURSEMENT = 'LOAN_DISBURSEMENT',
  LOAN_REPAYMENT = 'LOAN_REPAYMENT',
  TRANSFER = 'TRANSFER',
  DIVIDEND = 'DIVIDEND',
  PENALTY = 'PENALTY',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REVERSED = 'REVERSED',
}

export enum NotificationType {
  ACCOUNT = 'ACCOUNT',
  LOAN = 'LOAN',
  SAVINGS = 'SAVINGS',
  SYSTEM = 'SYSTEM',
  ANNOUNCEMENT = 'ANNOUNCEMENT',
}

// ---- Core Entities ----

export interface User {
  id: string
  email: string
  role: UserRole
  status: UserStatus
  emailVerified: boolean
  createdAt: string
  updatedAt: string
  memberProfile?: MemberProfile
}

export interface MemberProfile {
  id: string
  userId: string
  memberNumber: string
  firstName: string
  lastName: string
  idNumber: string
  phone: string
  dateOfBirth?: string
  gender?: string
  address?: string
  city?: string
  county?: string
  occupation?: string
  employer?: string
  photoUrl?: string
  idDocumentUrl?: string
  nextOfKinName?: string
  nextOfKinPhone?: string
  nextOfKinRelationship?: string
  createdAt: string
  updatedAt: string
  user?: User
  savingsAccount?: SavingsAccount
  shareAccount?: ShareAccount
}

export interface MembershipApplication {
  id: string
  userId: string
  status: MembershipStatus
  firstName: string
  lastName: string
  idNumber: string
  phone: string
  dateOfBirth?: string
  gender?: string
  address?: string
  occupation?: string
  employer?: string
  monthlyIncome?: number
  referredBy?: string
  reviewedBy?: string
  reviewedAt?: string
  rejectionReason?: string
  createdAt: string
  updatedAt: string
  user?: User
}

export interface SavingsAccount {
  id: string
  memberId: string
  accountNumber: string
  balance: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  member?: MemberProfile
  transactions?: SavingsTransaction[]
}

export interface SavingsTransaction {
  id: string
  accountId: string
  type: TransactionType
  amount: number
  balance: number
  reference: string
  description?: string
  status: TransactionStatus
  processedAt?: string
  createdAt: string
  account?: SavingsAccount
}

export interface ShareAccount {
  id: string
  memberId: string
  accountNumber: string
  sharesBalance: number
  unitPrice: number
  totalValue: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Loan {
  id: string
  memberId: string
  applicationId: string
  loanNumber: string
  type: LoanType
  principal: number
  interestRate: number
  termMonths: number
  status: LoanStatus
  disbursedAt?: string
  maturityDate?: string
  outstandingBalance: number
  totalRepaid: number
  nextPaymentDate?: string
  nextPaymentAmount?: number
  createdAt: string
  updatedAt: string
  member?: MemberProfile
  application?: LoanApplication
  repayments?: LoanRepayment[]
}

export interface LoanApplication {
  id: string
  memberId: string
  type: LoanType
  amount: number
  termMonths: number
  purpose: string
  status: LoanApplicationStatus
  monthlyIncome?: number
  guarantors?: string
  documents?: LoanDocument[]
  reviewedBy?: string
  reviewedAt?: string
  rejectionReason?: string
  disbursementAccount?: string
  createdAt: string
  updatedAt: string
  member?: MemberProfile
  loan?: Loan
}

export interface LoanRepayment {
  id: string
  loanId: string
  installmentNumber: number
  dueDate: string
  dueAmount: number
  principalAmount: number
  interestAmount: number
  paidAmount: number
  paidAt?: string
  status: 'PENDING' | 'PAID' | 'OVERDUE' | 'PARTIAL'
  reference?: string
  loan?: Loan
}

export interface LoanDocument {
  id: string
  applicationId: string
  name: string
  url: string
  type: string
  uploadedAt: string
}

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  link?: string
  createdAt: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  category?: string
  isPublished: boolean
  publishedAt?: string
  imageUrl?: string
  authorId: string
  createdAt: string
  updatedAt: string
  author?: User
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  isRead: boolean
  respondedAt?: string
  createdAt: string
}

export interface AuditLog {
  id: string
  userId?: string
  action: string
  entityType: string
  entityId?: string
  oldValues?: Record<string, unknown>
  newValues?: Record<string, unknown>
  ipAddress?: string
  userAgent?: string
  createdAt: string
  user?: User
}

// ---- API Response Types ----

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export interface PaginationQuery {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// ---- Auth Types ----

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
  idNumber: string
  phone: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

// ---- Dashboard Types ----

export interface MemberDashboard {
  member: MemberProfile
  savingsBalance: number
  sharesBalance: number
  sharesValue: number
  activeLoanBalance: number
  nextPaymentAmount?: number
  nextPaymentDate?: string
  projectedDividends: number
  recentTransactions: SavingsTransaction[]
  activeLoan?: Loan
  notifications: Notification[]
}

export interface AdminDashboard {
  totalMembers: number
  activeMembers: number
  pendingApplications: number
  totalSavings: number
  totalLoans: number
  totalLoansIssued: number
  repaymentRate: number
  monthlyStats: MonthlyStats[]
}

export interface MonthlyStats {
  month: string
  deposits: number
  loans: number
  repayments: number
  newMembers: number
}

// ---- Loan Calculator Types ----

export interface LoanCalculatorInput {
  principal: number
  interestRate: number
  termMonths: number
  type: 'reducing_balance' | 'flat_rate'
}

export interface LoanCalculatorResult {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  schedule: RepaymentScheduleItem[]
}

export interface RepaymentScheduleItem {
  month: number
  dueDate: string
  openingBalance: number
  principal: number
  interest: number
  installment: number
  closingBalance: number
}
