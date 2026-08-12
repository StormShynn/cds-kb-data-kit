---
name: I_INSPLOTMATLDOCITEMTYPETEXT
description: "Insplotmatldocitemtypetext"
app_component: QM-IM-2CL
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
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - item-level
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTMATLDOCITEMTYPETEXT

**Insplotmatldocitemtypetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
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
| `InspLotMatlDocItemType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as qambtype )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspLotMatlDocItemTypeText` |  | |  | `cast( ddtext as val_text )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspLotMatlDocItemType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspLotMatlDocItemType` | `I_InspLotMatlDocItemType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLTMDOCITTYT'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ref Type of Matl Doc Item in Lot - Text' 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InspLotMatlDocItemType'
@ObjectModel.usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A }
@Metadata.ignorePropagatedAnnotations: true
define view I_InspLotMatlDocItemTypeText 
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_InspLotMatlDocItemType as _InspLotMatlDocItemType 
      on $projection.InspLotMatlDocItemType = _InspLotMatlDocItemType.InspLotMatlDocItemType
{
    key cast ( substring( domvalue_l, 1, 1 ) as qambtype ) as InspLotMatlDocItemType,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as val_text ) as InspLotMatlDocItemTypeText, 

    _InspLotMatlDocItemType,
    _Language 
}
where domname = 'QAMBTYPE' and as4local = 'A'
```
