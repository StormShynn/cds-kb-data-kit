---
name: I_ACTUALPLANSTATKEYFIGSEMTAG
description: Semantic Tag with Statistical Key Figure
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value
semantic_en: Semantic Tag with Statistical Key Figure
keywords:
  - Semantic Tag with Statistical Key Figure
  - Semantic Tag with Statistical Key Figure
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ACTUALPLANSTATKEYFIGSEMTAG

**Semantic Tag with Statistical Key Figure**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `StatisticalKeyFigure` | `CHAR(6)` | Statistical Key Figure |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `StatisticalKeyFigureItem` | `CHAR(22)` | Statistical Key Figure Item |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid-From Date |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `StatisticalKeyFigureCategory` | `CHAR(1)` | Statistical Key Figure Category |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PostingDate` | `DATS(8)` | Posting Date |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `StatKeyFigurePlanningCategory` | `CHAR(10)` | Statistical Key Figure Plan Category |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `ActualPlanStatKeyFigureCode` | `CHAR(2)` | Actual Plan Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` | `CURR(23)` | Inverted Amount in Global Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `StatisticalKeyFigQtyUnit` | `UNIT(3)` | Statistical Key Figure Quantity Unit |
| `StatisticalKeyFigureQuantity` | `QUAN(23)` | Statistical Key Figure Quantity |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `PartnerProjectProfileCode` | `CHAR(7)` | Project Profile |
| `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `SemanticTagGroup` | `CHAR(4)` | Semantic Tag Group |
| `CreationTime` | `TIMS(6)` | Creation Time |
| `CreationDate` | `DATS(8)` | Creation Date |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` | `CHAR(2)` | Object Type |
| `PartnerAccountAssignment` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderID` | `CHAR(12)` | Order ID |
| `ControllingBusTransacType` | `CHAR(4)` | FI-SL Business Transaction |
| `SalesDocument` | `CHAR(10)` | Sales Order Number |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `Plant` | `CHAR(4)` | Plant |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
