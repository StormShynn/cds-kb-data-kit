---
name: I_GHGENERGYSOURCINGTYPE
description: Ghgenergysourcingtype
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
# I_GHGENERGYSOURCINGTYPE

**Ghgenergysourcingtype**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GHGEnergySourcingType` | `cast( dd07l.domvalue_l as sufnd_vdm_ghgengysrcgtype )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GHGEnergySourcingTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'GHG Energy Sourcing Type Codelist'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'GHGEnergySourcingType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GHGEnergySourcingType'

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true
                                     
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_GHGEnergySourcingType as select from dd07l
association [0..*] to I_GHGEnergySourcingTypeText as _Text on $projection.GHGEnergySourcingType = _Text.GHGEnergySourcingType
{
  @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as sufnd_vdm_ghgengysrcgtype ) as GHGEnergySourcingType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue, //Needed for optimized access according VDM guideline
      
      _Text
}
where
      dd07l.domname  = 'SUFND_VDM_GHGENGYSRCGTYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
