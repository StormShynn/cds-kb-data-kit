---
name: I_BOPFORM
description: "Bopform"
semantic_vi: "View Bopform hiển thị dữ liệu kinh doanh liên quan đến các biểu mẫu hóa đơn, được sử dụng trong các giao dịch tài chính. Nó có thể được sử dụng để lấy và thao tác dữ liệu biểu mẫu hóa đơn."
keywords:
  - "billing form"
  - "biểu mẫu hóa đơn"
  - "financial transactions"
  - "giao dịch tài chính"
  - "bopform"
  - "fi-loc-fi"
  - "fi"
  - "fi-loc"
  - "interface-view"
  - "component:fi-loc-fi"
  - "lob:finance"
semantic_en: "The Bopform view exposes business data related to billing forms, which are used in financial transactions. It can be used to retrieve and manipulate billing form data."
app_component: FI-LOC-FI
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
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI
  - lob:Finance
---
# I_BOPFORM

**Bopform**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
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
| `BOPRptgCntry` | ✓ | |  | `country` |  |  |
| `BOPForm` | ✓ | |  | `form` |  |  |
| `_BOPRptgCntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPRptgCntry` | `I_Country` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Balance of Payments Form' 
@AbapCatalog.sqlViewName: 'IBOPFORM' 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION 
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling: { type: #CLIENT_DEPENDENT, algorithm: #SESSION_VARIABLE }
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #B }
@ObjectModel.representativeKey: 'BOPForm'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPForm as

select from glo_t_bopform
 
association [0..1] to I_Country as _BOPRptgCntry on $projection.BOPRptgCntry = _BOPRptgCntry.Country  

{
 
  @ObjectModel.foreignKey.association: '_BOPRptgCntry'  
  key country as BOPRptgCntry,
  key form    as BOPForm,

  _BOPRptgCntry  

}
```
