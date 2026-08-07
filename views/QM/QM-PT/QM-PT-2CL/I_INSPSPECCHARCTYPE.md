---
name: I_INSPSPECCHARCTYPE
description: "Inspspeccharctype"
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
# I_INSPSPECCHARCTYPE

**Inspspeccharctype**

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
| `_InspSpecCharcTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecCharcTypeText` | `I_InspSpecCharcTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Characteristic Type'
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
        serviceQuality: #C //as function substring is used but #A and #B must not contain functions
    },
    representativeKey: 'InspSpecCharacteristicType',
    resultSet.sizeCategory: #XS
}
@Analytics.technicalName: 'IINSPCHARCTYP'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecCharcType as select from dd07l

   association [0..*] to I_InspSpecCharcTypeText as _InspSpecCharcTypeText 
      on $projection.InspSpecCharacteristicType = _InspSpecCharcTypeText.InspSpecCharacteristicType
       
{
    @ObjectModel.text.association: '_InspSpecCharcTypeText'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qchar_type_basic preserving type ) as InspSpecCharacteristicType

    /* Associations */
    ,_InspSpecCharcTypeText
 
}
where domname  = 'QCHAR_TYPE_BASIC' 
  and as4local = 'A'
```
