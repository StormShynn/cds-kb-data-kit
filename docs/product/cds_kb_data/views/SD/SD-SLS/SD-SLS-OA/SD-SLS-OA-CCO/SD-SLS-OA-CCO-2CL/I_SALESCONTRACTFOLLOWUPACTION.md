---
name: I_SALESCONTRACTFOLLOWUPACTION
description: "Salescontractfollowupaction"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - sales-contract
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTFOLLOWUPACTION

**Salescontractfollowupaction**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractFollowUpAction` | ✓ | |  | `aktvt` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesContractFollowUpActionT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    representativeKey: 'SalesContractFollowUpAction',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@EndUserText.label: 'Sales Contract Follow Up Action'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDSCONTRFUPACT',
    buffering:{
        status: #ACTIVE,
        type: #FULL
        }
}
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SalesContractFollowUpAction'
define view I_SalesContractFollowUpAction
  as select from tvas
  association [0..*] to I_SalesContractFollowUpActionT as _Text on $projection.SalesContractFollowUpAction = _Text.SalesContractFollowUpAction
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key aktvt as SalesContractFollowUpAction,

      _Text
}
```
