---
name: C_ENGMNTPROJBILLGANDRBLSQRY
description: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - customer
  - invoice
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# C_ENGMNTPROJBILLGANDRBLSQRY

**This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `BillingPlanBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledAmountInProjectCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingPlanAmount` |  | |  |  | `CURR(15)` | Value to be billed/calc. on date in billing/invoice plan |
| `SalesOrderNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `DebitMemoRequestNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `RemainingContractBillingAmt` |  | |  |  | `INT1(3)` |  |
| `BillingReqTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `BillingReqTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |
| `OpenBillingRequestAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingRequestOverdueAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `WriteOffAmount` |  | |  |  | `CURR(15)` | Sum never |
| `TotalReceivablesAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ReceivablesTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `ReceivablesTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |
