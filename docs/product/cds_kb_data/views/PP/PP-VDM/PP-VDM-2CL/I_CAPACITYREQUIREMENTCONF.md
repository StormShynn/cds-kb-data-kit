---
name: I_CAPACITYREQUIREMENTCONF
description: "Capacityrequirementconf"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CAPACITYREQUIREMENTCONF

**Capacityrequirementconf**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRqmtConfirmation` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as cy_bstkz preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CapacityRequirementConfText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMTCONF'
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
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'CapacityRqmtConfirmation'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Confirmation Code'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CapacityRequirementConf
  as select from dd07l as l
  association [0..*] to I_CapacityRequirementConfText as _Text on $projection.CapacityRqmtConfirmation = _Text.CapacityRqmtConfirmation 
{
    // cast to data element
    @ObjectModel.text.association: '_Text'
    key cast(substring(l.domvalue_l, 1, 1) as cy_bstkz preserving type) as CapacityRqmtConfirmation,
    @Analytics.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l as DomainValue,
    
    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
  where l.domname = 'CY_BSTKZ' and
        l.as4local = 'A' and
        l.as4vers  = '0000';
```
