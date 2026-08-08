---
name: I_TEXTOBJECTCATEGORYTEXT
description: "Textobjectcategorytext"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - text-view
  - text
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_TEXTOBJECTCATEGORYTEXT

**Textobjectcategorytext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TextObjectCategory` | ✓ | |  | `tdobject` |  |  |
| `Language` | ✓ | |  | `tdspras` |  |  |
| `TextObjectCategoryText` |  | |  | `tdtext` |  |  |
| `_TextObjectCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TextObjectCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M 
@AbapCatalog.sqlViewName: 'ITXTOBJCATTXT'
@EndUserText.label: 'Text Object Category - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck : #NOT_REQUIRED
@AbapCatalog.preserveKey:true 
 @AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]

define view I_TextObjectCategoryText as select from ttxot

association [0..1] to I_TextObjectCategory as _TextObjectCategory on 
    $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
    
association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language  

{ 
@ObjectModel.foreignKey.association: '_TextObjectCategory' //Inserted by VDM CDS Suite Plugin
  key ttxot.tdobject as TextObjectCategory,
  
  @Semantics.language: true
@ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key ttxot.tdspras as Language, 
   
  @Semantics.text: true
  ttxot.tdtext as TextObjectCategoryText,
  
  _TextObjectCategory,
  _Language   
  
}
```
