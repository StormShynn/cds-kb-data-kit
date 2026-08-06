---
name: I_RERENEWALRULETYPE
description: Rerenewalruletype
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RERENEWALRULETYPE

**Rerenewalruletype**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RERenewalRuleType` | `cast( dd07l.domvalue_l as retmrnruletype )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRERNWLRULTYPE'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Renewal Rule Type'
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'RERenewalRuleType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define root view entity I_RERenewalRuleType
  as select from dd07l 
  composition [0..*] of I_RERenewalRuleTypeText as _Text //on $projection.RERenewalRuleType = _Text.RERenewalRuleType
{
      @ObjectModel.text.association: '_Text'
//      @Search.defaultSearchElement: true
  key cast( dd07l.domvalue_l as retmrnruletype ) as RERenewalRuleType,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue ,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
} 
where dd07l.domname  = 'RETMRNRULETYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
