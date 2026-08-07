---
name: I_INSPECTIONSCOPETEXT
description: Inspectionscopetext
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
  - text-view
  - inspection
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONSCOPETEXT

**Inspectionscopetext**

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
| `Language` | ✓ | |  | `ddlanguage` |
| `InspectionScopeText` |  | |  | `cast( ddtext as vdm_qpumfkz_text preserving type )` |
| `_Language` | | ✓ | | |
| `_InspectionScope` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspectionScope` | `I_InspectionScope` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSCOPET'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Scope - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspectionScope'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionScopeText as select from dd07t

   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   
   association [1..1] to I_InspectionScope as _InspectionScope 
      on $projection.InspectionScope = _InspectionScope.InspectionScope

{
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qpumfkz preserving type ) as InspectionScope,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as vdm_qpumfkz_text preserving type ) as InspectionScopeText

    /* Associations */
    ,_InspectionScope
    ,_Language 
}
where domname = 'QPUMFKZ' and as4local = 'A'
```
