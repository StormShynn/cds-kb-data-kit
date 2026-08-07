---
name: I_INSPECTIONSCOPE
description: Inspectionscope
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
# I_INSPECTIONSCOPE

**Inspectionscope**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionScope` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qpumfkz preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspectionScopeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSCOPE'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Scope'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A 
    },
    representativeKey: 'InspectionScope',
    resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionScope as select from dd07l

   association [0..*] to I_InspectionScopeText as _Text 
      on $projection.InspectionScope = _Text.InspectionScope
      
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qpumfkz preserving type ) as InspectionScope

    /* Associations */
    , _Text
}
where domname = 'QPUMFKZ' 
  and as4local = 'A'
```
