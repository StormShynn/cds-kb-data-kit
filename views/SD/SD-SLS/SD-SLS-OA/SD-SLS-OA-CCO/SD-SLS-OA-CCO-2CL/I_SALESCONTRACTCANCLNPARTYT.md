---
name: I_SALESCONTRACTCANCLNPARTYT
description: Salescontractcanclnpartyt
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
# I_SALESCONTRACTCANCLNPARTYT

**Salescontractcanclnpartyt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContractCanclnParty` | `substring(dd07t.domvalue_l, 1, 1)` |
| key `Language` | `ddlanguage` |
| `SalesContractCanclnPartyName` | `ddtext` |
| `_SalesContractCanclnParty` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractCanclnParty` | `I_SalesContractCanclnParty` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    representativeKey: 'SalesContractCanclnParty',
    dataCategory: #TEXT,
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S 
         },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
    }
@EndUserText.label: 'Cancellation Party of Sales Contract - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCONTRCANCPTYT'
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesContractCanclnPartyT
as select from dd07t

association[0..1] to I_SalesContractCanclnParty as _SalesContractCanclnParty on $projection.SalesContractCanclnParty = _SalesContractCanclnParty.SalesContractCanclnParty
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
    key substring(dd07t.domvalue_l, 1, 1) as SalesContractCanclnParty,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as SalesContractCanclnPartyName,
    
    //Associations
    _SalesContractCanclnParty,
    _Language
} 
where (domname = 'VKPAR_VEDA') and (as4local = 'A');
```
