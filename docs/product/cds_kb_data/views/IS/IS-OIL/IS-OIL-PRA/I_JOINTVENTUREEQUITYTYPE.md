---
name: I_JOINTVENTUREEQUITYTYPE
description: "Joint Venture Equity Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPE')/$value
semantic_en: "Joint Venture Equity Type"
semantic_vi: "Joint Venture Equity Type — CDS view giao diện dựa trên t8je."
keywords:
  - "joint"
  - "venture"
  - "equity"
  - "type"
  - "company"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_JOINTVENTUREEQUITYTYPE

**Joint Venture Equity Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `JointVentureEquityType` | ✓ | |  | `etype` | `CHAR(3)` | Equity Type |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_JointVentureEquityTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPE')/$value)*

```abap
@EndUserText.label: 'Joint Venture Equity Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVJVEQUITYTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JointVentureEquityType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'JointVentureEquityType'
define view I_JointVentureEquityType
  as select from t8je
  association [0..1] to I_CompanyCode             as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JointVentureEquityTypeT as _Text        on  $projection.CompanyCode            = _Text.CompanyCode
                                                                  and $projection.JointVentureEquityType = _Text.JointVentureEquityType
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs )                as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key etype     as JointVentureEquityType,
      _CompanyCode,
      _Text
}
```
