---
name: I_MFGBOOOPBOMITEMCHANGESTATE
description: "Mfgbooopbomitemchangestate"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - bom
  - item-level
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MFGBOOOPBOMITEMCHANGESTATE

**Mfgbooopbomitemchangestate**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | | `_CompAlloc` | `BillOfOperationsType` |  |  |
| `BillOfOperationsGroup` | ✓ | | `_CompAlloc` | `BillOfOperationsGroup` |  |  |
| `BillOfOperationsVariant` | ✓ | | `_CompAlloc` | `BillOfOperationsVariant` |  |  |
| `BillOfOperationsSequence` | ✓ | | `_CompAlloc` | `BillOfOperationsSequence` |  |  |
| `BOOOperationInternalID` | ✓ | | `_CompAlloc` | `BOOOperationInternalID` |  |  |
| `BOOOpBOMItemInternalID` | ✓ | | `_CompAlloc` | `BOOOpBOMItemInternalID` |  |  |
| `BOOOpBOMItemIntVersCounter` | ✓ | | `_CompAlloc` | `BOOOpBOMItemIntVersCounter` |  |  |
| `CreationDate` |  | | `_CompAlloc` | `CreationDate` |  |  |
| `CreatedByUser` |  | | `_CompAlloc` | `CreatedByUser` |  |  |
| `LastChangeDate` |  | | `_CompAlloc` | `LastChangeDate` |  |  |
| `LastChangedByUser` |  | | `_CompAlloc` | `LastChangedByUser` |  |  |
| `ValidityStartDate` |  | | `_CompAlloc` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_CompAlloc` | `ValidityEndDate` |  |  |
| `IsDeleted` |  | | `_CompAlloc` | `IsDeleted` |  |  |
| `IsImplicitlyDeleted` |  | | `_CompAlloc` | `IsImplicitlyDeleted` |  |  |
| `ChangeNumber` |  | | `_CompAlloc` | `ChangeNumber` |  |  |
| `GoodsRecipientName` |  | | `_CompAlloc` | `GoodsRecipientName` |  |  |
| `UnloadingPointName` |  | | `_CompAlloc` | `UnloadingPointName` |  |  |
| `BillOfMaterialCategory` |  | | `_CompAlloc` | `BillOfMaterialCategory` |  |  |
| `BillOfMaterial` |  | | `_CompAlloc` | `BillOfMaterial` |  |  |
| `BillOfMaterial_2` |  | | `_CompAlloc` | `BillOfMaterial_2` |  |  |
| `BillOfMaterialVariant` |  | | `_CompAlloc` | `BillOfMaterialVariant` |  |  |
| `BillOfMaterialItemNodeNumber` |  | | `_CompAlloc` | `BillOfMaterialItemNodeNumber` |  |  |
| `BillOfMaterialRootCategory` |  | | `_CompAlloc` | `BillOfMaterialRootCategory` |  |  |
| `BillOfMaterialRoot` |  | | `_CompAlloc` | `BillOfMaterialRoot` |  |  |
| `BillOfMaterialRoot_2` |  | | `_CompAlloc` | `BillOfMaterialRoot_2` |  |  |
| `BillOfMaterialRootVariant` |  | | `_CompAlloc` | `BillOfMaterialRootVariant` |  |  |
| `BillOfMaterialEdgeNumber` |  | | `_CompAlloc` | `BillOfMaterialEdgeNumber` |  |  |
| `MatlCompIsMarkedForBackflush` |  | | `_CompAlloc` | `MatlCompIsMarkedForBackflush` |  |  |
| `BillOfMaterialHierarchyLevel` |  | | `_CompAlloc` | `BillOfMaterialHierarchyLevel` |  |  |
| `BillOfMaterialHierarchyPath` |  | | `_CompAlloc` | `BillOfMaterialHierarchyPath` |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BillOfMaterialItem` | | ✓ | | | | |
| `_BillOfMaterialItem_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..1] |
| `_BillOfMaterialItem` | `I_BillOfMaterialItemBasic` | [0..*] |
| `_BillOfMaterialItem_2` | `I_BillOfMaterialItemBasic` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOOPBOMITCS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOOpBOMItemIntVersCounter'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing BOO Operation BOM Item Change State'
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingCompAlloc'
@AccessControl.personalData.blocking: #NOT_REQUIRED

define view I_MfgBOOOpBOMItemChangeState
  as select from I_BOOOpBOMItemChangeState as _CompAlloc
  inner join   I_BillOfMaterialItemBasic  as CompAllocBomItem on  _CompAlloc.BillOfMaterialCategory       = CompAllocBomItem.BillOfMaterialCategory
                                                              and _CompAlloc.BillOfMaterial_2             = CompAllocBomItem.BillOfMaterial
                                                              and _CompAlloc.BillOfMaterialItemNodeNumber = CompAllocBomItem.BillOfMaterialItemNodeNumber

  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations          on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant

  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence  on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence

  association [1..1] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation on  $projection.BillOfOperationsType     = _BillOfOperationsOperation.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsOperation.BillOfOperationsSequence
                                                                                     and $projection.BOOOperationInternalID   = _BillOfOperationsOperation.BOOOperationInternalID

  association [0..*] to I_BillOfMaterialItemBasic      as _BillOfMaterialItem        on  $projection.BillOfMaterialCategory       = _BillOfMaterialItem.BillOfMaterialCategory
                                                                                     and $projection.BillOfMaterial               = _BillOfMaterialItem.BillOfMaterial
                                                                                     and $projection.BillOfMaterialItemNodeNumber = _BillOfMaterialItem.BillOfMaterialItemNodeNumber
--                                                                                   and $projection.BOMItemInternalChangeCount   = _BillOfMaterialItem.BOMItemInternalChangeCount
  association [0..*] to I_BillOfMaterialItemBasic      as _BillOfMaterialItem_2      on  $projection.BillOfMaterialCategory       = _BillOfMaterialItem_2.BillOfMaterialCategory
                                                                                     and $projection.BillOfMaterial_2             = _BillOfMaterialItem_2.BillOfMaterial
                                                                                     and $projection.BillOfMaterialItemNodeNumber = _BillOfMaterialItem_2.BillOfMaterialItemNodeNumber
--                                                                                   and $projection.BOMItemInternalChangeCount   = _BillOfMaterialItem_2.BOMItemInternalChangeCount
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key _CompAlloc.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key _CompAlloc.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key _CompAlloc.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key _CompAlloc.BillOfOperationsSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key _CompAlloc.BOOOperationInternalID,
      @ObjectModel.foreignKey.association: '_BOOOpBOMItemInternalID'
  key _CompAlloc.BOOOpBOMItemInternalID,
      -- representative key
  key _CompAlloc.BOOOpBOMItemIntVersCounter,

      --- Administration Data ---
      @Semantics.systemDate.createdAt: true
      _CompAlloc.CreationDate,
      @Semantics.user.createdBy: true
      _CompAlloc.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _CompAlloc.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      _CompAlloc.LastChangedByUser,

      @Semantics.businessDate.from: true
      _CompAlloc.ValidityStartDate,
      @Semantics.businessDate.to: true
      _CompAlloc.ValidityEndDate,

      _CompAlloc.IsDeleted,
      _CompAlloc.IsImplicitlyDeleted,

      --- Assignments ---
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      _CompAlloc.ChangeNumber,
      @Semantics.text: true
      _CompAlloc.GoodsRecipientName,
      @Semantics.text: true
      _CompAlloc.UnloadingPointName,

      --- Assigned Component ---
      _CompAlloc.BillOfMaterialCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterial_2'
      _CompAlloc.BillOfMaterial,
      _CompAlloc.BillOfMaterial_2,
      _CompAlloc.BillOfMaterialVariant,
      _CompAlloc.BillOfMaterialItemNodeNumber,

      _CompAlloc.BillOfMaterialRootCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BillOfMaterialRoot_2'
      _CompAlloc.BillOfMaterialRoot,
      _CompAlloc.BillOfMaterialRoot_2,
      _CompAlloc.BillOfMaterialRootVariant,
      _CompAlloc.BillOfMaterialEdgeNumber,

      _CompAlloc.MatlCompIsMarkedForBackflush,

      --- Associations ---
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_BillOfMaterialItem_2'
      _BillOfMaterialItem,
      _BillOfMaterialItem_2,
      _BillOfOperations,
      _CompAlloc._BillOfOperationsGroup,
      _BillOfOperationsOperation,
      _BillOfOperationsSequence,
      _CompAlloc._BillOfOperationsType,
      @Consumption.hidden: true
      _CompAlloc._BOOOpBOMItemInternalID,
      @Consumption.hidden: true
      _CompAlloc._BOOOperationInternalID,
      _CompAlloc._ChangeMaster,
      _CompAlloc.BillOfMaterialHierarchyLevel,
      _CompAlloc.BillOfMaterialHierarchyPath
}
where _CompAlloc.BillOfOperationsType = '2'  // Master recipe
   or _CompAlloc.BillOfOperationsType = 'N'  // Standard routing
   or _CompAlloc.BillOfOperationsType = 'S'; // Reference operation set
```
