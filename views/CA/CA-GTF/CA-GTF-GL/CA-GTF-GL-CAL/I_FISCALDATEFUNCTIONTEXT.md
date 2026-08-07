---
name: I_FISCALDATEFUNCTIONTEXT
description: Fiscaldatefunctiontext
app_component: CA-GTF-GL-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - text-view
  - text
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALDATEFUNCTIONTEXT

**Fiscaldatefunctiontext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `DateFunctionName` |  | |  |  |  |  |
| `DateFunctionDescription` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIDTFUNCT'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Fiscal Date Function Text'

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S

@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {dataExtraction.enabled: true}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@VDM.viewType: #BASIC
@Search.searchable: true
define view I_FiscalDateFunctionText as select from I_Datefunctiontext 
  inner join I_Datefunction on I_Datefunction.DateFunction = I_Datefunctiontext.DateFunction

    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key I_Datefunctiontext.DateFunction, 
  
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key Language, 
  
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH     
  DateFunctionName, 
  
  @Semantics.text: true
  @Search.ranking: #LOW   
  DateFunctionDescription,
  _Language
} where I_Datefunction.DateFunctionCalendarType = '02';
```
