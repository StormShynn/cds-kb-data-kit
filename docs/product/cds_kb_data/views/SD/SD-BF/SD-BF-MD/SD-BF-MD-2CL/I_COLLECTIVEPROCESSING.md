---
name: I_COLLECTIVEPROCESSING
description: "Collectiveprocessing"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_COLLECTIVEPROCESSING

**Collectiveprocessing**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectiveProcessing` | ✓ | |  | `sammg` |  |  |
| `CollectiveProcessingType` |  | |  | `smart` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `uzeit` |  |  |
| `NumberOfCreatedDocuments` |  | |  | `vbnum` |  |  |
| `NumberOfErrors` |  | |  | `ernum` |  |  |
| `HeaderGrossWeight` |  | |  | `brgew` |  |  |
| `HeaderWeightUnit` |  | |  | `gewei` |  |  |
| `HeaderVolume` |  | |  | `volum` |  |  |
| `HeaderVolumeUnit` |  | |  | `voleh` |  |  |
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `ShippingPointName` |  | |  | `vtext` |  |  |
| `MaximumLaborCapacity` |  | |  | `maxzt` |  |  |
| `ABAPProgramName` |  | |  | `programm` |  |  |
| `ABAPProgramVariantName` |  | |  | `selset` |  |  |
| `HasBeenProcessedInBackground` |  | |  | `batch` |  |  |
| `NumberOfCreatedDocumentItems` |  | |  | `anzlp` |  |  |
| `NumberOfProcessedDocumentItems` |  | |  | `anzgp` |  |  |
| `NumberOfProcessedDueIndexes` |  | |  | `anzgi` |  |  |
| `PickingWaveProfile` |  | |  | `kwpro` |  |  |
| `ShiftDefinition` |  | |  | `kaptp` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `CollectiveProcessingRunUUID` |  | |  | `collectiverun_uuid` |  |  |
| `_CollectiveProcessingDocument` | | ✓ | | | | |
| `_HeaderWeightUnit` | | ✓ | | | | |
| `_HeaderVolumeUnit` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollectiveProcessingDocument` | `I_CollectiveProcessingDocument` | [0..*] |
| `_HeaderWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeaderVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_Warehouse` | `I_Warehouse` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISDCOLPROC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CollectiveProcessing'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:#TRANSACTIONAL
@EndUserText.label: 'Collective Processing for Sales Orders'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_CollectiveProcessing
  as select from vbsk
  association [0..*] to I_CollectiveProcessingDocument   as _CollectiveProcessingDocument  on  $projection.CollectiveProcessing = _CollectiveProcessingDocument.CollectiveProcessing
  association [0..1] to I_UnitOfMeasure as _HeaderWeightUnit on $projection.HeaderWeightUnit = _HeaderWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure as _HeaderVolumeUnit on $projection.HeaderVolumeUnit = _HeaderVolumeUnit.UnitOfMeasure
  association [0..1] to I_ShippingPoint as _ShippingPoint    on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_Warehouse     as _Warehouse        on $projection.Warehouse = _Warehouse.Warehouse

{
  key sammg              as CollectiveProcessing,

      smart              as CollectiveProcessingType,
      ernam              as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      erdat              as CreationDate,
      @Semantics.systemTime.createdAt: true
      uzeit              as CreationTime,
      vbnum              as NumberOfCreatedDocuments,
      ernum              as NumberOfErrors,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      brgew              as HeaderGrossWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderWeightUnit'
      gewei              as HeaderWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      volum              as HeaderVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderVolumeUnit'
      voleh              as HeaderVolumeUnit,
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      vstel              as ShippingPoint,
      vtext              as ShippingPointName,
      maxzt              as MaximumLaborCapacity,
      programm           as ABAPProgramName,
      selset             as ABAPProgramVariantName,
      @Semantics.booleanIndicator:true
      batch              as HasBeenProcessedInBackground,
      anzlp              as NumberOfCreatedDocumentItems,
      anzgp              as NumberOfProcessedDocumentItems,
      anzgi              as NumberOfProcessedDueIndexes,
      kwpro              as PickingWaveProfile,
      kaptp              as ShiftDefinition,
      @ObjectModel.foreignKey.association: '_Warehouse'
      lgnum              as Warehouse,
      //        bedat    as DocumentDate,
      //        wrast    as TimeSlotGroup,
      collectiverun_uuid as CollectiveProcessingRunUUID,

      _HeaderWeightUnit,
      _HeaderVolumeUnit,
      _ShippingPoint,
      _Warehouse,
      _CollectiveProcessingDocument

}
```
