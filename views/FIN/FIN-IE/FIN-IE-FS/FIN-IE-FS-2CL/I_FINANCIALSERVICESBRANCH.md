---
name: I_FINANCIALSERVICESBRANCH
description: Financialservicesbranch
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - service
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINANCIALSERVICESBRANCH

**Financialservicesbranch**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialServicesBranch` | ✓ | |  | `branch_id` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Financial Services Branch'
@ObjectModel:{
    representativeKey: 'FinancialServicesBranch',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    sapObjectNodeType.name: 'FinancialServicesBranch',
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#MANDATORY
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@Search.searchable: true
@Metadata: {
ignorePropagatedAnnotations: true,
allowExtensions: true
}

define root view entity I_FinancialServicesBranch
  as select from ffs_d_branch
  composition [0..*] of I_FinancialServicesBranchT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key branch_id as FinancialServicesBranch,

      /* Associations */
      _Text

}
```
