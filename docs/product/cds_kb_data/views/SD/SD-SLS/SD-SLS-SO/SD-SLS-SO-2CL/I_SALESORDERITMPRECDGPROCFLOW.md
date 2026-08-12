---
name: I_SALESORDERITMPRECDGPROCFLOW
description: "Sales OrderITMPRECDGPROCFLOW"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITMPRECDGPROCFLOW

**Sales OrderITMPRECDGPROCFLOW**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `SalesDocument` |  |  |
| `SalesOrderItem` | ✓ | |  | `SalesDocumentItem` |  |  |
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `PrecedingDocument` |  | |  |  |  |  |
| `PrecedingDocumentItem` |  | |  |  |  |  |
| `PrecedingDocumentCategory` |  | |  |  |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Preceding Process Flow of Sls Order Item'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderItmPrecdgProcFlow as select from I_SalesDocItmPrecdgProcFlow as PrecedingProcFlowItem
                                               
association [1..1] to I_SalesOrder       as _SalesOrder       on  $projection.SalesOrder      =  _SalesOrder.SalesOrder 
association [1..1] to I_SalesOrderItem   as _SalesOrderItem   on  $projection.SalesOrder      =  _SalesOrderItem.SalesOrder
                                                              and $projection.SalesOrderItem  = _SalesOrderItem.SalesOrderItem
                                                         
{ 
    key PrecedingProcFlowItem.SalesDocument  as SalesOrder,
    key PrecedingProcFlowItem.SalesDocumentItem as SalesOrderItem,
    key PrecedingProcFlowItem.DocRelationshipUUID, 
    
        PrecedingProcFlowItem.PrecedingDocument,
        PrecedingProcFlowItem.PrecedingDocumentItem,
        PrecedingProcFlowItem.PrecedingDocumentCategory,
        
        PrecedingProcFlowItem.ProcessFlowLevel,

        @Semantics.systemDate.createdAt: true
        PrecedingProcFlowItem.CreationDate,
        @Semantics.systemTime.createdAt: true
        PrecedingProcFlowItem.CreationTime,
        @Semantics.systemDate.lastChangedAt: true
        PrecedingProcFlowItem.LastChangeDate,
        
        // For Access control
        @Consumption.hidden: true
        _SalesOrder.SalesOrderType,
        @Consumption.hidden: true
        _SalesOrder.SalesOrganization,
        @Consumption.hidden: true
        _SalesOrder.DistributionChannel,
        @Consumption.hidden: true
        _SalesOrder.OrganizationDivision,
        
        //Associations
        _SalesOrder,
        _SalesOrderItem
    
}
where PrecedingProcFlowItem.SDDocumentCategory = 'C'
```
