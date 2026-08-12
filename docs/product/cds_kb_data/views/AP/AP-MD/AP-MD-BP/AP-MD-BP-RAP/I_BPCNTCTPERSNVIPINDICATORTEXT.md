---
name: I_BPCNTCTPERSNVIPINDICATORTEXT
description: "Text for Contact Person VIP Indicator"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCNTCTPERSNVIPINDICATORTEXT')/$value
semantic_en: "Text for Contact Person VIP Indicator"
semantic_vi: "Text for Contact Person VIP Indicator — CDS view giao diện dựa trên tb917."
keywords:
  - "text"
  - "for"
  - "contact"
  - "person"
  - "vip"
  - "indicator"
  - "type"
  - "language"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - bo:businesspartner
  - component:AP-MD-BP-RAP
  - interface-view
---
# I_BPCNTCTPERSNVIPINDICATORTEXT

**Text for Contact Person VIP Indicator**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCNTCTPERSNVIPINDICATORTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPersonVIPType` | ✓ | |  | `pavip` | `CHAR(1)` | VIP Partner |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BPContactPersonVIPText` |  | |  | `bez20` | `CHAR(20)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCNTCTPERSNVIPINDICATORTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCNTCTPERSNVIPINDICATORTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPCPVIPTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Text for Contact Person VIP Indicator'
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ,
                                #LANGUAGE_DEPENDENT_TEXT]    
@ObjectModel.sapObjectNodeType.name:'BPContactPersonVIPType'                                                               
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'ContactPersonVIPType'
@Search.searchable: true
@VDM.viewType: #BASIC
define view I_BPCntctPersnVIPIndicatorText as select from tb917
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key tb917.pavip as ContactPersonVIPType,
      @Semantics.language: true
  key tb917.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      tb917.bez20 as BPContactPersonVIPText, 
      _Language
}
```
