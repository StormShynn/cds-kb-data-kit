---
name: I_SALESCONTRACTCANCLNPARTY
description: "Salescontractcanclnparty"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SALESCONTRACTCANCLNPARTY

**Salescontractcanclnparty**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractCanclnParty` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesContractCanclnPartyT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    representativeKey: 'SalesContractCanclnParty',
    sapObjectNodeType.name: 'SalesContractCancellationParty',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S 
         },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION 
    }
@EndUserText.label: 'Sales Contract Cancellation Party'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCONTRCANCPTY'
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesContractCanclnParty 
as select from dd07l

association [0..*] to I_SalesContractCanclnPartyT as _Text on $projection.SalesContractCanclnParty = _Text.SalesContractCanclnParty
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as SalesContractCanclnParty ,
    
    _Text
}
where (dd07l.domname = 'VKPAR_VEDA') and (dd07l.as4local = 'A');
```
