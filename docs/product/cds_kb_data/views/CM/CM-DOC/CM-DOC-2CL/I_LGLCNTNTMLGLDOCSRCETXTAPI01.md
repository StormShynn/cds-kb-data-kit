---
name: I_LGLCNTNTMLGLDOCSRCETXTAPI01
description: "Lglcntntmlgldocsrcetxtapi 01"
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMLGLDOCSRCETXTAPI01

**Lglcntntmlgldocsrcetxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalDocumentSource` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LglCntntMDocumentSourceText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILGLDOCSRCTAPI01'
@EndUserText.label: 'Legal Document Source - Text'
@ObjectModel.semanticKey: 'LegalDocumentSource'
@ObjectModel.representativeKey: 'LegalDocumentSource'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_LglCntntMLglDocSrceTxtAPI01
  as select from I_LglCntntMLglDocSrceTxt
{
      //I_LglCntntMLglDocSrceTxt
  key LegalDocumentSource,

      @Semantics.language: true
  key Language,
  
      @Semantics.text: true
      LglCntntMDocumentSourceText
}
```
