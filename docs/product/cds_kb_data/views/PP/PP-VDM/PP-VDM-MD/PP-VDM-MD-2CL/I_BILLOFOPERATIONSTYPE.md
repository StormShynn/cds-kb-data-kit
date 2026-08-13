---
name: I_BILLOFOPERATIONSTYPE
description: "Billofoperationstype"
semantic_vi: "View Billofoperationstype cung cấp thông tin về các loại hoạt động của hóa đơn và ứng dụng của chúng trong quy trình sản xuất. Nó được sử dụng để truy cập và quản lý các loại hoạt động của hóa đơn cho kế hoạch và thực hiện sản xuất."
keywords:
  - "bill of operations"
  - "billofoperationstype"
  - "manufacturing"
  - "production planning"
  - "sản xuất"
  - "kế hoạch sản xuất"
  - "loại hoạt động của hóa đơn"
  - "ứng dụng của hóa đơn"
semantic_en: "The Billofoperationstype view provides information about bill of operations types and their applications in manufacturing processes. It is used to access and manage bill of operations types for production planning and execution."
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
# I_BILLOFOPERATIONSTYPE

**Billofoperationstype**

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
| `BillOfOperationsApplication` |  | |  | `cast(plnaw as billofoperationsapplication preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_BillOfOperationsApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillOfOperationsTypeText` | [0..*] |
| `_BillOfOperationsApplication` | `I_BOOApplication` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Type'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsType'
@Analytics.dataExtraction.enabled: true
//@ObjectModel.sapObjectType: 'BillOfOperationsType'
define view I_BillOfOperationsType
  as select from tca01

  association [0..*] to I_BillOfOperationsTypeText as _Text                        on $projection.BillOfOperationsType = _Text.BillOfOperationsType
  association [0..1] to I_BOOApplication           as _BillOfOperationsApplication on $projection.BillOfOperationsApplication = _BillOfOperationsApplication.BillOfOperationsApplication

{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(plnty as billofoperationstype preserving type)        as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsApplication'
      cast(plnaw as billofoperationsapplication preserving type) as BillOfOperationsApplication,

      // Associations
      _Text,
      _BillOfOperationsApplication
};
```
