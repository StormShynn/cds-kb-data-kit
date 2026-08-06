---
name: I_INSPRESULTDOCUREQUIRED
description: Inspresultdocurequired
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
# I_INSPRESULTDOCUREQUIRED

**Inspresultdocurequired**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspResultIsDocumentationRqd` | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qdokukz preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspResultDocuRequiredText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Docu Required for Inspection Results' //same as DDL description
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
        serviceQuality: #A
    },
    representativeKey: 'InspResultIsDocumentationRqd',
    resultSet.sizeCategory: #XS
}
@Analytics.technicalName: 'IINSPRESLTDOCN'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspResultDocuRequired as select from dd07l

   association [0..*] to I_InspResultDocuRequiredText as _Text 
      on $projection.InspResultIsDocumentationRqd = _Text.InspResultIsDocumentationRqd
      
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qdokukz preserving type ) as InspResultIsDocumentationRqd

    /* Associations */
    , _Text

}
where domname  = 'QDOKUKZ' 
  and as4local = 'A'
```
