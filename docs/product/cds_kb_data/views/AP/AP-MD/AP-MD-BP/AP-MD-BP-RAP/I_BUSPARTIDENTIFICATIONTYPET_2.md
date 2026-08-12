---
name: I_BUSPARTIDENTIFICATIONTYPET_2
description: "Business Partner Identification Type Text"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTIDENTIFICATIONTYPET_2')/$value
semantic_en: "Business Partner Identification Type Text"
semantic_vi: "Business Partner Identification Type Text — CDS view giao diện dựa trên tb039b."
keywords:
  - "business"
  - "partner"
  - "identification"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - bo:companycode
  - component:AP-MD-BP-RAP
  - interface-view
---
# I_BUSPARTIDENTIFICATIONTYPET_2

**Business Partner Identification Type Text**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTIDENTIFICATIONTYPET_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BPIdentificationType` | ✓ | |  | `type` | `CHAR(6)` | Identification Type |
| `BPIdentificationTypeName` |  | |  | `text` | `CHAR(40)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTIDENTIFICATIONTYPET_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTIDENTIFICATIONTYPET_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPIDTYPETXT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BPIdentificationType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm : #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Business Partner Identification Type Text'
define view I_BusPartIdentificationTypeT_2
  as select from tb039b
  association [0..1] to I_Language                  as _Language              on $projection.Language = _Language.Language
//  association [0..1] to I_BusPartIdentificationType     as _BusPartIdentification on $projection.BPIdentificationType = _BusPartIdentification.BPIdentificationType

{
@Semantics.language: true
  key spras as Language,
  key type as BPIdentificationType ,
      @EndUserText.label: 'ID Type Description'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text as BPIdentificationTypeName,
      _Language
//      _BusPartIdentification

}
```
