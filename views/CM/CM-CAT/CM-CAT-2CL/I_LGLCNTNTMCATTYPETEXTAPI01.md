---
name: I_LGLCNTNTMCATTYPETEXTAPI01
description: Lglcntntmcattypetextapi 01
app_component: CM-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CAT
  - interface-view
  - text
  - component:CM-CAT-2CL
  - lob:Other
---
# I_LGLCNTNTMCATTYPETEXTAPI01

**Lglcntntmcattypetextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMCatType` | ✓ | |  |  |  |  |
| `LglCntntMCatTypeName` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMCATTYPTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LglCntntMCatType'

@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@EndUserText.label: 'Category Type - Text'
define view I_LglCntntMCatTypeTextAPI01
  as select from I_LglCntntMCategoryTypeText
{

  key LglCntntMCatType,

      @Semantics.text: true
      LglCntntMCatTypeName

}
```
