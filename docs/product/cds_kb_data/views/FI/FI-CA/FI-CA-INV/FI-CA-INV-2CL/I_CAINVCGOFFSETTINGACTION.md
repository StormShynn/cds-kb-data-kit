---
name: I_CAINVCGOFFSETTINGACTION
description: "Cainvcgoffsettingaction"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGOFFSETTINGACTION

**Cainvcgoffsettingaction**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgOffsettingAction` | ✓ | |  | `cast( substring( l.domvalue_l ,1,1 ) as inv_offset_action_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAInvcgOffsettingActionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Aktionscode bei Anrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgOffsettingAction',
  sapObjectNodeType.name: 'ContrAcctgInvcgOffstgAction',
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgOffsettingAction
  as select from dd07l as l
  association [0..*] to I_CAInvcgOffsettingActionText as _Text on $projection.CAInvcgOffsettingAction = _Text.CAInvcgOffsettingAction
{
      @ObjectModel.text.association: '_Text'
  key cast( substring( l.domvalue_l ,1,1 ) as inv_offset_action_kk preserving type ) as CAInvcgOffsettingAction,
  
      _Text
}
where
      l.domname  = 'INV_OFFSET_ACTION_KK'
  and l.as4local = 'A';
```
