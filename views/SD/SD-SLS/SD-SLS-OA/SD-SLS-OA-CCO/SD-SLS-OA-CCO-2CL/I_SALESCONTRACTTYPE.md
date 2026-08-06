---
name: I_SALESCONTRACTTYPE
description: Salescontracttype
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
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTTYPE

**Salescontracttype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContractType` | `cast ( SalesDocumentType as sales_contract_type preserving type )` |
| `ScreenSequenceGroup` | `ScreenSequenceGroup` |
| `_Text` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    representativeKey: 'SalesContractType',
    usageType:{
        dataClass:#CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@EndUserText.label: 'Sales Contract Types'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSCONTRTP'
@Metadata.allowExtensions: true
//@AbapCatalog.buffering.status: #ACTIVE
//@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SalesContractType'
define view I_SalesContractType 
as select from I_SalesDocumentType

{   
    //key
    @ObjectModel.text.association: '_Text'
    key cast ( SalesDocumentType as sales_contract_type preserving type ) as SalesContractType,
    
    ScreenSequenceGroup,
    
    //association 
    _Text
}
where SDDocumentCategory = 'G';
```
