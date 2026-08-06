---
name: I_MAINTORDOPCOMPCOSTRELEVANCYT
description: Maintordopcompcostrelevancyt
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDOPCOMPCOSTRELEVANCYT

**Maintordopcompcostrelevancyt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintOrdOpCompCostingRelevancy` | `selkz` |
| key `Language` | `langu` |
| `CostingRelevantDescription` | `tck09.stext` |
| `_MaintOrdOpCompCostRelevancy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdOpCompCostRelevancy` | `I_MaintOrdOpCompCostRelevancy` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Maint Order Comp Costing Relevancy - Txt'
@ObjectModel.representativeKey: 'MaintOrdOpCompCostingRelevancy'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IMORDCOMPCOSTRET' 

define view entity I_MaintOrdOpCompCostRelevancyT
  as select from tck09

  association [0..1] to I_MaintOrdOpCompCostRelevancy as _MaintOrdOpCompCostRelevancy on $projection.MaintOrdOpCompCostingRelevancy = _MaintOrdOpCompCostRelevancy.MaintOrdOpCompCostingRelevancy
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MaintOrdOpCompCostRelevancy'
  key selkz       as MaintOrdOpCompCostingRelevancy,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,
      @Semantics.text: true
      tck09.stext as CostingRelevantDescription,
      _MaintOrdOpCompCostRelevancy,
      _Language
}
```
