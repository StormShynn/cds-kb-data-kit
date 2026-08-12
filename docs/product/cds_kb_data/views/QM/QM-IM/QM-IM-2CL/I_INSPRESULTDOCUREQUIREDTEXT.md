---
name: I_INSPRESULTDOCUREQUIREDTEXT
description: "Inspresultdocurequiredtext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_INSPRESULTDOCUREQUIREDTEXT

**Inspresultdocurequiredtext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspResultIsDocumentationRqd` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qdokukz preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspResultIsDocnRqdText` |  | |  | `cast( ddtext as vdm_qdokukz_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspResultDocuRequired` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspResultDocuRequired` | `I_InspResultDocuRequired` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Docu Required for Insp Results - Text'
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
    representativeKey: 'InspResultIsDocumentationRqd'
}
@Analytics.technicalName: 'IINSPRESLTDOCNT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspResultDocuRequiredText as select from dd07t

   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   
   association [1..1] to I_InspResultDocuRequired as _InspResultDocuRequired
      on $projection.InspResultIsDocumentationRqd = _InspResultDocuRequired.InspResultIsDocumentationRqd

{
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qdokukz preserving type ) as InspResultIsDocumentationRqd,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as vdm_qdokukz_text preserving type ) as InspResultIsDocnRqdText

    /* Associations */
    ,_InspResultDocuRequired
    ,_Language 

}
where domname = 'QDOKUKZ' and as4local = 'A'
```
