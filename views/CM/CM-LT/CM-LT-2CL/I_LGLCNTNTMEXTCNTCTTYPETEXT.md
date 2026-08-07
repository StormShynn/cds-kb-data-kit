---
name: I_LGLCNTNTMEXTCNTCTTYPETEXT
description: Lglcntntmextcntcttypetext
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
# I_LGLCNTNTMEXTCNTCTTYPETEXT

**Lglcntntmextcntcttypetext**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMExtCntctType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LglCntntMExtCntctTypeName` |  | |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMEXTCONTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel:{
   representativeKey: 'LglCntntMExtCntctType',
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

@EndUserText.label: 'External Contact Type - Text'

define view I_LglCntntMExtCntctTypeText
  as select from I_LCMExtContactTypeText
{
  key LglCntntMExtCntctType,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      LglCntntMExtCntctTypeName
}
```
