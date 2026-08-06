---
name: I_PRODNRTGMISCPRTASSGMTDEX
description: Prodn Rtg Miscellaneous PRT Assignment
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMISCPRTASSGMTDEX')/$value
semantic_en: Prodn Rtg Miscellaneous PRT Assignment
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_PRODNRTGMISCPRTASSGMTDEX

**Prodn Rtg Miscellaneous PRT Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGMISCPRTASSGMTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillOfOperationsType` | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | `CHAR(8)` | Key for Task List Group |
| `BOOOperationPRTInternalID` | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `BOOOperationPRTIntVersCounter` | `NUMC(8)` | Internal counter |
| `ProductionRouting` | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` | `NUMC(8)` | Number of the Task List Node |
| `BillOfOperationsVersion` | `CHAR(4)` | Routing Version |
| `ProdnRsceToolItemNumber` | `NUMC(4)` | Item Number for Production Resource/Tool |
| `ProductionResourceType` | `CHAR(2)` | Object types of the CIM resource |
| `ProductionResourceInternalID` | `NUMC(8)` | Object ID of the resource |
| `MiscProductionResourceTool` | `CHAR(18)` | Miscellaneous Production Resources and Tools |
| `ProdnRsceToolControlProfile` | `CHAR(4)` | Control Profile for Management of Production Resources/Tools |
| `ProdnRsceToolStandardTextCode` | `CHAR(7)` | Standard Text Key for Production Resources/Tools |
| `ProdnRsceToolText` | `CHAR(40)` | First Line of Text for Production Resources/Tools |
| `CreationDate` | `DATS(8)` | Date Record Created On |
| `CreatedByUser` | `CHAR(12)` | Created By User |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By User |
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to date |
| `IsDeleted` | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` | `CHAR(1)` | Deletion Indicator |
| `ProdnRsceToolStdWorkQtyUnit` | `UNIT(3)` | Unit for Quantity of Production Resources/Tools |
| `ProdnRsceToolStandardWorkQty` | `QUAN(9)` | Standard Value for Quantity of Production Resources/Tools |
| `ProdnRsceToolTotQtyCalcFormula` | `CHAR(6)` | Formula for Calculating the Total Quantity of PRT |
| `ProdnRsceToolUsageQuantityUnit` | `UNIT(3)` | Usage Value Unit of the Production Resource/Tool |
| `ProdnRsceToolUsageQuantity` | `QUAN(9)` | Standard Usage Value for Production Resources/Tools |
| `ProdnRsceToolUsageQtyCalcFmla` | `CHAR(6)` | Formula for Calculating the Total Usage Value of PRT |
| `StartDateOffsetReferenceCode` | `CHAR(2)` | Reference Date for Start of Production Resource/Tool Usage |
| `StartDateOffsetDurationUnit` | `UNIT(3)` | Offset Unit for Start of Prodn Resource/Tool Usage |
| `StartDateOffsetDuration` | `QUAN(5)` | Offset to start of production resource/tool usage |
| `EndDateOffsetReferenceCode` | `CHAR(2)` | Reference date for end of production resource/tool usage |
| `EndDateOffsetDurationUnit` | `UNIT(3)` | Offset Unit for End of Production Resource/Tool Usage |
| `EndDateOffsetDuration` | `QUAN(5)` | Offset to finish of production resource/tool usage |
