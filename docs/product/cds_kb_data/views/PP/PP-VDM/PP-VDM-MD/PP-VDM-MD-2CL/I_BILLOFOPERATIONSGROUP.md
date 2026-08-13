---
name: I_BILLOFOPERATIONSGROUP
description: "Billofoperationsgroup"
semantic_vi: "View Billofoperationsgroup CDS hiển thị dữ liệu nhóm hoạt động sản xuất, được sử dụng để tổ chức và quản lý hoạt động sản xuất trong môi trường sản xuất."
keywords:
  - "manufacturing"
  - "operations group"
  - "billofoperationsgroup"
  - "pp-vdm"
  - "pp-vdm-md-2cl"
  - "sap"
  - "cds view"
  - "production operations"
  - "nhóm hoạt động sản xuất"
  - "dữ liệu sản xuất"
semantic_en: "The Billofoperationsgroup CDS view exposes manufacturing operations group data, which is used to organize and manage production operations in a manufacturing environment."
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BILLOFOPERATIONSGROUP

**Billofoperationsgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `BillOfOperationsType` | ✓ | |  | `cast(plnty as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsGroup` | ✓ | |  | `cast(plnnr as billofoperationsgroup preserving type)` |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOGROUP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.representativeKey: 'BillOfOperationsGroup'
@ObjectModel.semanticKey: ['BillOfOperationsType', 'BillOfOperationsGroup']
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Bill of Operations Group'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_BillOfOperationsGroup
  as select distinct from plko

  association [1..1] to I_BillOfOperationsType as _BillOfOperationsType on $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key cast(plnty as billofoperationstype preserving type)  as BillOfOperationsType,
  key cast(plnnr as billofoperationsgroup preserving type) as BillOfOperationsGroup,

      // Associations
      _BillOfOperationsType
};
```
