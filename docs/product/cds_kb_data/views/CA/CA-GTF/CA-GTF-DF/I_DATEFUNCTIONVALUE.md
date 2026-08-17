---
name: I_DATEFUNCTIONVALUE
description: "Datefunctionvalue"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  | `datefunction` | `CHAR(32)` | Relative Date Function ID |
| `DateFunctionValidityDate` | ✓ | |  | `valid_for_date` | `DATS(8)` | Validity date for date function |
| `DateFunctionStartDate` |  | |  | `datefunctionstartdate` | `DATS(8)` | Date Function Start Date |
| `DateFunctionEndDate` |  | |  | `datefunctionenddate` | `DATS(8)` | Date Function End Date |
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
