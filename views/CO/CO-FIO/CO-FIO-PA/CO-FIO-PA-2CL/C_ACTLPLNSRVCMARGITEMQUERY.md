---
name: C_ACTLPLNSRVCMARGITEMQUERY
description: Actual and Plan Service Marg Item - Qry
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value
semantic_en: Actual and Plan Service Marg Item - Qry
keywords:
  - Actual and Plan Service Marg Item - Qry
  - Actual and Plan Service Marg Item - Qry
  - Actual and Plan Service Marg Item - Qry
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - plan
  - metadata-only
---
# C_ACTLPLNSRVCMARGITEMQUERY

**Actual and Plan Service Marg Item - Qry**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Revenue Recognition Key |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `OldGLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Valuation Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ActualTotalAmount` |  | |  |  | `DEC(23)` | Actuals |
| `BaselineTotalAmount` |  | |  |  | `DEC(23)` | Baseline |
| `DeltaActualBaselineAmount` |  | |  |  | `DEC(23)` | Actual △ Baseline |
| `DeltaActualBaselineRatio` |  | |  |  | `DEC(23)` | %Actual △ Baseline |
| `OnGoingTotalAmount` |  | |  |  | `DEC(23)` | Ongoing |
| `DeltaActualOnGoingAmount` |  | |  |  | `DEC(23)` | Actual △ Ongoing |
| `DeltaActualOnGoingRatio` |  | |  |  | `DEC(23)` | %Actual △ OnGoing |
| `DeltaBaselineOnGoingAmount` |  | |  |  | `DEC(23)` | Baseline △ OnGoing |
| `DeltaBaselineOnGoingRatio` |  | |  |  | `DEC(23)` | %Baseline △ OnGoing |
