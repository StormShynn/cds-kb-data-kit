---
name: I_INSPSPECCHARCCATEGORYTEXT
description: Inspspeccharccategorytext
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
# I_INSPSPECCHARCCATEGORYTEXT

**Inspspeccharccategorytext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecCharcCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qrzwang preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspSpecCharcCategoryText` |  | |  | `cast( ddtext as vdm_qrzwang_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspSpecCharcCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecCharcCategory` | `I_Inspspeccharccategory` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Characteristic Category - Text'
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
    representativeKey: 'InspSpecCharcCategory'
}
@Analytics.technicalName: 'IINSPCHARCCTGYT' 
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecCharcCategoryText as select from dd07t

   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   
   association [1..1] to I_Inspspeccharccategory as _InspSpecCharcCategory 
      on $projection.InspSpecCharcCategory = _InspSpecCharcCategory.InspSpecCharcCategory

{
    @EndUserText.label: 'Characteristic Category'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qrzwang preserving type ) as InspSpecCharcCategory,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key ddlanguage                                                        as Language,
    @Semantics.text: true
    cast( ddtext as vdm_qrzwang_text preserving type )                    as InspSpecCharcCategoryText, 

    /* Associations */
    _InspSpecCharcCategory, //decomment only if no problems in analytics
    _Language 
}
where domname = 'QRZWANG' and as4local = 'A'
```
