---
name: I_SALESCONTRACTCANCLNREASON
description: "Salescontractcanclnreason"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SALESCONTRACTCANCLNREASON

**Salescontractcanclnreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractCanclnReason` | ✓ | |  | `kuegru` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesContractCanclnReasonT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    representativeKey: 'SalesContractCanclnReason',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION 
}
@EndUserText.label: 'Sales Contract Cancellation Reason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDSCONTRCANRSN',
    buffering:{
        status: #ACTIVE,
        type: #FULL
        }
}
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.sapObjectNodeType.name: 'SalesContractCanclnReason'
define view I_SalesContractCanclnReason as select from tvkg
association [0..*] to I_SalesContractCanclnReasonT as _Text on $projection.SalesContractCanclnReason = _Text.SalesContractCanclnReason
{
    @ObjectModel.text.association: '_Text'
    key kuegru as SalesContractCanclnReason,
    
    _Text
}
```
