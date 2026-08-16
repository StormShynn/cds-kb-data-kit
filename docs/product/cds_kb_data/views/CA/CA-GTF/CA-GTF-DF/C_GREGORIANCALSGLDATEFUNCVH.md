---
name: C_GREGORIANCALSGLDATEFUNCVH
description: "Gregoriancalsgldatefuncvh"
semantic_vi: "View Gregoriancalsgldatefuncvh cung cấp danh sách các hàm ngày theo lịch Gregory với ngày bắt đầu và ngày kết thúc, có thể được sử dụng để lọc hoặc xác minh ngày trong các ứng dụng kinh doanh."
keywords:
  - "date function"
  - "hàm ngày"
  - "gregorian calendar"
  - "lịch gregory"
  - "date validation"
  - "xác minh ngày"
  - "sap cds view"
  - "view cds sap"
  - "ca-gtf-df"
  - "cross-application components"
semantic_en: "The Gregoriancalsgldatefuncvh view provides a list of date functions with their start and end dates, which can be used to filter or validate dates in business applications."
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
  - consumption-view
  - value-help
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# C_GREGORIANCALSGLDATEFUNCVH

**Gregoriancalsgldatefuncvh**

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
| `DateFunction` | ✓ | |  |  | `CHAR(32)` | Relative Date Function ID |
| `DateFunctionStartDate` |  | |  |  | `DATS(8)` | Date Function Start Date |
| `DateFunctionEndDate` |  | |  |  | `DATS(8)` | Date Function End Date |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CGCALSGLDFVH'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Value Help for Single Gregorian Calendar Date Functions'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality:  #C
@ObjectModel.usageType.sizeCategory:  #S
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION 
@Search.searchable: true

define view C_GregorianCalSglDateFuncVH as select from I_DateFunctionValue {
    @Search.defaultSearchElement : true
    @ObjectModel.text.element: ['DateFunctionName']
    key DateFunction, 
    @Search.defaultSearchElement : true
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionName,
    @Search.defaultSearchElement : true
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionDescription,
    DateFunctionStartDate, 
    DateFunctionEndDate
}
where
      DateFunctionValidityDate = $session.system_date and
      _Datefunction.DateFunctionType = '01'
```
