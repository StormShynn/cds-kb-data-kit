---
name: I_LGLCNTNTMINTCNTCTTYPETEXT
description: "Lglcntntmintcntcttypetext"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - text-view
  - text
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLCNTNTMINTCNTCTTYPETEXT

**Lglcntntmintcntcttypetext**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMIntCntctType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMIntCntctTypeName` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMINTCONTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel:{
   representativeKey: 'LglCntntMIntCntctType',
   usageType.dataClass: #CUSTOMIZING,
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #S,
   dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Internal Contact Type - Text'

define view I_LglCntntMIntCntctTypeText
  as select from I_LCMIntContactTypeText
{
  key LglCntntMIntCntctType,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      LglCntntMIntCntctTypeName
}
```
