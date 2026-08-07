---
name: I_MAINTORDERACTUALCOSTDATACUBE
description: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value
semantic_en: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
keywords:
  - "Maintenance Order Actual Cost - Analytics Cube"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - material
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTORDERACTUALCOSTDATACUBE

**This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `PostingMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order ID |
| `MaintenanceOrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MaintOrdMainWorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `MaintOrdMainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `IsSettlement` |  | |  |  | `CHAR(1)` |  |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `EquipmentName` |  | |  |  | `CHAR(40)` | Description of technical object |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
| `FunctionalLocationName` |  | |  |  | `CHAR(40)` | Description of functional location |
| `ManufacturerPartTypeName` |  | |  |  | `CHAR(20)` | Manufacturer model number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `TechnicalObjectType` |  | |  |  | `CHAR(10)` | Type of Technical Object |
| `AssetManufacturerName` |  | |  |  | `CHAR(30)` | Manufacturer of Asset |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `LocAcctAssgmtControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LocAcctAssgmtCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | G/L Account Hierarchy |
| `CostElementGroup` |  | |  |  | `CHAR(50)` | Hierarchy parent node |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
