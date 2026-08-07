---
name: C_PCCEVTBSDWIPVARCQRY
description: This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value
semantic_en: This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - account
  - bo:companycode
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-PER
  - CO-PC-OBJ-PER-2CL
  - component:CO-PC-OBJ-PER-2CL
  - consumption-view
  - lob:controlling
  - order
  - plan
  - product
  - metadata-only
---
# C_PCCEVTBSDWIPVARCQRY

**This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Material Number for Order |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `RmngVarcAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `CostVarianceInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `WIPCostInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
