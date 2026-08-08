---
name: I_MAINTORDEROPPRODNRSCETOOLTP
description: "Maintorderopprodnrscetooltp"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPPRODNRSCETOOLTP

**Maintorderopprodnrscetooltp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `MaintenanceOrderOperation` | ✓ | |  |  |  |  |
| `MaintenanceOrderSubOperation` | ✓ | |  |  |  |  |
| `ProdnRsceToolItemNumber` | ✓ | |  |  |  |  |
| `OrderProdnRsceToolText` |  | |  |  |  |  |
| `ProdnRsceToolCategory` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `MiscProductionResourceTool` |  | |  |  |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |  |  |
| `ProdnRsceToolStandardWorkQty` |  | |  |  |  |  |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `DocumentInfoRecord` |  | |  |  |  |  |
| `DocumentType` |  | |  |  |  |  |
| `DocumentPart` |  | |  |  |  |  |
| `DocumentVersion` |  | |  |  |  |  |
| `MeasuringPoint` |  | |  |  |  |  |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Operation PRT - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpProdnRsceToolTP
  as projection on R_MaintOrderOpProdnRsceToolTP
{
  key     MaintenanceOrder,
  key     MaintenanceOrderOperation,
  key     MaintenanceOrderSubOperation,
  key     ProdnRsceToolItemNumber,

          OrderProdnRsceToolText,
          ProdnRsceToolCategory,
          Product,
          MiscProductionResourceTool,
          ProdnRsceToolControlProfile,
          @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
          ProdnRsceToolStandardWorkQty,
          ProdnRsceToolStdWorkQtyUnit,
          Plant,

          Equipment,
          DocumentInfoRecord,
          DocumentType,
          DocumentPart,
          DocumentVersion,
          MeasuringPoint,

          _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
          _MaintenanceOrderOperation : redirected to parent I_MaintenanceOrderOperationTP
}
```
