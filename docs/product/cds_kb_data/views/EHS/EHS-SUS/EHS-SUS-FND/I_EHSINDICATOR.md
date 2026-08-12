---
name: I_EHSINDICATOR
description: "This CDS view provides you with supported values for indicator fields. You can use it to validate indicator values and retrieve their text descriptions. The view contains the following indicator values and their meanings: Value Meaning X Yes (blank) No To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
