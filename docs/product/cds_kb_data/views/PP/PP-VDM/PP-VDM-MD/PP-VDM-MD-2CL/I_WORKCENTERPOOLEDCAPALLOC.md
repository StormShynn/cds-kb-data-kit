---
name: I_WORKCENTERPOOLEDCAPALLOC
description: "Work Center Pooled Capacity Allocation"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value
semantic_en: "Work Center Pooled Capacity Allocation"
semantic_vi: "Work Center Pooled Capacity Allocation — CDS view giao diện dựa trên I_Capacity."
keywords:
  - "work"
  - "center"
  - "pooled"
  - "capacity"
  - "allocation"
  - "internal"
  - "type"
  - "code"
  - "category"
  - "last"
  - "change"
  - "date"
tags:
  - PP
  - bo:purchaseorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_WORKCENTERPOOLEDCAPALLOC

**Work Center Pooled Capacity Allocation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | ✓ | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | ✓ | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterCategoryCode` |  | |  |  | `CHAR(4)` | Work Center Category |
| `CapacityCategoryCode` |  | |  |  | `CHAR(3)` | Capacity Category |
| `Capacity` |  | |  |  | `CHAR(8)` | Capacity name |
| `SetupCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Setup Capacity Requirements |
| `ProcgCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Processing Capacity Requirements |
| `TeardownCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Teardown Capacity Requirements |
| `OtherCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Other Capacity Requirements |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkCenterLastChangeDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
| `_WorkCenterCapMap` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenterCapMap` | `I_WorkCenterCapacity` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
//@VDM: { viewType: #COMPOSITE, lifecycle.contract.type: #SAP_INTERNAL_API }
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Center Pooled Capacity Allocation'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'WorkCenterPooledCapacityAlloc'

define view entity I_WorkCenterPooledCapAlloc
   as select from I_Capacity           as Cap
  inner join   I_WorkCenterCapacity as CapMap on Cap.CapacityInternalID = CapMap.CapacityInternalID
  
  association [1..1] to I_WorkCenterCapacity as _WorkCenterCapMap on  $projection.WorkCenterInternalID       = _WorkCenterCapMap.WorkCenterInternalID
                                                                  and $projection.WorkCenterTypeCode         = _WorkCenterCapMap.WorkCenterTypeCode
                                                                  and $projection.CapacityCategoryAllocation = _WorkCenterCapMap.CapacityCategoryAllocation
  
{     
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key CapMap.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key CapMap.WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_WorkCenterCapMap'
  key CapMap.CapacityCategoryAllocation,
  key CapMap.CapacityInternalID,
      CapMap.LastChangeDate,
      CapMap.LastChangedByUser,
      Cap.Plant,
      CapMap.WorkCenter,
      CapMap.WorkCenterCategoryCode,
      Cap.CapacityCategoryCode,
      Cap.Capacity,
      CapMap.SetupCapRequirementFormula,
      CapMap.ProcgCapRequirementFormula,
      CapMap.TeardownCapRequirementFormula,
      CapMap.OtherCapRequirementFormula,
      CapMap.ValidityStartDate,
      CapMap.ValidityEndDate,
      CapMap.WorkCenterLastChangeDateTime,
      
      // Associations
      CapMap._WorkCenter,
      CapMap._WorkCenterTypeCode,
      _WorkCenterCapMap
      
      
}
where
      CapMap.WorkCenterTypeCode = 'A'
  and Cap.CapacityIsPooled   is not initial
```
