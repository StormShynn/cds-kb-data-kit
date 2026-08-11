---
name: I_PRODUCTCOSTESTIMATEERRORLOG
description: "This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value
semantic_en: "This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction."
tags:
  - CO
  - bo:material
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - product
  - metadata-only
---
# I_PRODUCTCOSTESTIMATEERRORLOG

**This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingErrorLogApplication` |  | |  |  | `CHAR(4)` | Error Management in the Application |
| `CostingErrorLogID` |  | |  |  | `NUMC(12)` | Error Management Number |
| `CostingErrorMessageSequence` |  | |  |  | `NUMC(5)` | Total Number of System Messages |
| `CostingErrorLogCreationDate` |  | |  |  | `DATS(8)` | Date on Which Error Log Was Generated |
| `CostingErrorLogCreationTime` |  | |  |  | `TIMS(6)` | Application log: time |
| `CostingErrorLogCreatedByUser` |  | |  |  | `CHAR(12)` | User ID of User Who Saved the Log |
| `CostingErrorLogObject` |  | |  |  | `CHAR(4)` | Object ID for Processing Within PPC Error Analysis |
| `SystemMessageClass` |  | |  |  | `CHAR(20)` | Application Area |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | Message number |
| `CostingErrorMessageType` |  | |  |  | `CHAR(1)` | Message Type |
| `SystemMessageVariable1` |  | |  |  | `CHAR(50)` | Message Variable |
| `SystemMessageVariable2` |  | |  |  | `CHAR(50)` | Message Variable |
| `SystemMessageVariable3` |  | |  |  | `CHAR(50)` | Message Variable |
| `SystemMessageVariable4` |  | |  |  | `CHAR(50)` | Message Variable |
| `CostgErrorMsgIsObjectDependent` |  | |  |  | `CHAR(1)` | Object-Dependent System Message |
| `CostingErrorLogObjectName` |  | |  |  | `CHAR(100)` | Application-Indep. Object for Which Messages Are Collected |
