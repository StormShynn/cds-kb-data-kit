---
name: I_BR_NFEMODTEXT
description: "BR Nfemodtext"
semantic_vi: "View I_BR_NFEMODTEXT cung cấp truy cập vào dữ liệu văn bản NFe Brazil, bao gồm các mô tả sắp xếp và số văn bản NFe, có thể được sử dụng để truy xuất và hiển thị thông tin văn bản NFe."
keywords:
  - "brasil"
  - "nfe"
  - "text"
  - "sort"
  - "description"
  - "number"
  - "fi-loc-lo-br"
  - "finance"
  - "sap"
  - "cds"
  - "view"
  - "brazilian"
semantic_en: "The I_BR_NFEMODTEXT view provides access to Brazilian NFe text data, including sort descriptions and text numbers, which can be used to retrieve and display NFe text information."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEMODTEXT

**BR Nfemodtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BR_NFeTextNumber` | ✓ | |  | `textnum` |  |  |
| `BR_NFeSortDescription` |  | |  | `text` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEMODTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Brazil Nota Fiscal Modelo 1 and 2 - Text'

define view I_BR_NFeModText   
    as select from j_1bmodtext
{
  key spras   as Language,
  key textnum as BR_NFeTextNumber,
      text    as BR_NFeSortDescription
}
```
