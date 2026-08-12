---
name: I_SALESDOCITMSUBSQNTPROCFLOW
description: "Salesdocitmsubsqntprocflow"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SALESDOCITMSUBSQNTPROCFLOW

**Salesdocitmsubsqntprocflow**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  | `PrecedingDocument` |  |  |
| `SalesDocumentItem` | ✓ | |  | `PrecedingDocumentItem` |  |  |
| `DocRelationshipUUID` | ✓ | |  | `case when SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'M' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'M' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'P' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'O' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'S' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'O' or SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'P' or SubsequentProcFlowItem.SubsequentDocumentCategory = '6' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = '5' then _SDDocMultiLevelProcFlow.DocRelationshipUUID else SubsequentProcFlowItem.DocRelationshipUUID end` |  |  |
| `SDDocumentCategory` |  | |  | `PrecedingDocumentCategory` |  |  |
| `SubsequentDocument` |  | |  |  |  |  |
| `SubsequentDocumentItem` |  | |  |  |  |  |
| `SubsequentDocumentCategory` |  | |  |  |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `SubsqntDocItmPrecdgDocument` |  | | `_SDDocMultiLevelProcFlow` | `PrecedingDocument` |  |  |
| `SubsqntDocItmPrecdgDocItem` |  | | `_SDDocMultiLevelProcFlow` | `PrecedingDocumentItem` |  |  |
| `SubsqntDocItmPrecdgDocCategory` |  | | `_SDDocMultiLevelProcFlow` | `PrecedingDocumentCategory` |  |  |
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
@EndUserText.label: 'Subsequent Process Flow of Sls Doc Item'
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

define view entity I_SalesDocItmSubsqntProcFlow
  as select from I_SDDocumentMultiLevelProcFlow as SubsequentProcFlowItem
    inner join   I_SalesDocumentItemBasic       as SalesDocumentItem on  SalesDocumentItem.SalesDocument      = SubsequentProcFlowItem.PrecedingDocument    
                                                                     and SalesDocumentItem.SalesDocumentItem  = SubsequentProcFlowItem.PrecedingDocumentItem 
                                                                     and SalesDocumentItem.SDDocumentCategory = SubsequentProcFlowItem.PrecedingDocumentCategory

    left outer to one join I_SDDocumentMultiLevelProcFlow as _SDDocMultiLevelProcFlow on _SDDocMultiLevelProcFlow.SubsequentDocument          = SubsequentProcFlowItem.SubsequentDocument
                                                                                      and _SDDocMultiLevelProcFlow.SubsequentDocumentCategory = SubsequentProcFlowItem.SubsequentDocumentCategory
                                                                                      and _SDDocMultiLevelProcFlow.SubsequentDocumentItem     = SubsequentProcFlowItem.SubsequentDocumentItem
                                                                                      and _SDDocMultiLevelProcFlow.ProcessFlowLevel           = '00'
                                                                                      
  association [1..1] to I_SalesDocument     as _SalesDocument     on  $projection.SalesDocument = _SalesDocument.SalesDocument
  
  association [1..1] to I_SalesDocumentItem as _SalesDocumentItem on  $projection.SalesDocument = _SalesDocumentItem.SalesDocument
                                                                  and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem

{

  key  SubsequentProcFlowItem.PrecedingDocument     as SalesDocument,
  key  SubsequentProcFlowItem.PrecedingDocumentItem as SalesDocumentItem,
  key  case when
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'M'
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD'
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'M' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD'
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'P' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD'
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'O' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'PBD'
          or 
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'S' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'O'
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = 'N' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = 'P'       
          or
          SubsequentProcFlowItem.SubsequentDocumentCategory = '6' and _SDDocMultiLevelProcFlow.PrecedingDocumentCategory = '5'
      then
          _SDDocMultiLevelProcFlow.DocRelationshipUUID
      else
          SubsequentProcFlowItem.DocRelationshipUUID
      end as DocRelationshipUUID,    

       SubsequentProcFlowItem.PrecedingDocumentCategory as SDDocumentCategory,
       
       SubsequentProcFlowItem.SubsequentDocument,
       SubsequentProcFlowItem.SubsequentDocumentItem,
       SubsequentProcFlowItem.SubsequentDocumentCategory,
           
       SubsequentProcFlowItem.ProcessFlowLevel,
       
      _SDDocMultiLevelProcFlow.PrecedingDocument         as SubsqntDocItmPrecdgDocument,
      _SDDocMultiLevelProcFlow.PrecedingDocumentItem     as SubsqntDocItmPrecdgDocItem,
      _SDDocMultiLevelProcFlow.PrecedingDocumentCategory as SubsqntDocItmPrecdgDocCategory,

        @Semantics.systemDate.createdAt: true
        SubsequentProcFlowItem.CreationDate,
        @Semantics.systemTime.createdAt: true
        SubsequentProcFlowItem.CreationTime,
        @Semantics.systemDate.lastChangedAt: true
        SubsequentProcFlowItem.LastChangeDate,
        
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
