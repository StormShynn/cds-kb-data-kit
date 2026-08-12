---
name: I_SUPDMNDALLDOCSUPSOURCE
description: "Description for Supply Source for All Documents"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPSOURCE')/$value
semantic_en: "Description for Supply Source for All Documents"
semantic_vi: "Description for Supply Source for All Documents — CDS view cơ bản dựa trên dd07v."
keywords:
  - "description"
  - "for"
  - "supply"
  - "source"
  - "all"
  - "documents"
  - "assgmt"
  - "name"
tags:
  - LO
  - bo:project
  - component:LO-RFM-ARN
  - document
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_SUPDMNDALLDOCSUPSOURCE

**Description for Supply Source for All Documents**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupAssgmtSource` | ✓ | |  | `cast( dd07v.domvalue_l as arun_sdo_alldoc_stock_source )` | `CHAR(1)` | Stock Source for All Documents of Supply Demand Overview |
| `SupAssgmtSourceName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupDmndAllDocSupSourceT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPSOURCE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'ISUPDMNDADSUPSC',
  compiler.compareFilter: true,
  preserveKey: true
 }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@ObjectModel: {
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   representativeKey: 'SupAssgmtSource',
   supportedCapabilities: [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Description for Supply Source for All Documents'
define view I_SupDmndAllDocSupSource
  as select from dd07v
  association [0..*] to I_SupDmndAllDocSupSourceT as _Text on $projection.SupAssgmtSource = _Text.SupAssgmtSource

{
      @ObjectModel.text.element: ['SupAssgmtSourceName']
  key cast( dd07v.domvalue_l as arun_sdo_alldoc_stock_source ) as SupAssgmtSource,
      ddtext           as SupAssgmtSourceName //,
      //      _Text
}

where
      domname    = 'ARUN_SDO_ALLDOC_STOCK_SOURCE'
  and ddlanguage = $session.system_language
```
