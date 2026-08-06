---
name: I_SALESORDERAPPROVALREASON
description: Sales OrderAPPROVALREASON
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - approval
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERAPPROVALREASON

**Sales OrderAPPROVALREASON**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderApprovalReason` | `SalesDocApprovalReason` |
| `_SDApprovalReason` | *Association* |
| `_SDApprovalReasonT` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog: {
   sqlViewName: 'ISLSORDAPMAPRR',
   compiler.compareFilter: true
}

@ObjectModel: {
  representativeKey: 'SalesOrderApprovalReason',
  sapObjectNodeType.name: 'SalesOrderApprovalReason',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
              
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'Approval Reason for Sales Order'

define view I_SalesOrderApprovalReason
    as select from I_SalesDocApprovalReason 
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.text.association: '_SDApprovalReasonT'
  key SalesDocApprovalReason as SalesOrderApprovalReason,
      
      _SDApprovalReason,
      @Analytics.hidden: true
      _SDApprovalReasonT
     
} where SDDocumentCategory = 'C'
```
