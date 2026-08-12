---
name: I_LOSSALLOWANCEKEYFIGURE
description: "Key figures for credit loss allowance"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURE')/$value
semantic_en: "Key figures for credit loss allowance"
semantic_vi: "Key figures for credit loss allowance — CDS view giao diện dựa trên finsc_kf."
keywords:
  - "key"
  - "figures"
  - "for"
  - "credit"
  - "loss"
  - "allowance"
  - "figure"
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
# I_LOSSALLOWANCEKEYFIGURE

**Key figures for credit loss allowance**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LossAllowanceKeyFigure` | ✓ | |  | `key_figure` | `CHAR(30)` | Key Figure |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LossAllowanceKeyFigureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCEKEYFIGURE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IKEYFIGURES'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'LossAllowanceKeyFigure'
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE , #SQL_DATA_SOURCE ] }
@Metadata.ignorePropagatedAnnotations: true 
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true }
@EndUserText.label: 'Key figures for credit loss allowance'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'LossAllowanceKeyFigure'
define view I_LossAllowanceKeyFigure
  as select from finsc_kf as KeyFigure
  association [0..*] to I_LossAllowanceKeyFigureText as _Text on $projection.LossAllowanceKeyFigure = _Text.LossAllowanceKeyFigure
{
      @ObjectModel.text.association: '_Text'
  key key_figure as LossAllowanceKeyFigure,
      _Text
}
```
