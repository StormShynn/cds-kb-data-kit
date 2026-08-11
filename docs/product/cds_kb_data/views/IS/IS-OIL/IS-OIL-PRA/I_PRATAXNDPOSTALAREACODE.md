---
name: I_PRATAXNDPOSTALAREACODE
description: "PRA Tax North Dakota Postal Area Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDPOSTALAREACODE')/$value
semantic_en: "PRA Tax North Dakota Postal Area Code"
semantic_vi: "PRA Tax North Dakota Postal Area Code — CDS view giao diện dựa trên PRA Tax North Dakota Postal Area Code."
keywords:
  - "pra"
  - "tax"
  - "north"
  - "dakota"
  - "postal"
  - "area"
  - "code"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXNDPOSTALAREACODE

**PRA Tax North Dakota Postal Area Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDPOSTALAREACODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NorthDakotaPostalAreaCode` | ✓ | |  | `posting_code` | `CHAR(4)` | Tax 2.0: ND Posting Code |
| `NorthDakotaPostalAreaName` |  | |  | `posting_code_des` | `CHAR(50)` | General Description - 50 Characters |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDPOSTALAREACODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDPOSTALAREACODE')/$value)*

```abap
@EndUserText.label: 'PRA Tax North Dakota Postal Area Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPOSTAREAND'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'NorthDakotaPostalAreaCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRANorthDakotaTxPostalAreaCode'

define view I_PRATaxNDPostalAreaCode
  as select from /pra/nd_post_cd
{
      @ObjectModel.text.element:  [ 'NorthDakotaPostalAreaName' ]
  key posting_code                                            as NorthDakotaPostalAreaCode,
      @Semantics.text: true
      posting_code_des                                        as NorthDakotaPostalAreaName
}
```
