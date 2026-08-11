---
name: I_SITEGOODSRECEIVINGHOURSCODET
description: "Site Goods Receiving Hours Code - Text"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEGOODSRECEIVINGHOURSCODET')/$value
semantic_en: "Site Goods Receiving Hours Code - Text"
semantic_vi: "Site Goods Receiving Hours Code description — CDS view giao diện dựa trên tvwat."
keywords:
  - "site"
  - "goods"
  - "receiving"
  - "hours"
  - "code"
  - "description"
  - "language"
  - "text"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITEGOODSRECEIVINGHOURSCODET

**Site Goods Receiving Hours Code - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEGOODSRECEIVINGHOURSCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteGoodsReceivingHoursCode` | ✓ | |  | `wanid` | `CHAR(3)` | Goods receiving hours ID (default value) |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SiteGoodsReceivingHoursText` |  | |  | `vtext` | `CHAR(30)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEGOODSRECEIVINGHOURSCODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEGOODSRECEIVINGHOURSCODET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISGRHCT'
@EndUserText.label: 'Site Goods Receiving Hours Code description'

@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SiteGoodsReceivingHoursCode',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #LANGUAGE_DEPENDENT_TEXT,
                             #EXTRACTION_DATA_SOURCE ],
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   }
}
define view I_SiteGoodsReceivingHoursCodeT
  as select from tvwat
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key tvwat.wanid as SiteGoodsReceivingHoursCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key tvwat.spras as Language,
      @Semantics.text: true
      tvwat.vtext as SiteGoodsReceivingHoursText,
      _Language
}
```
