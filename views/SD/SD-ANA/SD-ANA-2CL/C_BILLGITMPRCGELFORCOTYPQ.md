---
name: C_BILLGITMPRCGELFORCOTYPQ
description: Billing Item Pricing Element for Condition Type - Query
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value
semantic_en: Billing Item Pricing Element for Condition Type - Query
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - pricing
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_BILLGITMPRCGELFORCOTYPQ

**Billing Item Pricing Element for Condition Type - Query**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BILLGITMPRCGELFORCOTYPQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` |  | |  |  | `NUMC(6)` | Billing Document Item |
| `PricingProcedureStep` |  | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` |  | |  |  | `NUMC(3)` | Condition Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ReturnItemProcessingType` |  | |  |  | `CHAR(1)` | Processing Type of Return Item |
| `BillingDocumentCategory` |  | |  |  | `CHAR(1)` | Billing Category |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `PricingDateTime` |  | |  |  | `CHAR(14)` | Timestamp for Pricing |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingDocumentDateYear` |  | |  |  | `NUMC(4)` | Year of Billing |
| `BillingDocDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` |  | |  |  | `NUMC(6)` | Month/Year of Billing |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `ConditionSequentialNumber` |  | |  |  | `NUMC(3)` | Sequential Number of the Condition |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionAmountInDC` |  | |  |  | `CURR(23)` | Condition Value in Display Currrency |
| `NormalizedConditionAmountInDC` |  | |  |  | `CURR(23)` | Condition Value in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |
