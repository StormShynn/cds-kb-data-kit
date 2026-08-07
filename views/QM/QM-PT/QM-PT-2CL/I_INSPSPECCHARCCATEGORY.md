---
name: I_INSPSPECCHARCCATEGORY
description: Inspspeccharccategory
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECCHARCCATEGORY

**Inspspeccharccategory**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspSpecCharcCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qrzwang preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspSpecCharcCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Characteristic Category'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #C // as function substring is used but #A and #B must not contain functions
    },
    representativeKey: 'InspSpecCharcCategory',
    resultSet.sizeCategory: #XS
}
@Analytics.technicalName: 'IINSPCHARCCTGY'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Inspspeccharccategory as select from dd07l

   association [0..*] to I_InspSpecCharcCategoryText as _Text 
      on $projection.InspSpecCharcCategory = _Text.InspSpecCharcCategory 
{
    @ObjectModel.text.association: '_Text'
    @EndUserText.label: 'Characteristic Category'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qrzwang preserving type ) as InspSpecCharcCategory

    /* Associations */
    , _Text
}
where domname  = 'QRZWANG' 
  and as4local = 'A'
```
