---
name: I_ARUNSUPDLYHRZNTEXT
description: "Supply Delay Horizon - Text"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNSUPDLYHRZNTEXT')/$value
semantic_en: "Supply Delay Horizon - Text"
semantic_vi: "Supply Delay Horizon - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "supply"
  - "delay"
  - "horizon"
  - "text"
  - "hrzn"
  - "weeks"
  - "language"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNSUPDLYHRZNTEXT

**Supply Delay Horizon - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNSUPDLYHRZNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ARunSupDlyHrznInWeeks` | ✓ | |  | `cast( txt.domvalue_l as arun_supply_delay_horizon )` | `CHAR(2)` | Delay of Supply in Time Horizon |
| `Language` |  | |  | `cast(txt.ddlanguage as spras)` | `LANG(1)` | Language Key |
| `ARunSupDlyHrznInWeeksTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNSUPDLYHRZNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNSUPDLYHRZNTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IARUNSUPDLYHZTXT'
//@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ARunSupDlyHrznInWeeks'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #X
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@ObjectModel: {
   supportedCapabilities: [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE, 
                           #SQL_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Supply Delay Horizon - Text'
@AbapCatalog.compiler.compareFilter: true
define view I_ARunSupDlyHrznText
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
     @ObjectModel.text.element: ['ARunSupDlyHrznInWeeksTxt']
  key cast( txt.domvalue_l as arun_supply_delay_horizon ) as ARunSupDlyHrznInWeeks,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      cast(txt.ddlanguage as spras) as Language,
      @Semantics.text: true
      txt.ddtext                    as ARunSupDlyHrznInWeeksTxt,
      _Language
}
where
      txt.domname  = 'ARUN_SUPPLY_DELAY_HORIZON'
  and txt.as4local = 'A'
  and txt.ddlanguage = $session.system_language;
```
