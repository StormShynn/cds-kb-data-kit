---
name: I_FINSERVICESPRODUCTGROUP
description: Finservicesproductgroup
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
  - product
  - service
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSERVICESPRODUCTGROUP

**Finservicesproductgroup**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialServicesProductGroup` | ✓ | |  | `fs_product_group` |
| `_FinSrvcsProdGrpHierNode` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinSrvcsProdGrpHierNode` | `I_FinSrvcsProdGrpHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Financial Services Product Group'
@ObjectModel:{
    representativeKey: 'FinancialServicesProductGroup',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    sapObjectNodeType.name: 'FinancialServicesProductGroup',
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
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@Search.searchable: true
@Metadata: {
ignorePropagatedAnnotations: true,
allowExtensions: true
}

define root view entity I_FinServicesProductGroup
  as select from ffs_d_prod_grp
  composition [0..*] of I_FinServicesProductGroupT as _Text

  association [0..*] to I_FinSrvcsProdGrpHierNode  as _FinSrvcsProdGrpHierNode on $projection.FinancialServicesProductGroup = _FinSrvcsProdGrpHierNode.FinancialServicesProductGroup

{

      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FinSrvcsProdGrpHierNode'
  key fs_product_group as FinancialServicesProductGroup,

      /* Associations */
      _Text,
      _FinSrvcsProdGrpHierNode
}
```
