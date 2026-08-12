---
name: I_PRODNRTGSQNCOPASSGMTDEX
description: "Prodn Rtg Sequence Operation Assignment"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value
semantic_en: "Prodn Rtg Sequence Operation Assignment"
semantic_vi: "Prodn Rtg Sequence Operation Assignment — CDS view giao diện dựa trên P_ProdnRtgSqncOpAssgmtDEX."
keywords:
  - "prodn"
  - "rtg"
  - "sequence"
  - "operation"
  - "assignment"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "routing"
  - "group"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNRTGSQNCOPASSGMTDEX

**Prodn Rtg Sequence Operation Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` | ✓ | |  |  | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` | ✓ | |  |  | `NUMC(8)` | Number of the Task List Node |
| `ProdnRtgSqncOpAssgmtIntVers` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `_ProductionRouting` | | ✓ | | | | |
| `_ProdnRoutingSequence` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |
| `_ProdnRoutingSequence` | `I_ProdnRoutingSequenceDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProdnRtgSqncOpAssgmtIntVers'
@EndUserText.label: 'Prodn Rtg Sequence Operation Assignment'
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
@ObjectModel.sapObjectNodeType.name: 'ProdnRtgSqncOperationAssgmt'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProdnRtgSqncOpAssgmtDEX
  as select from P_ProdnRtgSqncOpAssgmtDEX

  association [1..1] to I_ProductionRoutingDEX       as _ProductionRouting      on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                                and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

  association [1..*] to I_ProdnRoutingSequenceDEX    as _ProdnRoutingSequence   on  $projection.BillOfOperationsType      = _ProdnRoutingSequence.BillOfOperationsType
                                                                                and $projection.ProductionRoutingGroup    = _ProdnRoutingSequence.ProductionRoutingGroup
                                                                                and $projection.ProductionRouting         = _ProdnRoutingSequence.ProductionRouting
                                                                                and $projection.ProductionRoutingSequence = _ProdnRoutingSequence.ProductionRoutingSequence

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader         on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                and $projection.ProductionRouting      =  _ProdnRtgHeader.ProductionRouting
//                                                                                and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//                                                                                and $projection.ValidityStartDate      <= _ProdnRtgHeader.ValidityEndDate

  

//  association [1..*] to I_ProdnRoutingOpSubordOpDEX  as _ProdnRoutingOpSubordOp on  $projection.BillOfOperationsType     =  _ProdnRoutingOpSubordOp.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup   =  _ProdnRoutingOpSubordOp.ProductionRoutingGroup
//                                                                                and $projection.ProductionRoutingOpIntID =  _ProdnRoutingOpSubordOp.ProductionRoutingOpIntID
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate
//                                                                                and $projection.ValidityEndDate          >= _ProdnRoutingOpSubordOp.ValidityStartDate
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key ProductionRouting,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key ProductionRoutingSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key ProductionRoutingOpIntID,
      -- representative key
  key ProdnRtgSqncOpAssgmtIntVers,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,
      IsImplicitlyDeleted,
      ChangeNumber,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      LastChangedByUser,
      BillOfOperationsVersion,
      /* Associations */
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BOOOperationInternalID,
      _ProductionRouting,
      _ProdnRoutingSequence
//      _ProdnRtgHeader,
//      _ProdnRoutingOpSubordOp
}
```
