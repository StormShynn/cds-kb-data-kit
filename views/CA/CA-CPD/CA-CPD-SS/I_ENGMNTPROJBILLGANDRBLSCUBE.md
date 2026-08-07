---
name: I_ENGMNTPROJBILLGANDRBLSCUBE
description: This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - invoice
  - lob:cross_application components
  - plan
  - metadata-only
---
# I_ENGMNTPROJBILLGANDRBLSCUBE

**This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `BillingPlanBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  |  | `CHAR(12)` |  |
| `ProjectManagerExternalID` |  | |  |  | `CHAR(60)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledAmountInProjectCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingPlanAmount` |  | |  |  | `CURR(15)` | Value to be billed/calc. on date in billing/invoice plan |
| `SalesOrderNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `DebitMemoRequestNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `BillingReqTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `BillingReqTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |
| `OpenBillingRequestAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingRequestOverdueAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `WriteOffAmount` |  | |  |  | `CURR(15)` | Sum never |
| `TotalReceivablesAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ReceivablesTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `ReceivablesTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |
