---
name: I_MAINTTASKLISTOPPRTCUBE
description: "Maint Task List Operation PRT - Cube"
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value
semantic_en: "Maint Task List Operation PRT - Cube"
semantic_vi: "Maint Task List Operation PRT - Cube — CDS view giao diện dựa trên P_MaintTaskListOpPRT."
keywords:
  - "maint"
  - "task"
  - "list"
  - "operation"
  - "prt"
  - "cube"
  - "type"
  - "group"
  - "counter"
  - "sequence"
  - "internal"
tags:
  - PM
  - component:PM-2CL
  - interface-view
  - lob:plant maintenance
  - PM-2CL
  - task
---
# I_MAINTTASKLISTOPPRTCUBE

**Maint Task List Operation PRT - Cube**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `TaskListSequence` | ✓ | |  |  | `CHAR(6)` | Sequence |
| `TaskListOperationInternalId` | ✓ | |  |  | `NUMC(8)` | Number of the Task List Node |
| `TaskListOpPRTIntID` | ✓ | |  |  | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `TaskListOpPRTIntVersCounter` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ProdnRsceToolItemNumber` |  | |  |  | `NUMC(4)` | Item Number for Production Resource/Tool |
| `ProdnRsceToolStandardWorkQty` |  | |  |  | `QUAN(9)` | Standard Value for Quantity of Production Resources/Tools |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  | `UNIT(3)` | Unit for Quantity of Production Resources/Tools |
| `ProdnRsceToolUsageQuantity` |  | |  |  | `QUAN(9)` | Standard Usage Value for Production Resources/Tools |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  | `UNIT(3)` | Usage Value Unit of the Production Resource/Tool |
| `ProductionResourceType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `ProductionResourceInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `ProdnRsceToolText` |  | |  |  | `CHAR(40)` | First Line of Text for Production Resources/Tools |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `_ProductionResourceType` | | ✓ | | | | |
| `_ProdnRsceToolMasterData` | | ✓ | | | | |
| `_ProductionResourceToolUnit` | | ✓ | | | | |
| `_ProdnResourceToolUsageUnit` | | ✓ | | | | |
| `_MaintenanceTaskList` | | ✓ | | | | |
| `_ProdnRsceToolByInternalKey` | | ✓ | | | | |
| `_TaskListType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Maint Task List Operation PRT - Cube'

@VDM.viewType: #COMPOSITE

@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED },
  supportedCapabilities:
    [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_CUBE }

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMAINTSLOPPRTC' }

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true }

define view entity I_MaintTaskListOpPRTCube
  as select from P_MaintTaskListOpPRT 
  
{
      @ObjectModel.foreignKey.association: '_TaskListType'
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListSequence,
  key TaskListOperationInternalId,
  key TaskListOpPRTIntID,
  key TaskListOpPRTIntVersCounter,

      ProdnRsceToolItemNumber,
      
      @Semantics.quantity.unitOfMeasure: 'PRODNRSCETOOLSTDWORKQTYUNIT' 
      ProdnRsceToolStandardWorkQty,     
      ProdnRsceToolStdWorkQtyUnit,     
      
      @Semantics.quantity.unitOfMeasure: 'PRODNRSCETOOLUSAGEQUANTITYUNIT' 
      ProdnRsceToolUsageQuantity,      
      ProdnRsceToolUsageQuantityUnit,          
      ProductionResourceType,     
      ProductionResourceInternalID,      
      ProdnRsceToolText,      
      IsDeleted,

      _ProductionResourceType,
      _ProdnRsceToolMasterData,
      _ProductionResourceToolUnit,
      _ProdnResourceToolUsageUnit,
      _MaintenanceTaskList,
      _ProdnRsceToolByInternalKey,
      _TaskListType
}
```
