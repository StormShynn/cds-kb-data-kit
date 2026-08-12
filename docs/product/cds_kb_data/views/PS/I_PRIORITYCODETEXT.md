---
name: I_PRIORITYCODETEXT
description: "Priority Code - Text"
app_component: PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORITYCODETEXT')/$value
semantic_en: "Priority Code - Text"
semantic_vi: "Priority Code - Text — CDS view giao diện dựa trên tcn7t."
keywords:
  - "priority"
  - "code"
  - "text"
  - "language"
  - "name"
tags:
  - PS
  - component:PS
  - interface-view
---
# I_PRIORITYCODETEXT

**Priority Code - Text**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORITYCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `PriorityCode` | ✓ | |  | `nprio` | `CHAR(1)` | Priority |
| `PriorityCodeName` |  | |  | `ktext` | `CHAR(40)` | Priority description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORITYCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORITYCODETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRIORITYCODETXT'
@VDM.viewType: #BASIC
//@Analytics: { dataExtraction.enabled: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'PriorityCode'
@EndUserText.label: 'Priority Code - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API

define view I_Prioritycodetext
  as select from tcn7t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language : true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,

  key nprio as PriorityCode,
      @Semantics.text : true
      ktext as PriorityCodeName,
      _Language

};
```
