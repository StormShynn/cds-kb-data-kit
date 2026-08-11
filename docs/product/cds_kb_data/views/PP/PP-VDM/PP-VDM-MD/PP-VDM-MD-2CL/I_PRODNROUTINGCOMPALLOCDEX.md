---
name: I_PRODNROUTINGCOMPALLOCDEX
description: "Prodn Routing Component Allocation"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value
semantic_en: "Prodn Routing Component Allocation"
semantic_vi: "Prodn Routing Component Allocation — CDS view giao diện dựa trên P_ProdnRoutingCompAllocDEX."
keywords:
  - "prodn"
  - "routing"
  - "component"
  - "allocation"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "group"
  - "item"
  - "internal"
  - "version"
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
# I_PRODNROUTINGCOMPALLOCDEX

**Prodn Routing Component Allocation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProdnRtgOpBOMItemInternalID` | ✓ | |  |  | `NUMC(8)` | No. for material comp. allocation to task list |
| `ProdnRtgOpBOMItemIntVersion` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ProductionRouting` |  | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` |  | |  |  | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` |  | |  |  | `NUMC(8)` | Task list node number for operation |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Change Date Without Document Update |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `BillOfMaterialCategory` |  | |  |  | `CHAR(1)` | BOM category |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `BillOfMaterialVariant` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `BillOfMaterialItemNodeNumber` |  | |  |  | `NUMC(8)` | Node Number |
| `BillOfMaterialRootCategory` |  | |  |  | `CHAR(1)` | BOM category |
| `BillOfMaterialRoot` |  | |  |  | `CHAR(8)` | Bill Of Material |
| `BillOfMaterialRootVariant` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `BillOfMaterialEdgeNumber` |  | |  |  | `NUMC(6)` | Path in exploded BOM tree |
| `MatlCompIsMarkedForBackflush` |  | |  |  | `CHAR(1)` | Indicator: Backflush |
| `BillOfMaterialItemQuantity` |  | |  |  | `QUAN(13)` | Component Quantity |
| `BillOfMaterialItemUnit` |  | |  |  | `UNIT(3)` | Component Unit of Measure |
| `_ProductionRouting` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOpBOMItemInternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProdnRtgOpBOMItemIntVersion'
@EndUserText.label: 'Prodn Routing Component Allocation'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic: true
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingCompAlloc'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProdnRoutingCompAllocDEX
  as select from P_ProdnRoutingCompAllocDEX

  association [1..1] to I_ProductionRoutingDEX       as _ProductionRouting      on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                                and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader         on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                and $projection.ProductionRouting      =  _ProdnRtgHeader.ProductionRouting
//                                                                                and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//
//  association [1..*] to I_ProdnRoutingOpSubordOpDEX  as _ProdnRoutingOpSubordOp on  $projection.BillOfOperationsType     =  _ProdnRoutingOpSubordOp.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup   =  _ProdnRoutingOpSubordOp.ProductionRoutingGroup
//                                                                                and $projection.ProductionRoutingOpIntID =  _ProdnRoutingOpSubordOp.ProductionRoutingOpIntID
//                                                                                and $projection.ValidityEndDate          >= _ProdnRoutingOpSubordOp.ValidityStartDate
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_BOOOpBOMItemInternalID'
  key ProdnRtgOpBOMItemInternalID,
  key ProdnRtgOpBOMItemIntVersion,
      ProductionRouting,
      ProductionRoutingSequence,
      ProductionRoutingOpIntID,
      BillOfOperationsVersion,
      ValidityStartDate,
      ValidityEndDate,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      LastChangedByUser,
      IsDeleted,
      IsImplicitlyDeleted,
      ChangeNumber,
      @Semantics.text: true
      GoodsRecipientName,
      @Semantics.text: true
      UnloadingPointName,
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialVariant,
      BillOfMaterialItemNodeNumber,
      BillOfMaterialRootCategory,
      BillOfMaterialRoot,
      BillOfMaterialRootVariant,
      BillOfMaterialEdgeNumber,
      MatlCompIsMarkedForBackflush,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialItemQuantity,
      BillOfMaterialItemUnit,
      /* Associations */

      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOOpBOMItemInternalID,
      _ProductionRouting
//      _ProdnRtgHeader,
//      _ProdnRoutingOpSubordOp
}
```
