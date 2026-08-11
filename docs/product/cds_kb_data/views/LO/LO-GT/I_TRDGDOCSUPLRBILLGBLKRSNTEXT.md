---
name: I_TRDGDOCSUPLRBILLGBLKRSNTEXT
description: "Blk Rsn for Suplr Billg in Trdg Doc - Txt"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSNTEXT')/$value
semantic_en: "Blk Rsn for Suplr Billg in Trdg Doc - Txt"
semantic_vi: "Blk Rsn for Suplr Billg in Trdg Doc - Txt — CDS view cơ bản dựa trên R_TrdgDocSuplrBillgBlkRsnText."
keywords:
  - "blk"
  - "rsn"
  - "for"
  - "suplr"
  - "billg"
  - "trdg"
  - "doc"
  - "txt"
  - "language"
  - "name"
tags:
  - LO
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCSUPLRBILLGBLKRSNTEXT

**Blk Rsn for Suplr Billg in Trdg Doc - Txt**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `TrdgDocSuplrBillgBlkRsn` | ✓ | |  |  | `CHAR(2)` | Blocking Reason Document Header |
| `TrdgDocSuplrBillgBlkRsnName` |  | |  |  | `CHAR(40)` | Description of Blocking Reason |
| `_Language` | | ✓ | | | | |
| `_TrdgDocSuplrBillgBlkRsn` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSNTEXT')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey: 'TrdgDocSuplrBillgBlkRsn',
   dataCategory: #TEXT,
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@Analytics.technicalName: 'ISUPBILLGBLKRSNT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Blk Rsn for Suplr Billg in Trdg Doc - Txt'

define view entity I_TrdgDocSuplrBillgBlkRsnText
  as select from R_TrdgDocSuplrBillgBlkRsnText

  association to parent I_TrdgDocSuplrBillgBlkRsn as _TrdgDocSuplrBillgBlkRsn on $projection.TrdgDocSuplrBillgBlkRsn = _TrdgDocSuplrBillgBlkRsn.TrdgDocSuplrBillgBlkRsn
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_TrdgDocSuplrBillgBlkRsn'
      @ObjectModel.text.element: ['TrdgDocSuplrBillgBlkRsnName']
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: false
  key TrdgDocSuplrBillgBlkRsn,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      @UI.textArrangement: #TEXT_ONLY
      TrdgDocSuplrBillgBlkRsnName,
      /* Associations */
      _Language,
      _TrdgDocSuplrBillgBlkRsn
}
```
