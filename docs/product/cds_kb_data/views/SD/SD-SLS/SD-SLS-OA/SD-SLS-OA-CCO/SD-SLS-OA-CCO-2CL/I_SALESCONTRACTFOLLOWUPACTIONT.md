---
name: I_SALESCONTRACTFOLLOWUPACTIONT
description: "Salescontractfollowupactiont"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SALESCONTRACTFOLLOWUPACTIONT

**Salescontractfollowupactiont**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractFollowUpAction` | ✓ | |  | `aktvt` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SlsContractFollowUpActionDesc` |  | |  | `bezei` |  |  |
| `_SalesContractFollowUpAction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractFollowUpAction` | `I_SalesContractFollowUpAction` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'SalesContractFollowUpAction',
    usageType:{
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}

@EndUserText.label: 'Follow-Up Action of Sales Contract - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDSCONTRFUPACTT',
    buffering:{
        status: #ACTIVE,
        type: #FULL
        }
}
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesContractFollowUpActionT as select from tvasb
association[0..1] to I_SalesContractFollowUpAction as _SalesContractFollowUpAction on $projection.SalesContractFollowUpAction = _SalesContractFollowUpAction.SalesContractFollowUpAction
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesContractFollowUpAction'
    key aktvt as SalesContractFollowUpAction,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true 
    bezei as SlsContractFollowUpActionDesc,
    
    //Associations
    _SalesContractFollowUpAction,
    _Language        
}
```
