---
name: I_FINALCONFIRMATIONTYPE
description: Finalconfirmationtype
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
# I_FINALCONFIRMATIONTYPE

**Finalconfirmationtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinalConfirmationType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as pph_aueru preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinalConfirmationTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IFINALCONFTYPE'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FinalConfirmationType'
@ObjectModel.semanticKey: ['FinalConfirmationType']
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'OrderFinalConfirmationType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Final Confirmation Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_FinalConfirmationType
  as select from dd07l as l
  association [0..*] to I_FinalConfirmationTypeText as _Text on $projection.FinalConfirmationType = _Text.FinalConfirmationType 
  {
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 1) as pph_aueru preserving type) as FinalConfirmationType,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                         as DomainValue,

    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
  }
  where l.domname = 'AUERU_VS'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
