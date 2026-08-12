---
name: I_EHSINDICATOR
description: "This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATOR')/$value
semantic_en: "This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Indicator — CDS view giao diện dựa trên dd07l."
keywords:
  - "indicator"
  - "value"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
---
# I_EHSINDICATOR

**This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndicatorValue` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as xfeld )` | `CHAR(1)` | Checkbox |
| `_IndicatorText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IndicatorText` | `I_EHSIndicatorText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINDICATOR')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Indicator'
@VDM.viewType:  #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@ObjectModel.representativeKey: 'IndicatorValue'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics : {dataCategory: #DIMENSION}
@Analytics.internalName:#LOCAL
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'IndicatorValue'
//Commented by VDM CDS Suite Plugin:
define view entity I_EHSIndicator
  as select from dd07l
  association [0..*] to I_EHSIndicatorText as _IndicatorText on $projection.IndicatorValue = _IndicatorText.IndicatorValue
{
      @ObjectModel.text.association: '_IndicatorText'
  key cast ( substring( domvalue_l, 1, 1 ) as xfeld ) as IndicatorValue,
      _IndicatorText
}
where
      dd07l.domname  = 'XFELD'
  and dd07l.as4local = 'A'
```
