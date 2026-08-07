---
name: I_SALESDOCITMPRECDGPROCFLOW
description: Salesdocitmprecdgprocflow
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCITMPRECDGPROCFLOW

**Salesdocitmprecdgprocflow**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  | `SubsequentDocument` |  |  |
| `SalesDocumentItem` | ✓ | |  | `SubsequentDocumentItem` |  |  |
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `SDDocumentCategory` |  | |  | `SubsequentDocumentCategory` |  |  |
| `PrecedingDocument` |  | |  |  |  |  |
| `PrecedingDocumentItem` |  | |  |  |  |  |
| `PrecedingDocumentCategory` |  | |  |  |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [1..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Preceding Process Flow of Sales Doc Item'
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
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesDocItmPrecdgProcFlow 
    as select from I_SDDocumentMultiLevelProcFlow as PrecedingProcFlowItem
        inner join   I_SalesDocumentItemBasic   as SalesDocumentItem on  SalesDocumentItem.SalesDocument      = PrecedingProcFlowItem.SubsequentDocument  
                                                                     and SalesDocumentItem.SalesDocumentItem  = PrecedingProcFlowItem.SubsequentDocumentItem 
                                                                     and SalesDocumentItem.SDDocumentCategory = PrecedingProcFlowItem.SubsequentDocumentCategory
                                                 
association [1..1] to I_SalesDocument     as _SalesDocument       on $projection.SalesDocument     = _SalesDocument.SalesDocument

association [1..1] to I_SalesDocumentItem as _SalesDocumentItem   on $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                  and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem                                                            
                                                         
{

    
    key PrecedingProcFlowItem.SubsequentDocument as SalesDocument,
    key PrecedingProcFlowItem.SubsequentDocumentItem as SalesDocumentItem,
    key PrecedingProcFlowItem.DocRelationshipUUID,   
        PrecedingProcFlowItem.SubsequentDocumentCategory as SDDocumentCategory,
    
        PrecedingProcFlowItem.PrecedingDocument,
        PrecedingProcFlowItem.PrecedingDocumentItem ,      
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
        SalesDocumentItem.SalesDocumentType,
        @Consumption.hidden: true
        SalesDocumentItem.SalesOrganization,
        @Consumption.hidden: true
        SalesDocumentItem.DistributionChannel,
        @Consumption.hidden: true
        SalesDocumentItem.OrganizationDivision,
        
        //Associations
        _SalesDocument,
        _SalesDocumentItem
    
}
```
