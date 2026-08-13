---
name: I_BILLABLECONTROL
description: "Billablecontrol"
semantic_vi: "View Billable Control cung cấp thông tin về các điều khiển có thể tính phí, được sử dụng để quản lý và theo dõi các mặt hàng có thể tính phí trong các giao dịch tài chính. Nó được sử dụng để lấy dữ liệu về các điều khiển có thể tính phí cho mục đích phân tích và báo cáo."
keywords:
  - "billable control"
  - "điều khiển có thể tính phí"
  - "financial transactions"
  - "giao dịch tài chính"
  - "fi-gl"
  - "fi-gl-is"
  - "interface view"
  - "component fi-gl-is-2cl"
semantic_en: "The Billable Control view provides information about billable controls, which are used to manage and track billable items in financial transactions. It is used to retrieve data on billable controls for analysis and reporting purposes."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLABLECONTROL

**Billablecontrol**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `BillableControl` | ✓ | |  | `cast( bemot as fis_bemot preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillableControlText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIBILLABCTRL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Billable Control'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'BillableControl',
                sapObjectNodeType.name: 'BillableControl', 
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }                                

define view I_BillableControl
  as select from tbmot
  association [0..*] to I_BillableControlText as _Text on $projection.BillableControl = _Text.BillableControl
{
      @ObjectModel.text.association: '_Text'
  key cast( bemot as fis_bemot preserving type ) as BillableControl,
      _Text
}
```
