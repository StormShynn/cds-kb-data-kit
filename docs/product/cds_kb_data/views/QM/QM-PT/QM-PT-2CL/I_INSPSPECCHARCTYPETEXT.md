---
name: I_INSPSPECCHARCTYPETEXT
description: "Inspspeccharctypetext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECCHARCTYPETEXT

**Inspspeccharctypetext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecCharacteristicType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qchar_type_basic preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspSpecCharacteristicTypeText` |  | |  | `cast( ddtext as vdm_qchar_type_basic_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspSpecCharcType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecCharcType` | `I_InspSpecCharcType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Characteristic Type - Text' //same as DDL description
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
        serviceQuality: #C // as function substring is used but #A and #B must not contain functions
    },
    dataCategory: #TEXT,
    representativeKey: 'InspSpecCharacteristicType'
}
@Analytics.technicalName: 'IINSPCHARCTYPT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecCharcTypeText
  as select from dd07t

  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language

  association [1..1] to I_InspSpecCharcType as _InspSpecCharcType on $projection.InspSpecCharacteristicType = _InspSpecCharcType.InspSpecCharacteristicType

{
  key cast ( substring( domvalue_l, 1, 1 ) as vdm_qchar_type_basic preserving type ) as InspSpecCharacteristicType,
      @Semantics.language: true
  key ddlanguage                                                                 as Language,
      @Semantics.text: true
      cast( ddtext as vdm_qchar_type_basic_text preserving type )                as InspSpecCharacteristicTypeText

      /* Assocaiations */
  ,
      _InspSpecCharcType,
      _Language
}
where
      domname  = 'QCHAR_TYPE_BASIC'
  and as4local = 'A'
```
