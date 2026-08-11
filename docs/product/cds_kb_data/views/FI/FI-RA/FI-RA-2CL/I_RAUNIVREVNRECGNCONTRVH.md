---
name: I_RAUNIVREVNRECGNCONTRVH
description: "Revenue Accounting URR Contract"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRVH')/$value
semantic_en: "Revenue Accounting URR Contract"
semantic_vi: "Revenue Accounting URR Contract — CDS view giao diện dựa trên dd07l."
keywords:
  - "revenue"
  - "accounting"
  - "urr"
  - "contract"
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
# I_RAUNIVREVNRECGNCONTRVH

**Revenue Accounting URR Contract**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndicatorValue` | ✓ | |  | `cast(dd07l.domvalue_l as xfeld)` | `CHAR(1)` | Checkbox |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_RAUnivContrText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNCONTRVH')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Revenue Accounting URR Contract'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'IndicatorValue'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_RAUnivRevnRecgnContrVH
  as select from dd07l

  composition [0..*] of I_RAUnivRevnRecgnContrText as _RAUnivContrText

{
      @ObjectModel.text.association: '_RAUnivContrText'
  key cast(dd07l.domvalue_l as xfeld) as IndicatorValue,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                as DomainValue,

      _RAUnivContrText

}
where dd07l.domname  = 'XFELD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
