---
name: I_PUBLICHOLIDAYCODETEXT
description: "Public Holiday Code - Text"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value
semantic_en: "Public Holiday Code - Text"
semantic_vi: "Public Holiday Code - Text — CDS view giao diện dựa trên tholt."
keywords:
  - "public"
  - "holiday"
  - "code"
  - "text"
  - "language"
  - "name"
  - "short"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLICHOLIDAYCODETEXT

**Public Holiday Code - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` | ✓ | |  | `ftgid` | `CHAR(3)` | Public holiday key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PublicHolidayName` |  | |  | `ltext` | `CHAR(30)` | Long text |
| `PublicHolidayShortName` |  | |  | `ktext` | `CHAR(10)` | Public holidays, short text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBHOLIDAYCODET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holiday Code - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:#CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.representativeKey: 'PublicHolidayCode'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_PublicHolidayCodeText as select from tholt  
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
 //THOLT
 key ftgid as PublicHolidayCode,
   @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
 key spras as Language,
  @Semantics.text: true
 ltext as PublicHolidayName,
  @Semantics.text: true
 ktext as PublicHolidayShortName,
  // Associations
      _Language
 }
```
