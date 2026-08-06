---
name: C_MAINTORDACTUALCOSTDATAQ
description: Maintenance Order Actual Cost Data Query
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value
semantic_en: Maintenance Order Actual Cost Data Query
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# C_MAINTORDACTUALCOSTDATAQ

**Maintenance Order Actual Cost Data Query**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDACTUALCOSTDATAQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `PostingMonth` | `NUMC(2)` | Calendar Month |
| `MaintenanceOrder` | `CHAR(12)` | Order ID |
| `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintenanceOrderIsPlanned` | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` | `CHAR(1)` | Maintenance order planning indicator |
| `MaintOrdMainWorkCenter` | `CHAR(8)` | Work Center |
| `MaintOrdMainWorkCenterPlant` | `CHAR(4)` | Plant |
| `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` | `CHAR(16)` | Maintenance Item |
| `PlantSection` | `CHAR(3)` | Plant Section |
| `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `WorkCenter` | `CHAR(8)` | Work Center |
| `WorkCenterPlant` | `CHAR(4)` | Plant |
| `MaintenanceActivityType` | `CHAR(3)` | Maintenance activity type |
| `FunctionalLocationLabelName` | `CHAR(40)` | Functional Location Label |
| `ManufacturerPartTypeName` | `CHAR(20)` | Manufacturer model number |
| `Assembly` | `CHAR(40)` | Assembly |
| `TechnicalObjectType` | `CHAR(10)` | Type of Technical Object |
| `AssetManufacturerName` | `CHAR(30)` | Manufacturer of Asset |
| `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CatalogProfile` | `CHAR(9)` | Catalog Profile |
| `ConstructionMaterial` | `CHAR(40)` | Construction type material of the object |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `LocAcctAssgmtControllingArea` | `CHAR(4)` | Controlling Area |
| `LocAcctAssgmtCostCenter` | `CHAR(10)` | Cost Center |
| `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `CostElementGroup` | `CHAR(50)` | Hierarchy parent node |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `GLAccountHierarchy` | `CHAR(42)` | G/L Account Hierarchy |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
