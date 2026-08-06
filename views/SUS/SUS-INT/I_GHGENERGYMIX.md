---
name: I_GHGENERGYMIX
description: Ghgenergymix
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
# I_GHGENERGYMIX

**Ghgenergymix**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GHGEnergyMix` | `cast( dd07l.domvalue_l as sufnd_vdm_ghgenergymix )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GHGEnergyMixText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'GHG Energy Mix Codelist'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL


@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'GHGEnergyMix'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GHGEnergyMix'

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_GHGEnergyMix as select from dd07l
association [0..*] to I_GHGEnergyMixText as _Text on $projection.GHGEnergyMix = _Text.GHGEnergyMix
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as sufnd_vdm_ghgenergymix ) as GHGEnergyMix,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue, //Needed for optimized access according VDM guideline
      
      _Text
}
where
      dd07l.domname  = 'SUFND_VDM_GHGENERGYMIX'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
