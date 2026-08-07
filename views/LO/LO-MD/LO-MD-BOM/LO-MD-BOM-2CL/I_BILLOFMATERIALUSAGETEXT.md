---
name: I_BILLOFMATERIALUSAGETEXT
description: Bill of MaterialUSAGETEXT
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - material
  - bill-of-material
  - text
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALUSAGETEXT

**Bill of MaterialUSAGETEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfMaterialVariantUsage` | ✓ | |  | `stlan` |  |  |
| `BillOfMaterialVariantUsageDesc` |  | |  | `antxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill of Material Usage - Text'
@ObjectModel.dataCategory:#TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@Analytics.technicalName: 'IBOMUSAGETEXT'
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #CUSTOMIZING}
@ObjectModel.representativeKey: 'BillOfMaterialVariantUsage'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillOfMaterialUsageText
  as select from t416t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      _Language,

  key stlan as BillOfMaterialVariantUsage,
      @EndUserText.label: 'Usage Text'
      @Semantics.text: true
      antxt as BillOfMaterialVariantUsageDesc

}
```
