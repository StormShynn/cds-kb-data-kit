---
name: I_LOSSALLOWANCELAYOUT
description: "Layout for credit loss allowance"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUT')/$value
semantic_en: "Layout for credit loss allowance"
semantic_vi: "Layout for credit loss allowance — CDS view giao diện dựa trên finsc_kfl."
keywords:
  - "layout"
  - "for"
  - "credit"
  - "loss"
  - "allowance"
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
# I_LOSSALLOWANCELAYOUT

**Layout for credit loss allowance**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LossAllowanceLayout` | ✓ | |  | `key_figure_layout` | `CHAR(30)` | Key Figure Layout |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LossAllowanceLayoutText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOSSALLOWANCELAYOUT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IKEYFIGGRPL'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                supportedCapabilities: #SQL_DATA_SOURCE }
@EndUserText.label: 'Layout for credit loss allowance'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_LossAllowanceLayout
  as select from finsc_kfl
  association [0..*] to I_LossAllowanceLayoutText as _Text on $projection.LossAllowanceLayout = _Text.LossAllowanceLayout
{
      @ObjectModel.text.association: '_Text'
  key key_figure_layout as LossAllowanceLayout,
      _Text
}
```
