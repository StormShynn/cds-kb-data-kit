---
name: I_LOSSALLOWANCEKEYFIGURETEXT
description: "Key Figure for Loss Allowance - Text"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURETEXT')/$value
semantic_en: "Key Figure for Loss Allowance - Text"
semantic_vi: "Key Figure for Loss Allowance - Text — CDS view giao diện dựa trên finsc_kf_t."
keywords:
  - "key"
  - "figure"
  - "for"
  - "loss"
  - "allowance"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-G-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - interface-view
  - lob:finance
---
# I_LOSSALLOWANCEKEYFIGURETEXT

**Key Figure for Loss Allowance - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `LossAllowanceKeyFigure` | ✓ | |  | `key_figure` | `CHAR(30)` | Key Figure |
| `LossAllowanceKeyFigureName` |  | |  | `key_figure_name` | `CHAR(70)` | Name of Key Figure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IKEYFIGTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LossAllowanceKeyFigure'
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                supportedCapabilities: #LANGUAGE_DEPENDENT_TEXT }
@Metadata.ignorePropagatedAnnotations: true 
@EndUserText.label: 'Key Figure for Loss Allowance - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_LossAllowanceKeyFigureText
  as select from finsc_kf_t as TextProvider
{
      @Semantics.language: true
  key TextProvider.langu           as Language,
  key TextProvider.key_figure      as LossAllowanceKeyFigure,
      @Semantics.text: true
      TextProvider.key_figure_name as LossAllowanceKeyFigureName
}
```
