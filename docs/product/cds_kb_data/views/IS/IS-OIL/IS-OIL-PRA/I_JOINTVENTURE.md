---
name: I_JOINTVENTURE
description: "Master Data for Joint Venture"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value
semantic_en: "Master Data for Joint Venture"
semantic_vi: "Master Data for Joint Venture — CDS view giao diện dựa trên t8jv."
keywords:
  - "master"
  - "data"
  - "for"
  - "joint"
  - "venture"
  - "company"
  - "code"
  - "type"
  - "operator"
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
---
# I_JOINTVENTURE

**Master Data for Joint Venture**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureType` |  | |  | `vtype` | `CHAR(1)` | Venture Type |
| `Operator` |  | |  | `operator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `TaxCode` |  | |  | `cast ( taxcode as fis_mwskz )` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JointVentureClass` |  | |  | `vclass` | `CHAR(2)` | Venture Class |
| `JntVentureOperatingAgmt` |  | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_JointVentureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value)*

```abap
@EndUserText.label: 'Master Data for Joint Venture'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVJOINTVENTURE'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JointVenture'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'JointVenture'
define view I_JointVenture
  as select from t8jv
  association [0..1] to I_CompanyCode      as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JointVentureText as _Text        on  $projection.CompanyCode  = _Text.CompanyCode
                                                           and $projection.JointVenture = _Text.JointVenture
// core team needs to build/associate JOA view, then expose ACLASS to use in DCL
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs preserving type )     as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key vname                          as JointVenture,
      vtype                          as JointVentureType,
      operator                       as Operator,
      cast ( taxcode as fis_mwskz )  as TaxCode,
      vclass                         as JointVentureClass,
      joa                            as JntVentureOperatingAgmt,
      //      fundgroup as JntVentureFundingGroup,
      _Text,
      _CompanyCode

};
```
