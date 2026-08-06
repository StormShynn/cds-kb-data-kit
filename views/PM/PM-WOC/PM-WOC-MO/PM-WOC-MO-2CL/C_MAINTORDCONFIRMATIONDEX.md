---
name: C_MAINTORDCONFIRMATIONDEX
description: Maintenance Order Conf Data Extractor
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value
semantic_en: Maintenance Order Conf Data Extractor
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# C_MAINTORDCONFIRMATIONDEX

**Maintenance Order Conf Data Extractor**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintOrderConf` | `NUMC(10)` | Completion confirmation number for the operation |
| `MaintOrderConfCntrValue` | `NUMC(8)` | Confirmation counter |
| `MaintOrderConfirmationEntryDte` | `DATS(8)` | Entry Date of Confirmation |
| `MaintOrderOperationCounter` | `NUMC(8)` | General counter for order |
| `MaintOrderRoutingNumber` | `NUMC(10)` | Routing Number of Operations in the Order |
| `EnteredByUser` | `CHAR(12)` | User who Entered the Confirmation |
| `LastChangeDate` | `DATS(8)` | Date of Last Change |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `PostingDate` | `DATS(8)` | Posting Date |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID |
| `ConfirmationText` | `CHAR(40)` | Confirmation text |
| `Language` | `LANG(1)` | Language Key |
| `VarianceReasonCode` | `CHAR(4)` | Reason for Variance |
| `NmbrOfMaintTechnicianCapSplits` | `INT1(3)` | Split number |
| `ActualWorkQuantity` | `QUAN(7)` | Actual work |
| `ActualWorkQuantityUnit` | `UNIT(3)` | Unit for Work |
| `ActivityType` | `CHAR(6)` | Activity Type for Confirmation |
| `ActualDuration` | `QUAN(5)` | Actual Duration for Confirmation |
| `ActualDurationUnit` | `UNIT(3)` | Unit for actual duration |
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` | `CHAR(4)` | Maintenance Order Operation |
| `MaintenanceOrderSubOperation` | `CHAR(4)` | Maintenance Order Suboperation |
| `IsFinalConfirmation` | `CHAR(1)` | Checkbox |
| `RemainingWorkQuantity` | `QUAN(7)` | Remaining Work |
| `RemainingWorkQuantityUnit` | `UNIT(3)` | Unit of Measure for Remaining Work |
| `IsReversed` | `CHAR(1)` | Indicator: Document was reversed |
| `IsReversal` | `CHAR(1)` | Checkbox |
| `CancldMaintOrderConfCntrValue` | `NUMC(8)` | Confirmation Counter of Cancelled Confirmation |
