---
name: I_CONTROLRECIPEDESTINATIONTYPE
description: Controlrecipedestinationtype
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CONTROLRECIPEDESTINATIONTYPE

**Controlrecipedestinationtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControlRecipeDestinationType` | `cast(substring(l.domvalue_l, 1, 1) as comty preserving type)` |
| `DomainValue` | `l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ControlRecipeDestTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCTRLRECDETYP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'ControlRecipeDestinationType'
@ObjectModel.semanticKey: ['ControlRecipeDestinationType']
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Control Recipe Destination Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_ControlRecipeDestinationType
  as select from dd07l as l
  association [0..*] to I_ControlRecipeDestTypeText as _Text on $projection.ControlRecipeDestinationType = _Text.ControlRecipeDestinationType
  {
      @ObjectModel.text.association: '_Text'
      // cast to data element  
  key cast(substring(l.domvalue_l, 1, 1) as comty preserving type) as ControlRecipeDestinationType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      l.domvalue_l                                                 as DomainValue,

      // Association
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
  }
  where l.domname = 'COMTY' and
        l.as4local = 'A' and 
        l.as4vers  = '0000';
```
