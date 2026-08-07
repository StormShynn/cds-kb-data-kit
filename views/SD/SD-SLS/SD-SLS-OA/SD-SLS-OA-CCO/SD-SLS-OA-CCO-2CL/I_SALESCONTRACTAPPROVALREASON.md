---
name: I_SALESCONTRACTAPPROVALREASON
description: Salescontractapprovalreason
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
  - approval
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTAPPROVALREASON

**Salescontractapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesContractApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |
| `_SDApprovalReason` | | ✓ | | |
| `_SDApprovalReasonT` | | ✓ | | |

## Source Code

```abap
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDCOAPPRVLRSN',
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
representativeKey: 'SalesContractApprovalReason',
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
@EndUserText.label: 'Sales Contract Approval Reason'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SalesContractApprovalReason'
define view I_SalesContractApprovalReason
  as select from I_SalesDocApprovalReason
{
      @Search.defaultSearchElement: true
  key SalesDocApprovalReason as SalesContractApprovalReason,

      _SDApprovalReason,
      _SDApprovalReasonT

}
where
  SDDocumentCategory = 'G'
```
