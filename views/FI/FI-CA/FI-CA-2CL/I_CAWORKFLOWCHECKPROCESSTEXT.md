---
name: I_CAWORKFLOWCHECKPROCESSTEXT
description: Caworkflowcheckprocesstext
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - workflow
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAWORKFLOWCHECKPROCESSTEXT

**Caworkflowcheckprocesstext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAWorkflowCheckProcess` | `cast( left( domvalue_l, 1 ) as c4eyp_kk preserving type )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `CAWorkflowCheckProcessName` | `cast( ddtext as c4eyp_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled : true

@EndUserText.label: 'Workflow Check Process - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAWorkflowCheckProcess',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAWorkflowCheckProcessText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( domvalue_l, 1 ) as c4eyp_kk preserving type ) as CAWorkflowCheckProcess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )               as Language,
      @Semantics.text
      cast( ddtext as c4eyp_text_kk preserving type )           as CAWorkflowCheckProcessName,

      _Language
}
where
      domname  = 'C4EYP_KK'
  and as4local = 'A'
```
