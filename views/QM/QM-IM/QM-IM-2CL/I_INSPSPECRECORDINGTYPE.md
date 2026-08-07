---
name: I_INSPSPECRECORDINGTYPE
description: Inspspecrecordingtype
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECRECORDINGTYPE

**Inspspecrecordingtype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspSpecRecordingType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as qestukz preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspSpecRecordingTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Recording Type'
@Analytics.dataCategory:#DIMENSION
@Analytics.technicalName: 'IINSPECRECTYP' 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'InspSpecRecordingType',
    resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspSpecRecordingType as select from dd07l

   association [0..*] to I_InspSpecRecordingTypeText as _Text 
      on $projection.InspSpecRecordingType = _Text.InspSpecRecordingType
       
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as qestukz preserving type ) as InspSpecRecordingType
    ,_Text
}
where domname  = 'QESTUKZ' 
  and as4local = 'A'
```
