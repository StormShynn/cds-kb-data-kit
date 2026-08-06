---
name: C_ARAGINGGRIDGENLEDGERQRY
description: This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value
semantic_en: This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_ARAGINGGRIDGENLEDGERQRY

**This CDS view provides you with an overview of the overdue receivables and receivables that will become due in the future based on the key date you enter. You can use the CDS view for many different reports, such as creating an aggregated view of the receivables per overdue interval and future due interval for an account, or a drill down to individual open receivable items. This CDS view provides the data to answer the following business questions, for example: How high are the overall total receivables? Which customers have total receivables? What are the open receivable items for a customer? Note that this CDS view cannot be accessed directly using SQL or custom CDS views. It receives its data from the G/L Perspective of AR Aging Grid - Cube (I_ARAgingGridGenLedgerCube). It can be used in the View Browser key user app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARAGINGGRIDGENLEDGERQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `Customer` | `CHAR(10)` | Customer Number |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `BillingDocument` | `CHAR(10)` | Billing Document |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `CustomerCountry` | `CHAR(3)` | Customer Country/Region |
| `CustomerRegion` | `CHAR(3)` | Region (Customer) |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `CustomerCorporateGroup` | `CHAR(10)` | Customer Corporate Group |
| `CustomerAccountNote` | `CHAR(30)` | Memo |
| `Reference1IDByBusinessPartner` | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `Reference3IDByBusinessPartner` | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CompanyCodeCountry` | `CHAR(3)` | Company Code Country/Region |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `OverdueIntvl7AmtInCoCodeCrcy` | `CURR(23)` | Amount in 7th Overdue Period (Company Currency) |
| `OverdueIntvl6AmtInCoCodeCrcy` | `CURR(23)` | Amount in 6th Overdue Period (Company Currency) |
| `OverdueIntvl5AmtInCoCodeCrcy` | `CURR(23)` | Amount in 5th Overdue Period (Company Currency) |
| `OverdueIntvl4AmtInCoCodeCrcy` | `CURR(23)` | Amount in 4th Overdue Period (Company Currency) |
| `OverdueIntvl3AmtInCoCodeCrcy` | `CURR(23)` | Amount in 3rd Overdue Period (Company Currency) |
| `OverdueIntvl2AmtInCoCodeCrcy` | `CURR(23)` | Amount in 2nd Overdue Period (Company Currency) |
| `OverdueIntvl1AmtInCoCodeCrcy` | `CURR(23)` | Amount in 1st Overdue Period (Company Currency) |
| `DueAtKeyDateAmtInCoCodeCrcy` | `CURR(23)` | Amount in Company Currency due at Key Date |
| `FutureDueIntvl1AmtInCoCodeCrcy` | `CURR(23)` | Amount in 1st Future Due Period (Company Currency) |
| `FutureDueIntvl2AmtInCoCodeCrcy` | `CURR(23)` | Amount in 2nd Future Due Period (Company Currency) |
| `FutureDueIntvl3AmtInCoCodeCrcy` | `CURR(23)` | Amount in 3rd Future Due Period (Company Currency) |
| `FutureDueIntvl4AmtInCoCodeCrcy` | `CURR(23)` | Amount in 4th Future Due Period (Company Currency) |
| `OverdueAmtInCoCodeCrcy` | `CURR(23)` | Overdue Amount in Company Currency |
| `NotOverdueAmtInCoCodeCrcy` | `CURR(23)` | Not Overdue Amount in Company Currency |
| `FutureDueAmtInCoCodeCrcy` | `CURR(23)` | Future Due Amount in Company Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Total Open Receivables Amount in Company Currency |
