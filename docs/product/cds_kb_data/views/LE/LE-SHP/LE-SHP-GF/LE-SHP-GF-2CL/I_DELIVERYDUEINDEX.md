---
name: I_DELIVERYDUEINDEX
description: "Deliverydueindex"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - data-extraction
  - delivery
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYDUEINDEX

**Deliverydueindex**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingPoint` | ✓ | |  | `vstel` |  |  |
| `DeliveryCreationDate` | ✓ | |  | `ledat` |  |  |
| `DeliveryPriority` | ✓ | |  | `lprio` |  |  |
| `Route` | ✓ | |  | `route` |  |  |
| `ForwardingAgent` | ✓ | |  | `spdnr` |  |  |
| `GoodsIssueDate` | ✓ | |  | `wadat` |  |  |
| `ShipToParty` | ✓ | |  | `kunwe` |  |  |
| `SDDocument` | ✓ | |  | `vbeln` |  |  |
| `DeliveryBlockReason` | ✓ | |  | `lifsp` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `SalesOffice` |  | |  | `vkbur` |  |  |
| `SalesGroup` |  | |  | `vkgrp` |  |  |
| `CompleteDeliveryIsDefined` |  | |  | `autlf` |  |  |
| `HeaderGrossWeight` |  | |  | `brgew` |  |  |
| `HeaderWeightUnit` |  | |  | `gewei` |  |  |
| `HeaderVolume` |  | |  | `volum` |  |  |
| `HeaderVolumeUnit` |  | |  | `voleh` |  |  |
| `ProcessingTimeInDays` |  | |  | `bearz` |  |  |
| `SoldToPartyAddressID` |  | |  | `adrnr_ag` |  |  |
| `ShipToPartyAddressID` |  | |  | `adrnr_we` |  |  |
| `SalesDocumentType` |  | |  | `auart` |  |  |
| `OrderCombinationIsAllowed` |  | |  | `kzazu` |  |  |
| `_HeaderWeightUnit` | | ✓ | | | | |
| `_HeaderVolumeUnit` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_Route` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeaderVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_Route` | `I_Route` | [0..1] |
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISDDLVDUEINDEX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@EndUserText.label: 'Delivery Due Index'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@Analytics.dataExtraction.enabled : false
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:#TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_DeliveryDueIndex
  as select from vepvg

  association [0..1] to I_UnitOfMeasure       as _HeaderWeightUnit    on $projection.HeaderWeightUnit = _HeaderWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure       as _HeaderVolumeUnit    on $projection.HeaderVolumeUnit = _HeaderVolumeUnit.UnitOfMeasure
  association [0..1] to I_ShippingPoint       as _ShippingPoint       on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_SalesOffice         as _SalesOffice         on $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division            as _Division            on $projection.Division = _Division.Division
  association [0..1] to I_SalesGroup          as _SalesGroup          on $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_Customer            as _ShipToParty         on $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer            as _SoldToParty         on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Route               as _Route               on $projection.Route = _Route.Route
  association [0..1] to I_DeliveryPriority    as _DeliveryPriority    on $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
  association [0..1] to I_DeliveryBlockReason as _DeliveryBlockReason on $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason
  association [0..1] to I_SalesDocumentType   as _SalesDocumentType   on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType

{
      @ObjectModel.foreignKey.association: '_ShippingPoint'
  key vstel    as ShippingPoint,
      @Semantics.systemDate.createdAt:true
  key ledat    as DeliveryCreationDate,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
  key lprio    as DeliveryPriority,
      @ObjectModel.foreignKey.association: '_Route'
  key route    as Route,
  key spdnr    as ForwardingAgent,
  key wadat    as GoodsIssueDate,
      @ObjectModel.foreignKey.association: '_ShipToParty'
  key kunwe    as ShipToParty,
  key vbeln    as SDDocument,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
  key lifsp    as DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      kunnr    as SoldToParty,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg    as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg    as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      spart    as Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      vkbur    as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      vkgrp    as SalesGroup,
      @Semantics.booleanIndicator: true 
      autlf    as CompleteDeliveryIsDefined,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      brgew    as HeaderGrossWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderWeightUnit'
      gewei    as HeaderWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      volum    as HeaderVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderVolumeUnit'
      voleh    as HeaderVolumeUnit,
      @Semantics.durationInDays: true
      bearz    as ProcessingTimeInDays,
      adrnr_ag as SoldToPartyAddressID,
      adrnr_we as ShipToPartyAddressID,
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      auart    as SalesDocumentType,
      @Semantics.booleanIndicator: true
      kzazu    as OrderCombinationIsAllowed,


      _ShippingPoint,
      _Route,
      _DeliveryBlockReason,
      _ShipToParty,
      _SoldToParty,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _HeaderWeightUnit,
      _HeaderVolumeUnit,
      _DeliveryPriority,
      _SalesDocumentType
}
```
