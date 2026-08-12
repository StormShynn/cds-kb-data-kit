---
name: I_SUPASSGMTSUPAVAILYSTSTXT
description: "Supply Availability Status - Text"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPASSGMTSUPAVAILYSTSTXT')/$value
semantic_en: "Supply Availability Status - Text"
semantic_vi: "Supply Availability Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "supply"
  - "availability"
  - "status"
  - "text"
  - "assgmt"
  - "availy"
  - "language"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_SUPASSGMTSUPAVAILYSTSTXT

**Supply Availability Status - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPASSGMTSUPAVAILYSTSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupAssgmtSupAvailySts` | ✓ | |  | `cast( txt.domvalue_l as arun_supply_avail_status )` | `CHAR(2)` | Supply Availability Status for a Demand |
| `Language` |  | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SupAssgmtSupAvailyStsTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPASSGMTSUPAVAILYSTSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPASSGMTSUPAVAILYSTSTXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SupAssgmtSupAvailySts'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #X
@EndUserText.label: 'Supply Availability Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISUPASGMTAVLSTST'
@AbapCatalog.compiler.compareFilter: true
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
@AbapCatalog.preserveKey:true
define view I_SupAssgmtSupAvailyStsTxt
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @EndUserText.label: 'Supply Availability'
      @ObjectModel.text.element: ['SupAssgmtSupAvailyStsTxt']
  key cast( txt.domvalue_l as arun_supply_avail_status ) as SupAssgmtSupAvailySts,
      //      substring(txt.domvalue_l,1,2)                                     as SupAssgmtSupAvailySts,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      @EndUserText.label: 'Language'
      @Consumption.hidden: true
      txt.ddlanguage as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      txt.ddtext     as SupAssgmtSupAvailyStsTxt,
      _Language
}
where
      txt.domname    = 'ARUN_SUPPLY_AVAIL_STATUS'
  and txt.ddlanguage = $session.system_language
  and txt.as4local   = 'A';
```
