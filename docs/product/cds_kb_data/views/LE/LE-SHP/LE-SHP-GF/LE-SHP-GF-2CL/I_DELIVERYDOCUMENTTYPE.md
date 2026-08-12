---
name: I_DELIVERYDOCUMENTTYPE
description: "Delivery DocumentUMENTTYPE"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery-document
  - delivery
  - document
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:DeliveryDocument
---
# I_DELIVERYDOCUMENTTYPE

**Delivery DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `DeliveryDocumentType` | ✓ | |  | `lfart` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `PrecedingDocumentRequirement` |  | |  | `aufer` |  |  |
| `TradeComplianceIsActive` |  | |  | `itmac` |  |  |
| `NumberRangeForIntIDAssignment` |  | |  | `numki` |  |  |
| `NumberRangeForExtIDAssignment` |  | |  | `numke` |  |  |
| `IncrementItemNumber` |  | |  | `incpo` |  |  |
| `DefaultOrderType` |  | |  | `daart` |  |  |
| `StorageLocationRule` |  | |  | `reglg` |  |  |
| `TextDeterminationProcedure` |  | |  | `txtgr` |  |  |
| `RouteDetermination` |  | |  | `routf` |  |  |
| `DeliveryIsSplitByWarehouse` |  | |  | `lnspl` |  |  |
| `DeliveryIsSplitByPartner` |  | |  | `dsfad` |  |  |
| `DeliveryIsPackedAutomatically` |  | |  | `averp` |  |  |
| `DelivItmsAreGnrtdForPackggMatl` |  | |  | `pm_item_gen` |  |  |
| `PartnerDeterminationProcedure` |  | |  | `pargr` |  |  |
| `RescheduleDeliveries` |  | |  | `neute` |  |  |
| `IntTransfOfControlDateOffset` |  | |  | `int_tocd_offset` |  |  |
| `IntTransfOfCtrlDateOffsetUnit` |  | |  | `int_tocd_offset_unit` |  |  |
| `ExtTransfOfControlDateOffset` |  | |  | `ext_tocd_offset` |  |  |
| `ExtTransfOfCtrlDateOffsetUnit` |  | |  | `ext_tocd_offset_unit` |  |  |
| `AR_ElectronicDocDocumentClass` |  | |  | `j_1adoccls` |  |  |
| `_Text` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SDDocumentType` | | ✓ | | | | |
| `_TextDeterminationProcedure` | | ✓ | | | | |
| `_PartnerDeterminationProcedure` | | ✓ | | | | |
| `_ExtTransfOfCtrlDateOffsetUnit` | | ✓ | | | | |
| `_IntTransfOfCtrlDateOffsetUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryDocumentTypeText` | [0..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [1..1] |
| `_SDDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_TextDeterminationProcedure` | `I_TextDeterminationProcedure` | [0..1] |
| `_PartnerDeterminationProcedure` | `I_PartDeterminationProcedure` | [0..1] |
| `_ExtTransfOfCtrlDateOffsetUnit` | `I_UnitOfMeasure` | [0..1] |
| `_IntTransfOfCtrlDateOffsetUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DeliveryDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Document Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVDOCTYPE'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'DeliveryDocumentType'

define view I_DeliveryDocumentType
  as select from tvlk

  association [0..*] to I_DeliveryDocumentTypeText   as _Text                          on  $projection.DeliveryDocumentType = _Text.DeliveryDocumentType
  association [1..1] to I_SDDocumentCategory         as _SDDocumentCategory            on  $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocumentType          as _SDDocumentType                on  $projection.DefaultOrderType = _SDDocumentType.SalesDocumentType
  association [0..1] to I_TextDeterminationProcedure as _TextDeterminationProcedure    on  $projection.TextDeterminationProcedure         = _TextDeterminationProcedure.TextDeterminationProcedure
                                                                                       and _TextDeterminationProcedure.TextObjectCategory = 'VBBK'
  association [0..1] to I_PartDeterminationProcedure as _PartnerDeterminationProcedure on  $projection.PartnerDeterminationProcedure = _PartnerDeterminationProcedure.PartnerDeterminationProcedure
  association [0..1] to I_UnitOfMeasure              as _ExtTransfOfCtrlDateOffsetUnit on  $projection.ExtTransfOfCtrlDateOffsetUnit = _ExtTransfOfCtrlDateOffsetUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _IntTransfOfCtrlDateOffsetUnit on  $projection.IntTransfOfCtrlDateOffsetUnit = _IntTransfOfCtrlDateOffsetUnit.UnitOfMeasure
{
      @ObjectModel.text.association: '_Text'
  key lfart                as DeliveryDocumentType,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                as SDDocumentCategory,

      aufer                as PrecedingDocumentRequirement,

      @Semantics.booleanIndicator: true
      itmac                as TradeComplianceIsActive,

      numki                as NumberRangeForIntIDAssignment,

      numke                as NumberRangeForExtIDAssignment,

      incpo                as IncrementItemNumber,

      @ObjectModel.foreignKey.association: '_SDDocumentType'
      daart                as DefaultOrderType,

      reglg                as StorageLocationRule,

      @ObjectModel.foreignKey.association: '_TextDeterminationProcedure'
      txtgr                as TextDeterminationProcedure,

      routf                as RouteDetermination,

      @Semantics.booleanIndicator: true
      lnspl                as DeliveryIsSplitByWarehouse,

      @Semantics.booleanIndicator: true
      dsfad                as DeliveryIsSplitByPartner,

      @Semantics.booleanIndicator: true
      averp                as DeliveryIsPackedAutomatically,

      @Semantics.booleanIndicator: true
      pm_item_gen          as DelivItmsAreGnrtdForPackggMatl,

      @ObjectModel.foreignKey.association:'_PartnerDeterminationProcedure'
      pargr                as PartnerDeterminationProcedure,

      neute                as RescheduleDeliveries,

      @Semantics.quantity.unitOfMeasure: 'IntTransfOfCtrlDateOffsetUnit'
      int_tocd_offset      as IntTransfOfControlDateOffset,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association:'_IntTransfOfCtrlDateOffsetUnit'
      int_tocd_offset_unit as IntTransfOfCtrlDateOffsetUnit,

      @Semantics.quantity.unitOfMeasure: 'ExtTransfOfCtrlDateOffsetUnit'
      ext_tocd_offset      as ExtTransfOfControlDateOffset,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association:'_ExtTransfOfCtrlDateOffsetUnit'
      ext_tocd_offset_unit as ExtTransfOfCtrlDateOffsetUnit,

      j_1adoccls           as AR_ElectronicDocDocumentClass,


      //Associations
      _SDDocumentCategory,
      _SDDocumentType,
      _TextDeterminationProcedure,
      _PartnerDeterminationProcedure,
      _ExtTransfOfCtrlDateOffsetUnit,
      _IntTransfOfCtrlDateOffsetUnit,
      _Text
};
```
