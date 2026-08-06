---
name: I_DEBITMEMOREQUESTTYPE
description: Debitmemorequesttype
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTTYPE

**Debitmemorequesttype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DebitMemoRequestType` | `cast(SalesDocumentType as debit_memo_request_type preserving type )` |
| `DebitMemoRequestProcessingType` | `SalesDocumentProcessingType` |
| `_Text` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'DebitMemoRequestType'
@ObjectModel.usageType.dataClass:#CUSTOMIZING
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestType'
@EndUserText.label: 'Debit Memo Request Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDEBTMEMOREQTP'
@Metadata.ignorePropagatedAnnotations:true
//@AbapCatalog.buffering.status: #ACTIVE
//@AbapCatalog.buffering.type: #FULL

define view I_DebitMemoRequestType as select from I_SalesDocumentType

{   
    @ObjectModel.text.association: '_Text'
    key cast(SalesDocumentType as debit_memo_request_type preserving type ) as DebitMemoRequestType,
    SalesDocumentProcessingType as DebitMemoRequestProcessingType,
    
    //association 
    _Text
}
where SDDocumentCategory = 'L';
```
