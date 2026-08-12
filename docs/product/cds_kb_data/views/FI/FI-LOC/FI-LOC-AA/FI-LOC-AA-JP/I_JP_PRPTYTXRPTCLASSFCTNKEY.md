---
name: I_JP_PRPTYTXRPTCLASSFCTNKEY
description: "This CDS view retrieves the property classification code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-AA-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCLASSFCTNKEY')/$value
semantic_en: "This CDS view retrieves the property classification code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JP Property Tax Report Classfctn Key — CDS view giao diện dựa trên glofaac_jpclk."
keywords:
  - "property"
  - "tax"
  - "report"
  - "classfctn"
  - "key"
  - "prpty"
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
# I_JP_PRPTYTXRPTCLASSFCTNKEY

**This CDS view retrieves the property classification code for Japan Property Tax Report. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCLASSFCTNKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JP_PrptyTxRptClassfctnKey` | ✓ | |  | `classification_key` | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_JP_PrptyTxRptClassfctnKeyT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCLASSFCTNKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_PRPTYTXRPTCLASSFCTNKEY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IJPPROPTAXCLK'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled}
@EndUserText.label: 'JP Property Tax Report Classfctn Key'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'JP_PrptyTxRptClassfctnKey',
                resultSet.sizeCategory:#XS,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'JP_PrptyTxRptClassificationKey'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_JP_PrptyTxRptClassfctnKey
  as select from glofaac_jpclk
  association [0..*] to I_JP_PrptyTxRptClassfctnKeyT as _Text on $projection.JP_PrptyTxRptClassfctnKey = _Text.JP_PrptyTxRptClassfctnKey
{
      @ObjectModel.text.association: '_Text'
  key glofaac_jpclk.classification_key           as JP_PrptyTxRptClassfctnKey,

      _Text

}
```
