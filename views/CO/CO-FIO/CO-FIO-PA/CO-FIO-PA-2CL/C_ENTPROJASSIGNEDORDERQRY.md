---
name: C_ENTPROJASSIGNEDORDERQRY
description: Enterprise Project Assigned Orders Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value
semantic_en: Enterprise Project Assigned Orders Query
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - order
  - project
  - metadata-only
---
# C_ENTPROJASSIGNEDORDERQRY

**Enterprise Project Assigned Orders Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `AssignedOrderNumber` | `CHAR(12)` | Standing order number |
| `ETOOrdCategory` | `CHAR(2)` | Order Category |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `OrderID` | `CHAR(12)` | Order ID |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Plant` | `CHAR(4)` | Plant |
| `Product` | `CHAR(40)` | Product |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
| `Currency` | `CUKY(5)` | Currency Key |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
