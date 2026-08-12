---
name: I_GHGSCP2CALCMETHODTEXT
description: "Ghgscp 2CALCMETHODTEXT"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-INT
  - interface-view
  - text-view
  - text
  - component:SUS-INT
  - lob:Other
---
# I_GHGSCP2CALCMETHODTEXT

**Ghgscp 2CALCMETHODTEXT**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `GHGScope2CalculationMethod` | ✓ | |  | `cast( dd07t.domvalue_l as sufnd_vdm_ghgscp2calcmeth )` |  |  |
| `GHGScope2CalculationMethodName` |  | |  | `cast( dd07t.ddtext as sufnd_vdm_ghgscp2calcmethname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'GHG Scope 2 Calculation Method - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'GHGScope2CalculationMethod'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GHGScope2CalculationMethodText'

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_GHGScp2CalcMethodText as select from dd07t 
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
  
      @ObjectModel.text.element: ['GHGScope2CalculationMethodName']
  key cast( dd07t.domvalue_l as sufnd_vdm_ghgscp2calcmeth ) as GHGScope2CalculationMethod,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as sufnd_vdm_ghgscp2calcmethname preserving type ) as GHGScope2CalculationMethodName,
      _Language
} 
where dd07t.domname  = 'SUFND_VDM_GHGSCP2CALCMETH'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
