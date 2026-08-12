---
name: I_JP_PRPTYTXRPTCITYT
description: "This CDS view retrieves the city code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-AA-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCITYT')/$value
semantic_en: "This CDS view retrieves the city code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JP Property Tax Report City Code - Text — CDS view giao diện dựa trên glofaac_jpcity_t."
keywords:
  - "property"
  - "tax"
  - "report"
  - "city"
  - "code"
  - "text"
  - "prpty"
  - "language"
  - "desc"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-AA-JP
  - FI-LOC
  - FI-LOC-AA
  - FI-LOC-AA-JP
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:purchaseorder
---
# I_JP_PRPTYTXRPTCITYT

**This CDS view retrieves the city code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCITYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JP_PrptyTxRptCity` | ✓ | |  | `city_code` | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `JP_PrptyTxRptCityDesc` |  | |  | `text` | `CHAR(50)` | City Code description of Japan Property Tax Report |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCITYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCITYT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IJPPROPTAXCITYT'
@EndUserText.label: 'JP Property Tax Report City Code - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'JP_PrptyTxRptCity',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_JP_PrptyTxRptCityT
  as select from glofaac_jpcity_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: 'JP_PrptyTxRptCityDesc'
  key glofaac_jpcity_t.city_code                    as JP_PrptyTxRptCity,
      @Semantics.language
  key glofaac_jpcity_t.language                     as Language,
      @Semantics.text: true
      glofaac_jpcity_t.text                         as JP_PrptyTxRptCityDesc,
      _Language

}
```
