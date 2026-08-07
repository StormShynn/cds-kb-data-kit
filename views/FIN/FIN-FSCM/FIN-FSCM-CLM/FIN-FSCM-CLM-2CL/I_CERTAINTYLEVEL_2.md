---
name: I_CERTAINTYLEVEL_2
description: Certaintylevel 2
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CERTAINTYLEVEL_2

**Certaintylevel 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CertaintyLevel` | ✓ | |  | `cast( dd07l.domvalue_l as fqm_certainty_level)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CertaintyLevelText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Certainty Level'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICERTLEVEL2'
@ObjectModel.representativeKey: 'CertaintyLevel'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name:'CashFlowCertaintyLevel'
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
define view entity I_CertaintyLevel_2 as select from dd07l 
association[0..*] to I_CertaintyLevelText as _Text on $projection.CertaintyLevel = _Text.CertaintyLevel
{ 
   @ObjectModel.text.association: '_Text'
   key cast( dd07l.domvalue_l as fqm_certainty_level) as CertaintyLevel,
   @Analytics.hidden: true
   @Consumption.hidden: true
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   dd07l.domvalue_l                               as DomainValue,

   _Text
} where dd07l.domname  = 'FQM_CERTAINTY_LEVEL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
