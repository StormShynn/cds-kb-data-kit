---
name: I_FISCALDATEFUNCTION
description: "Fiscaldatefunction"
app_component: CA-GTF-GL-CAL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALDATEFUNCTION

**Fiscaldatefunction**

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
| `DateFunctionType` |  | |  |  |  |  |
| `DateFunctionGranularity` |  | |  |  |  |  |
| `DateFunctionStartPoint` |  | |  |  |  |  |
| `DateFunctionStartOffsetValue` |  | |  |  |  |  |
| `DateFuncStartRelativeOffset` |  | |  |  |  |  |
| `DateFunctionStartOffsetUnit` |  | |  |  |  |  |
| `DateFunctionStartRelOffsetUnit` |  | |  |  |  |  |
| `DateFunctionStartYearOffset` |  | |  |  |  |  |
| `DateFunctionStartFixedDate` |  | |  |  |  |  |
| `DateFunctionEndPoint` |  | |  |  |  |  |
| `DateFunctionEndOffsetValue` |  | |  |  |  |  |
| `DateFunctionEndRelativeOffset` |  | |  |  |  |  |
| `DateFunctionEndOffsetUnit` |  | |  |  |  |  |
| `DateFunctionEndRelOffsetUnit` |  | |  |  |  |  |
| `DateFunctionEndYearOffset` |  | |  |  |  |  |
| `DateFunctionEndFixedDate` |  | |  |  |  |  |
| `_DateFunctionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DateFunctionText` | `I_FiscalDateFunctionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIDATEFNC'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Date Function'
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@VDM.viewType: #BASIC 
define view I_FiscalDateFunction as select from I_Datefunction 

  association [0..*] to I_FiscalDateFunctionText as _DateFunctionText on $projection.DateFunction = _DateFunctionText.DateFunction

{
  @ObjectModel.text.association:'_DateFunctionText'
  key DateFunction,
//  ABAPLanguageVersion, 
  DateFunctionType, 
  DateFunctionGranularity,
//  DateFunctionCalendarType,
  DateFunctionStartPoint, 
  DateFunctionStartOffsetValue, 
  DateFuncStartRelativeOffset, 
  DateFunctionStartOffsetUnit, 
  DateFunctionStartRelOffsetUnit,
  DateFunctionStartYearOffset, 
  DateFunctionStartFixedDate, 
  DateFunctionEndPoint, 
  DateFunctionEndOffsetValue, 
  DateFunctionEndRelativeOffset, 
  DateFunctionEndOffsetUnit, 
  DateFunctionEndRelOffsetUnit,
  DateFunctionEndYearOffset, 
  DateFunctionEndFixedDate,
  
  _DateFunctionText
} where DateFunctionCalendarType = '02';
```
