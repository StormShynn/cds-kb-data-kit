---
name: I_SALESDOCUMENTPRECDGPROCFLOW
description: "Salesdocumentprecdgprocflow"
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
  - sales-document
  - document
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTPRECDGPROCFLOW

**Salesdocumentprecdgprocflow**

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
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `PrecedingDocument` |  | |  |  |  |  |
| `PrecedingDocumentCategory` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  | `SubsequentDocumentCategory` |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Preceding Process Flow of Sales Document'
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

define view entity I_SalesDocumentPrecdgProcFlow 
    as select from I_SDDocumentMultiLevelProcFlow as PrecedingProcFlow

    inner join     I_SalesDocumentBasic           as SalesDocument  on  SalesDocument.SalesDocument      = PrecedingProcFlow.SubsequentDocument
                                                                    and SalesDocument.SDDocumentCategory = PrecedingProcFlow.SubsequentDocumentCategory   
                                                                                                                 
    association [1..1] to  I_SalesDocument        as _SalesDocument on _SalesDocument.SalesDocument = $projection.SalesDocument                                                                                                      
                                                         
{

    key PrecedingProcFlow.SubsequentDocument as SalesDocument, 
    key PrecedingProcFlow.DocRelationshipUUID, 
    
        PrecedingProcFlow.PrecedingDocument,       
        PrecedingProcFlow.PrecedingDocumentCategory,
        PrecedingProcFlow.SubsequentDocumentCategory as SDDocumentCategory,
        
        PrecedingProcFlow.ProcessFlowLevel,
        
        @Semantics.systemDate.createdAt: true
        PrecedingProcFlow.CreationDate,
        @Semantics.systemTime.createdAt: true
        PrecedingProcFlow.CreationTime,
        @Semantics.systemDate.lastChangedAt: true
        PrecedingProcFlow.LastChangeDate,
               
        // For Access control
        @Consumption.hidden: true
        SalesDocument.SalesDocumentType,
        @Consumption.hidden: true
        SalesDocument.SalesOrganization,
        @Consumption.hidden: true
        SalesDocument.DistributionChannel,
        @Consumption.hidden: true
        SalesDocument.OrganizationDivision,
        
        //Associations
        _SalesDocument
        
} where PrecedingProcFlow.SubsequentDocumentItem   = '000000'
```
