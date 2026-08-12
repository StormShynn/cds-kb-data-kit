---
name: I_WASTEMGMTMETHCODEDIMENSION
description: "Waste MgmtMethCode Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEMGMTMETHCODEDIMENSION')/$value
semantic_en: "Waste MgmtMethCode Dimension"
semantic_vi: "Waste MgmtMethCode Dimension — CDS view giao diện dựa trên I_EnvrmtWasteMgmtMethCode."
keywords:
  - "waste"
  - "mgmtmethcode"
  - "dimension"
  - "envrmt"
  - "mgmt"
  - "meth"
  - "code"
  - "text"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEMGMTMETHCODEDIMENSION

**Waste MgmtMethCode Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEMGMTMETHCODEDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteMgmtMethCode` | ✓ | |  |  | `CHAR(10)` | Waste Management Method Code |
| `EnvrmtWasteMgmtMethCodeGrp` |  | |  |  | `CHAR(10)` | Waste Management Method Group |
| `EnvrmtWasteMgmtMethCodeText` |  | | `_MgmtMethCodeText` | `EnvrmtWasteMgmtMethCodeText` | `CHAR(255)` | Description (Extra Long) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MgmtMethCodeText` | `I_EnvrmtWasteMgmtMethCodeText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEMGMTMETHCODEDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEMGMTMETHCODEDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTMMCD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EnvrmtWasteMgmtMethCode'

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste MgmtMethCode Dimension'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_WasteMgmtMethCodeDimension
  as select from I_EnvrmtWasteMgmtMethCode
  association [0..1] to I_EnvrmtWasteMgmtMethCodeText as _MgmtMethCodeText on  $projection.EnvrmtWasteMgmtMethCode    = _MgmtMethCodeText.EnvrmtWasteMgmtMethCode
                                                                           and $projection.EnvrmtWasteMgmtMethCodeGrp = _MgmtMethCodeText.EnvrmtWasteMgmtMethCodeGrp
                                                                           and _MgmtMethCodeText.Language             = $session.system_language
{
      @ObjectModel.text.element: [ 'EnvrmtWasteMgmtMethCodeText' ]
  key EnvrmtWasteMgmtMethCode,

      EnvrmtWasteMgmtMethCodeGrp,

      @Semantics.text: true
      _MgmtMethCodeText.EnvrmtWasteMgmtMethCodeText

}
```
