---
name: I_SALESCONTRACTCANCLNREASONT
description: "Salescontractcanclnreasont"
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
# I_SALESCONTRACTCANCLNREASONT

**Salescontractcanclnreasont**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `SalesContractCanclnReasonText` |  | |  | `bezei` |  |  |
| `_SalesContractCanclnReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractCanclnReason` | `I_SalesContractCanclnReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    representativeKey: 'SalesContractCanclnReason',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}
@EndUserText.label: 'Cancellation Reason of Sales Contract - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDSCONTRCANRSNT',
    buffering: {
    status: #ACTIVE,
    type: #FULL
    }
}
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesContractCanclnReasonT as select from tvkgt 
association[0..1] to I_SalesContractCanclnReason as _SalesContractCanclnReason on $projection.SalesContractCanclnReason = _SalesContractCanclnReason.SalesContractCanclnReason
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
    key kuegru as SalesContractCanclnReason,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as SalesContractCanclnReasonText,
    
    //Associations
    _SalesContractCanclnReason,
    _Language        
}
```
