---
name: I_BUSVOLFLDCOMBNALLWDSIGN
description: "This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGN')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field."
semantic_vi: "Bus Vol Field Combn Allowed Sign — CDS view cơ bản dựa trên dd07l."
keywords:
  - "bus"
  - "vol"
  - "field"
  - "combn"
  - "allowed"
  - "sign"
  - "allwd"
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
# I_BUSVOLFLDCOMBNALLWDSIGN

**This CDS view exposes fixed values of the Business Volume Field Combination Allowed Sign field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFldCombnAllwdSign` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_incl_excl_allowed )` | `CHAR(1)` | Including / Excluding Control for BV Selection Criteria |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNALLWDSIGN')/$value)*

```abap
@EndUserText.label: 'Bus Vol Field Combn Allowed Sign'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'BusVolumeFieldCombnAllowedSign',
  dataCategory: #VALUE_HELP,
  representativeKey: 'BusVolFldCombnAllwdSign',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SEARCHABLE_ENTITY, 
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWCBBVFLDCALDS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_BusVolFldCombnAllwdSign
  as select from dd07l

  composition [0..*] of I_BusVolFldCombnAllwdSignTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_incl_excl_allowed )                                  as BusVolFldCombnAllwdSign,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                  as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_INCL_EXCL_ALLOWED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
