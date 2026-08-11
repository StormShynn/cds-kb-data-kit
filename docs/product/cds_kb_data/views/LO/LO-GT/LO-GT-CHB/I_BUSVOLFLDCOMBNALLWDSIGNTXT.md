---
name: I_BUSVOLFLDCOMBNALLWDSIGNTXT
description: "This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGNTXT')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field."
semantic_vi: "Business Vol Fld Combn Allwd Sign - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "business"
  - "vol"
  - "fld"
  - "combn"
  - "allwd"
  - "sign"
  - "text"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLFLDCOMBNALLWDSIGNTXT

**This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGNTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFldCombnAllwdSign` | ✓ | |  | `cast(dd07t.domvalue_l as wb2_incl_excl_allowed )` | `CHAR(1)` | Including / Excluding Control for BV Selection Criteria |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusVolFldCombnAllwdSignName` |  | |  | `cast( dd07t.ddtext as wb2_incl_excl_allowed_txt preserving type )` | `CHAR(60)` | Desc. of Include/Exclude Control for Business Vol. Selection |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_BusVolFldCombnAllwdSign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGNTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGNTXT')/$value)*

```abap
@EndUserText.label: 'Business Vol Fld Combn Allwd Sign - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'BusVolFldCombnAllwdSign',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBBVFLDCALDST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusVolFldCombnAllwdSignTxt
  as select from dd07t

  association        to parent I_BusVolFldCombnAllwdSign as _BusVolFldCombnAllwdSign on $projection.BusVolFldCombnAllwdSign = _BusVolFldCombnAllwdSign.BusVolFldCombnAllwdSign
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_BusVolFldCombnAllwdSign'
      @ObjectModel.text.element: ['BusVolFldCombnAllwdSignName']
  key cast(dd07t.domvalue_l as wb2_incl_excl_allowed )                                  as BusVolFldCombnAllwdSign,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_incl_excl_allowed_txt preserving type )                 as BusVolFldCombnAllwdSignName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                  as DomainValue,

      /* Associations */
      _BusVolFldCombnAllwdSign,
      _Language
}

where
      dd07t.domname  = 'WB2_INCL_EXCL_ALLOWED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
