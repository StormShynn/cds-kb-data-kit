---
name: I_PRODNROUTINGSEQUENCEDEX
description: "Production Routing Sequence"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value
semantic_en: "Production Routing Sequence"
semantic_vi: "Production Routing Sequence — CDS view giao diện dựa trên P_ProdnRoutingSequenceDEX."
keywords:
  - "production"
  - "routing"
  - "sequence"
  - "bill"
  - "operations"
  - "type"
  - "group"
  - "sqnc"
  - "vers"
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
---
# I_PRODNROUTINGSEQUENCEDEX

**Production Routing Sequence**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | ✓ | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` | ✓ | |  |  | `CHAR(6)` | Sequence |
| `ProductionRoutingSqncIntVers` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `BillOfOperationsSequenceCat` |  | |  |  | `CHAR(1)` | Sequence Category |
| `SequenceText` |  | |  |  | `CHAR(40)` | Sequence Description |
| `SequenceSchedulingAlignment` |  | |  |  | `CHAR(1)` | Alignment Key for Scheduling |
| `BillOfOperationsRefSequence` |  | |  |  | `CHAR(6)` | Reference Sequence |
| `BOOSqncBranchOpInternalID` |  | |  |  | `NUMC(8)` | Reference node for start of a sequence |
| `BOOSqncReturnOpInternalID` |  | |  |  | `NUMC(8)` | Finish reference node of a sequence |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `_ProductionRouting` | | ✓ | | | | |
| `_ProdnRtgSqncOpAssgmt` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..1] |
| `_ProdnRtgSqncOpAssgmt` | `I_ProdnRtgSqncOpAssgmtDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductionRoutingSqncIntVers'
@EndUserText.label: 'Production Routing Sequence'
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
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingSequence'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_ProdnRoutingSequenceDEX
  as select from P_ProdnRoutingSequenceDEX

  association [1..1] to I_ProductionRoutingDEX       as _ProductionRouting       on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                 and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup
                                                                                 and $projection.ProductionRouting      = _ProductionRouting.ProductionRouting

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader          on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                 and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                 and $projection.ProductionRouting      =  _ProdnRtgHeader.ProductionRouting
//                                                                                 and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//                                                                                 and $projection.ValidityStartDate      <= _ProdnRtgHeader.ValidityEndDate


  association [1..*] to I_ProdnRtgSqncOpAssgmtDEX    as _ProdnRtgSqncOpAssgmt on  $projection.BillOfOperationsType         = _ProdnRtgSqncOpAssgmt.BillOfOperationsType
                                                                                 and $projection.ProductionRoutingGroup    = _ProdnRtgSqncOpAssgmt.ProductionRoutingGroup
                                                                                 and $projection.ProductionRouting         = _ProdnRtgSqncOpAssgmt.ProductionRouting
                                                                                 and $projection.ProductionRoutingSequence = _ProdnRtgSqncOpAssgmt.ProductionRoutingSequence
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key ProductionRouting,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key ProductionRoutingSequence,
  key ProductionRoutingSqncIntVers,
      BillOfOperationsVersion,
      IsDeleted,
      IsImplicitlyDeleted,
      BillOfOperationsSequenceCat,
      @Semantics.text: true
      SequenceText,
      SequenceSchedulingAlignment,
      BillOfOperationsRefSequence,
      BOOSqncBranchOpInternalID,
      BOOSqncReturnOpInternalID,
      ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      LastChangedByUser,
      /* Associations */
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _ProductionRouting,
//      _ProdnRtgHeader,
      _ProdnRtgSqncOpAssgmt,
      _BillOfOperationsSequence,
      _BillOfOperations
}
```
