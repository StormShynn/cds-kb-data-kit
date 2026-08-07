---
name: I_CASHPLANNINGGROUP
description: Cashplanninggroup
app_component: FIN-FSCM-CLM-FQM-2CL
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
  - component:FIN-FSCM-CLM-FQM-2CL
  - lob:Other
---
# I_CASHPLANNINGGROUP

**Cashplanninggroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashPlanningGroup` | ✓ | |  | `grupp` |  |  |
| `PlanningLevel` |  | |  | `ebene` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CashPlanningGroupText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Cash Planning Group' //same as DDL description
@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ICSHPLANINGGROUP' //must start with "I"
@ObjectModel.representativeKey: 'CashPlanningGroup'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'CashFlowPlanningGroup'
define view I_CashPlanningGroup //must start with "I_"; same as DDL source name in upper-camelcase notation
   as select from t035
association [0..*] to I_CashPlanningGroupText as _Text on $projection.CashPlanningGroup = _Text.CashPlanningGroup
{
  @ObjectModel.text.association: '_Text'
  key grupp as CashPlanningGroup,
  ebene as PlanningLevel,

  _Text
}
```
