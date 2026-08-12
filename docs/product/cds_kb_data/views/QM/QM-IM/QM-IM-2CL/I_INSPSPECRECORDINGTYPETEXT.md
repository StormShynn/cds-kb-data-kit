---
name: I_INSPSPECRECORDINGTYPETEXT
description: "Inspspecrecordingtypetext"
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECRECORDINGTYPETEXT

**Inspspecrecordingtypetext**

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
| `InspSpecRecordingType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as qestukz preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspSpecRecordingTypeText` |  | |  | `cast( ddtext as vdm_qestukz_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspSpecRecordingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecRecordingType` | `I_InspSpecRecordingType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Recording Type - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspSpecRecordingType'
}
@Analytics.technicalName: 'IINSPECRECTYPT'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspSpecRecordingTypeText as select from dd07t

   association [0..1] to I_Language as _Language 
      on $projection.Language = _Language.Language
      
   association [1..1] to I_InspSpecRecordingType as _InspSpecRecordingType 
      on $projection.InspSpecRecordingType = _InspSpecRecordingType.InspSpecRecordingType

{
    key cast ( substring( domvalue_l, 1, 1 ) as qestukz preserving type ) as InspSpecRecordingType,
    @Semantics.language: true
    key ddlanguage as Language,
    @Semantics.text: true
    cast( ddtext as vdm_qestukz_text preserving type ) as InspSpecRecordingTypeText, 
    _InspSpecRecordingType,
    _Language 
}
where domname = 'QESTUKZ' and as4local = 'A'
```
