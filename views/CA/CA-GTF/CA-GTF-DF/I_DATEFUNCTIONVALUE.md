---
name: I_DATEFUNCTIONVALUE
description: Datefunctionvalue
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_DATEFUNCTIONVALUE

**Datefunctionvalue**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  | `datefunction` |  |  |
| `DateFunctionValidityDate` | ✓ | |  | `valid_for_date` |  |  |
| `DateFunctionStartDate` |  | |  | `datefunctionstartdate` |  |  |
| `DateFunctionEndDate` |  | |  | `datefunctionenddate` |  |  |
| `_Datefunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Datefunction` | `I_Datefunction` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDATEFUNCTIONVAL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Date Function values'
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
define view I_DateFunctionValue
  as select from datefunction_val

  association [1..1] to I_Datefunction as _Datefunction on _Datefunction.DateFunction = datefunction_val.datefunction

{

  key datefunction          as DateFunction,
  key valid_for_date        as DateFunctionValidityDate,
      datefunctionstartdate as DateFunctionStartDate,
      datefunctionenddate   as DateFunctionEndDate,
      _Datefunction
}
```
