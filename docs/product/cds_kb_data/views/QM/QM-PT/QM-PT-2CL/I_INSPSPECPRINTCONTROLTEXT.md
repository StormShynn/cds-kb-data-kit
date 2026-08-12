---
name: I_INSPSPECPRINTCONTROLTEXT
description: "Inspspecprintcontroltext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_INSPSPECPRINTCONTROLTEXT

**Inspspecprintcontroltext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSpecPrintControl` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qdruck1 preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `InspSpecPrintControlText` |  | |  | `cast( ddtext as vdm_qdruck1_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspSpecPrintControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecPrintControl` | `I_InspSpecPrintControl` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Print Control of Master Charc - Text' //same as DDL description
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
    representativeKey: 'InspSpecPrintControl'
}
@Analytics.technicalName: 'IINSPPRNTCTRLT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecPrintControlText as select from dd07t

   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   
   association [1..1] to I_InspSpecPrintControl as _InspSpecPrintControl
      on $projection.InspSpecPrintControl = _InspSpecPrintControl.InspSpecPrintControl

{
    key cast ( substring( domvalue_l, 1, 1 ) as vdm_qdruck1 preserving type ) as InspSpecPrintControl,
    @Semantics.language: true
    key ddlanguage                                                            as Language,
    @Semantics.text: true
    cast( ddtext as vdm_qdruck1_text preserving type )                        as InspSpecPrintControlText

    /* Association */
    ,_InspSpecPrintControl
    ,_Language 

}
where domname = 'QDRUCK1' and as4local = 'A'
```
