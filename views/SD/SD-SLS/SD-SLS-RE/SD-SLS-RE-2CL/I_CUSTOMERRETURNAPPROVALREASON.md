---
name: I_CUSTOMERRETURNAPPROVALREASON
description: Customerreturnapprovalreason
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - customer
  - approval
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNAPPROVALREASON

**Customerreturnapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerReturnApprovalReason` | `SlsDocApprovalReason.SalesDocApprovalReason` |

## Source Code

```abap
@AbapCatalog: {
  preserveKey: true,
  sqlViewName: 'ISDCRAPPRVLRSN',
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
representativeKey: 'CustomerReturnApprovalReason',
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

@EndUserText.label: 'Approval Reason for Returns Order'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnApprovalReason'
define view I_CustomerReturnApprovalReason
  as select from I_SalesDocApprovalReason as SlsDocApprovalReason
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.9
  key SlsDocApprovalReason.SalesDocApprovalReason as CustomerReturnApprovalReason,

      SlsDocApprovalReason._SDApprovalReason,
      SlsDocApprovalReason._SDApprovalReasonT
}
where
  SlsDocApprovalReason.SDDocumentCategory = 'H'
```
