---
name: I_LOSSALLOWANCELAYOUTTEXT
description: "Layout of Loss Allowance - Text"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUTTEXT')/$value
semantic_en: "Layout of Loss Allowance - Text"
semantic_vi: "Layout of Loss Allowance - Text — CDS view giao diện dựa trên finsc_kfl_t."
keywords:
  - "layout"
  - "loss"
  - "allowance"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - component:FI-GL-GL-G-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - interface-view
  - lob:finance
  - bo:companycode
---
# I_LOSSALLOWANCELAYOUTTEXT

**Layout of Loss Allowance - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `LossAllowanceLayout` | ✓ | |  | `key_figure_layout` | `CHAR(30)` | Key Figure Layout |
| `LossAllowanceLayoutName` |  | |  | `key_figure_layout_name` | `CHAR(70)` | Name of Key Figure Layout |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUTTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IKEYFIGLAYOUTS'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LossAllowanceLayout'
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                supportedCapabilities: #LANGUAGE_DEPENDENT_TEXT }
@Metadata.ignorePropagatedAnnotations: true 
@EndUserText.label: 'Layout of Loss Allowance - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_LossAllowanceLayoutText
  as select from finsc_kfl_t as TextProvider
{
      @Semantics.language: true
  key TextProvider.langu                               as Language,

  key TextProvider.key_figure_layout                   as LossAllowanceLayout,
      @Semantics.text: true
      TextProvider.key_figure_layout_name              as LossAllowanceLayoutName
}
```
