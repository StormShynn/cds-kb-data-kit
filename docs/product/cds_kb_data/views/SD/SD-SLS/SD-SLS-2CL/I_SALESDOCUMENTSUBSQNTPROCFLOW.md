---
name: I_SALESDOCUMENTSUBSQNTPROCFLOW
description: "Salesdocumentsubsqntprocflow"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_SALESDOCUMENTSUBSQNTPROCFLOW

**Salesdocumentsubsqntprocflow**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  | `PrecedingDocument` |  |  |
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `SubsequentDocument` |  | |  |  |  |  |
| `SubsequentDocumentCategory` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  | `PrecedingDocumentCategory` |  |  |
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
@EndUserText.label: 'Subsequent Process Flow of Sales Doc'
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

define view entity I_SalesDocumentSubsqntProcFlow
  as select from I_SDDocumentMultiLevelProcFlow as SubsequentProcFlow 
  
    inner join   I_SalesDocumentBasic           as SalesDocument on  SalesDocument.SalesDocument      = SubsequentProcFlow.PrecedingDocument 
                                                                 and SalesDocument.SDDocumentCategory = SubsequentProcFlow.PrecedingDocumentCategory                                                                     

    association [1..1] to I_SalesDocument       as _SalesDocument on _SalesDocument.SalesDocument = $projection.SalesDocument 
{

  key SubsequentProcFlow.PrecedingDocument         as SalesDocument,
  key SubsequentProcFlow.DocRelationshipUUID,
       
      SubsequentProcFlow.SubsequentDocument,
 
      SubsequentProcFlow.SubsequentDocumentCategory,
      SubsequentProcFlow.PrecedingDocumentCategory as SDDocumentCategory,
      
      SubsequentProcFlow.ProcessFlowLevel,

      @Semantics.systemDate.createdAt: true
      SubsequentProcFlow.CreationDate,
      @Semantics.systemTime.createdAt: true
      SubsequentProcFlow.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SubsequentProcFlow.LastChangeDate,

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
      
}  where SubsequentProcFlow.PrecedingDocumentItem = '000000';
```
