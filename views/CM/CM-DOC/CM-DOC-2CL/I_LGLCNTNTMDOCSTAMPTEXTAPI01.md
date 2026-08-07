---
name: I_LGLCNTNTMDOCSTAMPTEXTAPI01
description: "Lglcntntmdocstamptextapi 01"
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
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
# I_LGLCNTNTMDOCSTAMPTEXTAPI01

**Lglcntntmdocstamptextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentStamp` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMDocumentStampName` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMDOCSTAMPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel:{
   representativeKey: 'LglCntntMDocumentStamp',
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

@EndUserText.label: 'Document Stamp Name - Text'
define view I_LglCntntMDocStampTextAPI01
  as select from I_LglCntntMDocStampText
{
  key LglCntntMDocumentStamp,
  
      @Semantics.language: true
  key Language,
  
      @Semantics.text: true
      LglCntntMDocumentStampName

}
```
