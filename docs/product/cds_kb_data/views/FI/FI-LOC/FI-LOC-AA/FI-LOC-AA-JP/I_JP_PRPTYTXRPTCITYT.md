---
name: I_JP_PRPTYTXRPTCITYT
description: "This CDS view retrieves the city code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-AA-JP
software_component: SAPSCORE
release_state: released
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
