---
name: I_EHSINDICATORTEXT
description: "This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATORTEXT')/$value
semantic_en: "This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Indicator - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "indicator"
  - "text"
  - "language"
  - "value"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
---
# I_EHSINDICATORTEXT

**This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATORTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IndicatorValue` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as xfeld )` | `CHAR(1)` | Checkbox |
| `IndicatorText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Indicator` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Indicator` | `I_EHSIndicator` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATORTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATORTEXT')/$value)*

```abap
@VDM.viewType:  #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Indicator - Text'
@ObjectModel.representativeKey: 'IndicatorValue'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled:true
@ObjectModel.dataCategory:#TEXT
define view entity I_EHSIndicatorText
  as select from dd07t
  association [0..1] to I_EHSIndicator as _Indicator on $projection.IndicatorValue = _Indicator.IndicatorValue
  association [0..1] to I_Language     as _Language  on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                      as Language,
  key cast ( substring( domvalue_l, 1, 1 ) as xfeld ) as IndicatorValue,
      @Semantics.text: true
      dd07t.ddtext                                    as IndicatorText,
      _Indicator,
      _Language

}
where
      dd07t.domname  = 'XFELD'
  and dd07t.as4local = 'A'
```
