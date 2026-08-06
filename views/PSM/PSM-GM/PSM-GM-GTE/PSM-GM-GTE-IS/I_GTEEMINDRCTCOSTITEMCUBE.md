---
name: I_GTEEMINDRCTCOSTITEMCUBE
description: Grant Indirect Cost Item - Cube
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value
semantic_en: Grant Indirect Cost Item - Cube
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_GTEEMINDRCTCOSTITEMCUBE

**Grant Indirect Cost Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantType` | `CHAR(2)` | Grant Type |
| `GteeMIndrctCostShrngRule` | `NUMC(4)` | Rule for Determining Indirect Costs |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to Date |
| `SponsoredClassType` | `CHAR(1)` | Sponsored Class Type |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `Fund` | `CHAR(10)` | Fund |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Supplier |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `Plant` | `CHAR(4)` | Plant |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `OrderID` | `CHAR(12)` | Order ID |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `IndirectCostAmtInCoCodeCrcy` | `CURR(23)` | Indirect Cost Amount in Company Code Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
