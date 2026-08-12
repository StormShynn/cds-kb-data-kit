---
name: I_MARGANLYSPRODANDSRVCOBJTYPET
description: "Product and Service Object Type - Text"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value
semantic_en: "Product and Service Object Type - Text"
semantic_vi: "Product And Service Object Type - Text — CDS view giao diện dựa trên tbo01."
keywords:
  - "product"
  - "and"
  - "service"
  - "object"
  - "type"
  - "text"
  - "language"
  - "margin"
  - "analysis"
  - "desc"
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
---
# I_MARGANLYSPRODANDSRVCOBJTYPET

**Product and Service Object Type - Text**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MarginAnalysisObjectType` | ✓ | |  | `cast(obart as j_obart preserving type )` | `CHAR(2)` | Object Type |
| `MarginAnalysisObjectTypeDesc` |  | |  | `cast(txt60 as j_text60 preserving type )` | `CHAR(60)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROSRVOBJTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product And Service Object Type - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MarginAnalysisObjectType'
@VDM.viewType: #BASIC
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Search.searchable: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #META
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
define view I_MargAnlysProdAndSrvcObjTypeT as select from tbo01
{
  @Semantics.language: true
  key spras       as Language,
  key cast(obart as j_obart preserving type )  as MarginAnalysisObjectType,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  cast(txt60 as j_text60 preserving type )  as MarginAnalysisObjectTypeDesc
}
  where spras = $session.system_language
```
