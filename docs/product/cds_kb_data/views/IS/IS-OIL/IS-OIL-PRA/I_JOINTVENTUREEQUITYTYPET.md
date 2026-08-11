---
name: I_JOINTVENTUREEQUITYTYPET
description: "Joint Venture Equity Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPET')/$value
semantic_en: "Joint Venture Equity Type - Text"
semantic_vi: "Joint Venture Equity Type - Text — CDS view giao diện dựa trên t8jet."
keywords:
  - "joint"
  - "venture"
  - "equity"
  - "type"
  - "text"
  - "company"
  - "code"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_JOINTVENTUREEQUITYTYPET

**Joint Venture Equity Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `JointVentureEquityType` | ✓ | |  | `etype` | `CHAR(3)` | Equity Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JointVentureEquityTypeName` |  | |  | `cast( etext as oiu_vdm_equity_type_nm )` | `CHAR(35)` | Equity Type Name |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREEQUITYTYPET')/$value)*

```abap
@EndUserText.label: 'Joint Venture Equity Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVJVEQUITYTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JointVentureEquityType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]

define view I_JointVentureEquityTypeT
  as select from t8jet
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs )                as CompanyCode,
  key etype                                    as JointVentureEquityType,
      @Semantics.language
  key spras                                    as Language,
      @Semantics.text
      cast( etext as oiu_vdm_equity_type_nm )  as JointVentureEquityTypeName,
      _CompanyCode
}
```
