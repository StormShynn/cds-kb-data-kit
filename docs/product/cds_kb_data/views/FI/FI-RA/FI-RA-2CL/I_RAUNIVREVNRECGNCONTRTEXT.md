---
name: I_RAUNIVREVNRECGNCONTRTEXT
description: "Revenue Accounting URR Contract - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRTEXT')/$value
semantic_en: "Revenue Accounting URR Contract - Text"
semantic_vi: "Revenue Accounting URR Contract - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "revenue"
  - "accounting"
  - "urr"
  - "contract"
  - "text"
  - "language"
  - "indicator"
  - "value"
  - "domain"
tags:
  - FI
  - account
  - component:FI-RA-2CL
  - contract
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RAUNIVREVNRECGNCONTRTEXT

**Revenue Accounting URR Contract - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `IndicatorValue` | ✓ | |  | `cast(dd07t.domvalue_l as xfeld)` | `CHAR(1)` | Checkbox |
| `IndicatorText` |  | |  | `cast(dd07t.ddtext as vdm_indicatortext preserving type)` | `CHAR(60)` | Indicator Text |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_RAUnivContrText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Revenue Accounting URR Contract - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
// @ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT - would not be compatible with #VALUE_HELP_PROVIDER of released API
@ObjectModel.representativeKey: 'IndicatorValue'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      // #LANGUAGE_DEPENDENT_TEXT - would not be compatible with #VALUE_HELP_PROVIDER of released API
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAUnivRevnRecgnContrText
  as select from dd07t

  association to parent I_RAUnivRevnRecgnContrVH as _RAUnivContrText
    on $projection.IndicatorValue = _RAUnivContrText.IndicatorValue

  association [0..1] to I_Language as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)         as Language,

      @ObjectModel.foreignKey.association: '_RAUnivContrText'
      @ObjectModel.text.element: [ 'IndicatorText' ]
  key cast(dd07t.domvalue_l as xfeld)                         as IndicatorValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      cast(dd07t.ddtext as vdm_indicatortext preserving type) as IndicatorText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                        as DomainValue,

      _RAUnivContrText,
      _Language

}
where dd07t.domname  = 'XFELD'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
