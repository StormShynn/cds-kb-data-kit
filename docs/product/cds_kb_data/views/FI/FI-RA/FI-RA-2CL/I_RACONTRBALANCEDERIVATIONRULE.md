---
name: I_RACONTRBALANCEDERIVATIONRULE
description: "Racontrbalancederivationrule"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RACONTRBALANCEDERIVATIONRULE

**Racontrbalancederivationrule**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RAContrBalanceDerivationRule` | ✓ | |  | `cast(dd07l.domvalue_l as farr_create_liability_method)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRACONTRBALDRVTN'

@Consumption.ranked: true

@EndUserText.label: 'RA Contract Balance Derivation Rule'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'RAContrBalanceDerivationRule'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_RAContrBalanceDerivationRule
  as select from dd07l

  composition [0..*] of I_RAContrBalanceDrvtnRuleText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_create_liability_method) as RAContrBalanceDerivationRule,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                       as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_CREATE_LIABILITY_METHOD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
