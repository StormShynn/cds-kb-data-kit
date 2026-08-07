---
name: I_CREDITMEMOREQUESTTYPE
description: "Creditmemorequesttype"
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
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTTYPE

**Creditmemorequesttype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditMemoRequestType` | ✓ | |  | `cast ( SalesDocumentType as credit_memo_request_type preserving type )` |  |  |
| `CreditMemoRequestProcgType` |  | |  | `SalesDocumentProcessingType` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'CreditMemoRequestType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestType'
@EndUserText.label: 'Credit Memo Request Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCRDTMEMOREQTP'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
//@AbapCatalog.buffering.status: #ACTIVE
//@AbapCatalog.buffering.type: #FULL

define view I_CreditMemoRequestType 
as select from I_SalesDocumentType

{   
    @ObjectModel.text.association: '_Text'
    key cast ( SalesDocumentType as credit_memo_request_type preserving type ) as CreditMemoRequestType,
    SalesDocumentProcessingType as CreditMemoRequestProcgType,
    
    //association 
    _Text
}
where SDDocumentCategory = 'K';
```
