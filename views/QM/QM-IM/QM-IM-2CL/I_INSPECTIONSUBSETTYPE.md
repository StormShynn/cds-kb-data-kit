---
name: I_INSPECTIONSUBSETTYPE
description: Inspectionsubsettype
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
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONSUBSETTYPE

**Inspectionsubsettype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionSubsetType` | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qppkttyp preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspectionSubsetTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Point Type' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics.dataCategory:#DIMENSION
@Analytics.technicalName: 'IINSPSUBSETTYPE' 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'InspectionSubsetType',
    resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspectionSubsetType
   as select from dd07l

   association [0..*] to I_InspectionSubsetTypeText as _Text 
      on $projection.InspectionSubsetType = _Text.InspectionSubsetType
       
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qppkttyp preserving type ) as InspectionSubsetType

    /* Accociations */
    , _Text
}
where domname  = 'QPPKTTYP' 
  and as4local = 'A'
```
