---
name: I_INSPSPECRSLTCALCULATIONTEXT
description: Inspspecrsltcalculationtext
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
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECRSLTCALCULATIONTEXT

**Inspspecrsltcalculationtext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspSpecResultCalculation` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as vdm_qkzformel preserving type )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `InspSpecResultCalculationText` |  | |  | `cast( ddtext as vdm_qkzformel_text preserving type )` |
| `_Language` | | ✓ | | |
| `_InspSpecResultCalculation` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspSpecResultCalculation` | `I_InspSpecRsltCalculation` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Characteristic Result Calculation - Text' //same as DDL description
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
    representativeKey: 'InspSpecResultCalculation'
}
@Analytics.technicalName: 'IINSPRSLTCALCT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecRsltCalculationText
  as select from dd07t

  association [0..1] to I_Language                as _Language                  on $projection.Language = _Language.Language

  association [1..1] to I_InspSpecRsltCalculation as _InspSpecResultCalculation on $projection.InspSpecResultCalculation = _InspSpecResultCalculation.InspSpecResultCalculation

{
  key cast ( substring( domvalue_l, 1, 1 ) as vdm_qkzformel preserving type ) as InspSpecResultCalculation,
      @Semantics.language
  key ddlanguage                                                              as Language,
      @Semantics.text
      cast( ddtext as vdm_qkzformel_text preserving type )                    as InspSpecResultCalculationText,

      /* Associations */
      _InspSpecResultCalculation,
      _Language

}
where
      domname  = 'QKZFORMEL'
  and as4local = 'A'
```
