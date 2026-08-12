---
name: I_GHGSCP2CNTRCTLINSTRUMENT
description: "Ghgscp 2CNTRCTLINSTRUMENT"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_GHGSCP2CNTRCTLINSTRUMENT

**Ghgscp 2CNTRCTLINSTRUMENT**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGScope2ContractualInstrument` | ✓ | |  | `code` |  |  |
| `_Text` | | ✓ | | | | |
| `_GHGScope` | | ✓ | | | | |
| `_GHGScp2CalcMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GHGScp2CntrctlInstrText` | [0..*] |
| `_GHGScope` | `I_GHGScope` | [1..1] |
| `_GHGScp2CalcMethod` | `I_GHGScp2CalcMethod` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'GHG Scope 2 Contractual Instrument Codelist'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'GHGScope2ContractualInstrument'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GHGScope2ContractualInstrument'

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true
define view entity I_GHGScp2CntrctlInstrument
  as select from sufndd_ghg_s2ci
  association [0..*] to I_GHGScp2CntrctlInstrText as _Text on $projection.GHGScope2ContractualInstrument = _Text.GHGScope2ContractualInstrument
  association [1..1] to I_GHGScope as _GHGScope on _GHGScope.GHGScope = '2' 
  association [1..1] to I_GHGScp2CalcMethod as _GHGScp2CalcMethod on _GHGScp2CalcMethod.GHGScope2CalculationMethod = 'MB' 
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key sufndd_ghg_s2ci.code    as GHGScope2ContractualInstrument,
      
      _Text,
      _GHGScope,
      _GHGScp2CalcMethod
}
```
