---
name: I_SALESDOCUMENTCOPYCONTROL
description: "Salesdocumentcopycontrol"
app_component: SD-SLS-GF-2CL
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
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - sales-document
  - document
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTCOPYCONTROL

**Salesdocumentcopycontrol**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
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
| `TargetSalesDocumentType` | ✓ | |  | `auarn` |  |  |
| `SourceSalesDocumentType` | ✓ | |  | `auarv` |  |  |
| `SourceBillingDocumentType` | ✓ | |  | `fkarv` |  |  |
| `ReferenceScheduleLineCategory` | ✓ | |  | `ettyv` |  |  |
| `ReferenceItemCategory` | ✓ | |  | `pstyv` |  |  |
| `_TargetSalesDocumentType` | | ✓ | | | | |
| `_SourceSalesDocumentType` | | ✓ | | | | |
| `_SourceBillingDocumentType` | | ✓ | | | | |
| `_ReferenceScheduleLineCategory` | | ✓ | | | | |
| `_ReferenceItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TargetSalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_SourceSalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_SourceBillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_ReferenceScheduleLineCategory` | `I_ScheduleLineCategory` | [0..1] |
| `_ReferenceItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Sales Document Copying Control'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDOCCPYCTRL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentCopyControl
  as select from tvcpa

  association [0..1] to I_SalesDocumentType         as _TargetSalesDocumentType       on $projection.TargetSalesDocumentType = _TargetSalesDocumentType.SalesDocumentType
  association [0..1] to I_SalesDocumentType         as _SourceSalesDocumentType       on $projection.SourceSalesDocumentType = _SourceSalesDocumentType.SalesDocumentType
  association [0..1] to I_BillingDocumentType       as _SourceBillingDocumentType     on $projection.SourceBillingDocumentType = _SourceBillingDocumentType.BillingDocumentType
  association [0..1] to I_ScheduleLineCategory      as _ReferenceScheduleLineCategory on $projection.ReferenceScheduleLineCategory = _ReferenceScheduleLineCategory.ScheduleLineCategory
  association [0..1] to I_SalesDocumentItemCategory as _ReferenceItemCategory         on $projection.ReferenceItemCategory = _ReferenceItemCategory.SalesDocumentItemCategory

{
      //key
      @ObjectModel.foreignKey.association: '_TargetSalesDocumentType'
  key auarn        as TargetSalesDocumentType,
      @ObjectModel.foreignKey.association: '_SourceSalesDocumentType'
  key auarv        as SourceSalesDocumentType,
      @ObjectModel.foreignKey.association: '_SourceBillingDocumentType'
  key fkarv        as SourceBillingDocumentType,
      @ObjectModel.foreignKey.association: '_ReferenceScheduleLineCategory'
  key ettyv        as ReferenceScheduleLineCategory,
      @ObjectModel.foreignKey.association: '_ReferenceItemCategory'
  key pstyv        as ReferenceItemCategory,

      //Association
      _TargetSalesDocumentType,
      _SourceSalesDocumentType,
      _SourceBillingDocumentType,
      _ReferenceScheduleLineCategory,
      _ReferenceItemCategory
};
```
