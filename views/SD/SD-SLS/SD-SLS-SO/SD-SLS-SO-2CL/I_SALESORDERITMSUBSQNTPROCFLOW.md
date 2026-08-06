---
name: I_SALESORDERITMSUBSQNTPROCFLOW
description: Sales OrderITMSUBSQNTPROCFLOW
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
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITMSUBSQNTPROCFLOW

**Sales OrderITMSUBSQNTPROCFLOW**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SubsequentProcFlowItem.SalesDocument` |
| key `SalesOrderItem` | `SubsequentProcFlowItem.SalesDocumentItem` |
| key `DocRelationshipUUID` | `SubsequentProcFlowItem.DocRelationshipUUID` |
| `SubsequentDocument` | `SubsequentProcFlowItem.SubsequentDocument` |
| `SubsequentDocumentItem` | `SubsequentProcFlowItem.SubsequentDocumentItem` |
| `SubsequentDocumentCategory` | `SubsequentProcFlowItem.SubsequentDocumentCategory` |
| `ProcessFlowLevel` | `SubsequentProcFlowItem.ProcessFlowLevel` |
| `SubsqntDocItmPrecdgDocument` | `SubsqntDocItmPrecdgDocument` |
| `SubsqntDocItmPrecdgDocItem` | `SubsqntDocItmPrecdgDocItem` |
| `SubsqntDocItmPrecdgDocCategory` | `SubsqntDocItmPrecdgDocCategory` |
| `CreationDate` | `SubsequentProcFlowItem.CreationDate` |
| `CreationTime` | `SubsequentProcFlowItem.CreationTime` |
| `LastChangeDate` | `SubsequentProcFlowItem.LastChangeDate` |
| `SalesOrderType` | `_SalesOrder.SalesOrderType` |
| `SalesOrganization` | `_SalesOrder.SalesOrganization` |
| `DistributionChannel` | `_SalesOrder.DistributionChannel` |
| `OrganizationDivision` | `_SalesOrder.OrganizationDivision` |
| `_SalesOrder` | *Association* |
| `_SalesOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Subsequent Process Flow of Sls Ordr Item'
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

define view entity I_SalesOrderItmSubsqntProcFlow
  as select from I_SalesDocItmSubsqntProcFlow as SubsequentProcFlowItem
  
  association [1..1] to I_SalesOrder     as _SalesOrder     on  $projection.SalesOrder     = _SalesOrder.SalesOrder
  association [1..1] to I_SalesOrderItem as _SalesOrderItem on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                            and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem

{

  key SubsequentProcFlowItem.SalesDocument     as SalesOrder,
  key SubsequentProcFlowItem.SalesDocumentItem as SalesOrderItem,
  key SubsequentProcFlowItem.DocRelationshipUUID,
  
      SubsequentProcFlowItem.SubsequentDocument,
      SubsequentProcFlowItem.SubsequentDocumentItem,
      SubsequentProcFlowItem.SubsequentDocumentCategory,
      
      SubsequentProcFlowItem.ProcessFlowLevel,
      
      SubsqntDocItmPrecdgDocument,
      SubsqntDocItmPrecdgDocItem,
      SubsqntDocItmPrecdgDocCategory,

      @Semantics.systemDate.createdAt: true
      SubsequentProcFlowItem.CreationDate,
      @Semantics.systemTime.createdAt: true
      SubsequentProcFlowItem.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SubsequentProcFlowItem.LastChangeDate,

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
where SubsequentProcFlowItem.SDDocumentCategory = 'C'
```
