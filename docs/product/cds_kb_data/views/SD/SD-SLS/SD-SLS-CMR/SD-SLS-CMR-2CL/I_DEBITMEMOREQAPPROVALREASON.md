---
name: I_DEBITMEMOREQAPPROVALREASON
description: "Debitmemoreqapprovalreason"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - approval
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQAPPROVALREASON

**Debitmemoreqapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoReqApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |  |  |

## Source Code

```abap
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDDMRAPPRLRSN',
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
representativeKey: 'DebitMemoReqApprovalReason',
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
  
@EndUserText.label: 'Approval Reason for Debit Memo Request'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestApprovalReason'
define view I_DebitMemoReqApprovalReason
  as select from I_SalesDocApprovalReason as SlsDocApprovalReason
{
      @Search.defaultSearchElement: true
  key SlsDocApprovalReason.SalesDocApprovalReason as DebitMemoReqApprovalReason,
  
      SlsDocApprovalReason._SDApprovalReason,
      SlsDocApprovalReason._SDApprovalReasonT
}
where
  SlsDocApprovalReason.SDDocumentCategory = 'L'
```
