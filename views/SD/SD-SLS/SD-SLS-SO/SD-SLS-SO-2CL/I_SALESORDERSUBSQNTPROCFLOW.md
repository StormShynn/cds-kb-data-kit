---
name: I_SALESORDERSUBSQNTPROCFLOW
description: Sales OrderSUBSQNTPROCFLOW
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
# I_SALESORDERSUBSQNTPROCFLOW

**Sales OrderSUBSQNTPROCFLOW**

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
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `SubsequentDocument` |  | |  |  |  |  |
| `SubsequentDocumentCategory` |  | |  |  |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Subsequent Process Flow of Sales Order'
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

define view entity I_SalesOrderSubsqntProcFlow as select from I_SalesDocumentSubsqntProcFlow as SubsequentProcFlow
  
association [1..1] to I_SalesOrder       as _SalesOrder       on  _SalesOrder.SalesOrder      = $projection.SalesOrder 

{
  key SubsequentProcFlow.SalesDocument as SalesOrder,
  key SubsequentProcFlow.DocRelationshipUUID,
  
      SubsequentProcFlow.SubsequentDocument,
      SubsequentProcFlow.SubsequentDocumentCategory,
      
      SubsequentProcFlow.ProcessFlowLevel,

      @Semantics.systemDate.createdAt: true
      SubsequentProcFlow.CreationDate,
      @Semantics.systemTime.createdAt: true
      SubsequentProcFlow.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SubsequentProcFlow.LastChangeDate,

      // For Access control
      @Consumption.hidden: true
      _SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      _SalesOrder.SalesOrganization,
      @Consumption.hidden: true
      _SalesOrder.DistributionChannel,
      @Consumption.hidden: true
      _SalesOrder.OrganizationDivision,

      // Associations
      _SalesOrder
}
where
  SubsequentProcFlow.SDDocumentCategory = 'C'
```
