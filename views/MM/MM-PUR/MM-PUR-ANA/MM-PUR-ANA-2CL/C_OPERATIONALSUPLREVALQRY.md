---
name: C_OPERATIONALSUPLREVALQRY
description: Operational Supplier Evaluation Score
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value
semantic_en: Operational Supplier Evaluation Score
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_OPERATIONALSUPLREVALQRY

**Operational Supplier Evaluation Score**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalCritraDelivCompleted` | `CHAR(10)` | Delivery Completed |
| `SuplrEvalRelevantDocCategory` | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `PurchaseOrderDate` | `DATS(8)` | Purchasing Document Date |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Plant` | `CHAR(4)` | Plant |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `PurchasingDocumentCategory` | `CHAR(1)` | Purchasing Document Category |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `TimeVarianceScore` | `FLTP(16)` | Time Variance Score |
| `PriceVarianceScore` | `FLTP(16)` | Price Variance Score |
| `QuantityVarianceScore` | `FLTP(16)` | Quantity Variance Score |
| `InspectionLotQualityScore` | `FLTP(16)` | Inspection Lot Score |
| `QualityNotificationScore` | `FLTP(16)` | Quality Notification Score |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` | `INT4(10)` | Number of Purchase Order Items |
| `PurchaseOrderNetPriceAmount` | `CURR(21)` | Purchase Order Net Amount |
| `NmbrOfPOWithPriceVariance` | `INT4(10)` |  |
| `NmbrOfPOWithQuantityVariance` | `INT4(10)` |  |
| `NmbrOfPOWithTimeVariance` | `INT4(10)` |  |
| `NmbrOfPOWithQualityVariance` | `INT4(10)` |  |
| `QualityNotificationCount` | `INT4(10)` |  |
| `SuplrEvalTimeVarianceScoreVal` | `DEC(15)` |  |
| `PriceVarianceScoreValue` | `DEC(15)` |  |
| `TotalQuantityVarianceScore` | `DEC(15)` |  |
| `InspectionLotQltyScoreValue` | `DEC(15)` |  |
| `QualityNotifVarianceScoreValue` | `DEC(15)` |  |
| `NmbrOfScoredSuppliers` | `INT4(10)` | Count of Scored Suppliers |
| `SupplierOperationalScore` | `DEC(4)` | Supplier Operational Score |
| `SuplrEvalOplScoreValue` | `DEC(6)` | Supplier Operational Score |
| `PurchasingSpendRatioInPercent` | `DEC(15)` |  |
| `CalculatedOperationalScore` | `DEC(5)` | Variance Score |
| `CalcdSuplrEvalOplScoreValue` | `DEC(6)` | Supplier Operational Score |
| `SupplierClassification` | `CHAR(1)` | Supplier Evaluation Weighting and Scoring Classification |
