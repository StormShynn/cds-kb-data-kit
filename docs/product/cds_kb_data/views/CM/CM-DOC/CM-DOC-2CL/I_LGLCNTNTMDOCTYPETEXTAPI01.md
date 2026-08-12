---
name: I_LGLCNTNTMDOCTYPETEXTAPI01
description: "Lglcntntmdoctypetextapi 01"
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - text
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMDOCTYPETEXTAPI01

**Lglcntntmdoctypetextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMDocTypeText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILGLDOCTYPTAPI01'
@EndUserText.label: 'Legal Document Type - Text'
@ObjectModel.representativeKey: 'LglCntntMDocType'
@ObjectModel.semanticKey: 'LglCntntMDocType'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@AbapCatalog.preserveKey:true
define view I_LglCntntMDocTypeTextAPI01 
as select from I_LglCntntMDocTypeText {
    
    //I_LglCntntMDocTypeText
    key LglCntntMDocType,
    
    @Semantics.language: true
    key Language,
    
    @Semantics.text: true
    LglCntntMDocTypeText
    
}
```
