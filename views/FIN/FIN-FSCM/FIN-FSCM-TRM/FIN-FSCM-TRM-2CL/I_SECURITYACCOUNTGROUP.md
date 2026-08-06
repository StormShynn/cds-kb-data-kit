---
name: I_SECURITYACCOUNTGROUP
description: Securityaccountgroup
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNTGROUP

**Securityaccountgroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `SecurityAccountGroup.company_code` |
| key `SecurityAccountGroup` | `cast(SecurityAccountGroup.sec_acct_grp as ftr_gen_sec_account_group preserving type)` |
| `SecurityAccountGroupName` | `cast(SecurityAccountGroup.sec_acct_grp_nam as ftr_gen_sec_account_group_name preserving type)` |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISECACCOUNTGRP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Account Group'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityAccountGroup'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccountGroup'

define view I_SecurityAccountGroup
  as select from trgt_secaccgrp as SecurityAccountGroup

  association to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode

{
      //--[ GENERATED:012:GlBfhyJl7kY4pGd}um{aL0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
  key SecurityAccountGroup.company_code                                                             as CompanyCode,
      @ObjectModel.text.element: 'SecurityAccountGroupName'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem: [{ position : 1 }]
  key cast(SecurityAccountGroup.sec_acct_grp  as ftr_gen_sec_account_group preserving type)         as SecurityAccountGroup,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem: [{ position : 2 }]
      cast(SecurityAccountGroup.sec_acct_grp_nam as ftr_gen_sec_account_group_name preserving type) as SecurityAccountGroupName,

      _CompanyCode
}
```
