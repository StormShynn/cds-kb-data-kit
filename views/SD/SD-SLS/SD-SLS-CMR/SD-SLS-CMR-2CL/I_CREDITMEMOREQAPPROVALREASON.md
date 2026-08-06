---
name: I_CREDITMEMOREQAPPROVALREASON
description: Creditmemoreqapprovalreason
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
  - approval
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQAPPROVALREASON

**Creditmemoreqapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoReqApprovalReason` | `SalesDocApprovalReason` |
| `_SDApprovalReason` | *Association* |
| `_SDApprovalReasonT` | *Association* |

## Source Code

```abap
@AbapCatalog: {
   sqlViewName: 'ISDCRDMEMOREQAPR',
   preserveKey: true,
   compiler.compareFilter: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED


@VDM.viewType: #BASIC
@ObjectModel:{
 usageType:{ dataClass: #CUSTOMIZING,
             serviceQuality: #A,
             sizeCategory: #S
 },
representativeKey: 'CreditMemoReqApprovalReason',
supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                         #EXTRACTION_DATA_SOURCE,
                         #SQL_DATA_SOURCE,
                         #CDS_MODELING_DATA_SOURCE,
                         #CDS_MODELING_ASSOCIATION_TARGET,
                         #SEARCHABLE_ENTITY],
modelingPattern:#ANALYTICAL_DIMENSION
}

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@EndUserText.label: 'Approval Reason for Credit Memo Request'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'CreditMemoReqApprovalReason'
define view I_CreditMemoReqApprovalReason
    as select from I_SalesDocApprovalReason 
{
      @Search.defaultSearchElement: true
  key SalesDocApprovalReason as CreditMemoReqApprovalReason,
      
      _SDApprovalReason,
      _SDApprovalReasonT
    
} where SDDocumentCategory = 'K'
```
