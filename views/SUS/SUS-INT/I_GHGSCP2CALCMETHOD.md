---
name: I_GHGSCP2CALCMETHOD
description: "Ghgscp 2CALCMETHOD"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-INT
  - interface-view
  - component:SUS-INT
  - lob:Other
---
# I_GHGSCP2CALCMETHOD

**Ghgscp 2CALCMETHOD**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGScope2CalculationMethod` | ✓ | |  | `cast( dd07l.domvalue_l as sufnd_vdm_ghgscp2calcmeth )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |
| `_GHGScope` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GHGScp2CalcMethodText` | [0..*] |
| `_GHGScope` | `I_GHGScope` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'GHG Scope 2 Calculation Method Codelist'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'GHGScope2CalculationMethod'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GHGScope2CalculationMethod'

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_GHGScp2CalcMethod
  as select from dd07l
  association [0..*] to I_GHGScp2CalcMethodText as _Text on $projection.GHGScope2CalculationMethod = _Text.GHGScope2CalculationMethod
  association [1..1] to I_GHGScope            as _GHGScope on _GHGScope.GHGScope = '2'
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as sufnd_vdm_ghgscp2calcmeth ) as GHGScope2CalculationMethod,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue, //Needed for optimized access according VDM guideline
      
      _Text,
      _GHGScope
}
where
      dd07l.domname  = 'SUFND_VDM_GHGSCP2CALCMETH'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
