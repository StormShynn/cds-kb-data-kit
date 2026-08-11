---
name: I_PRATAXTEXASCOUNTY
description: "PRA Tax Texas County"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTEXASCOUNTY')/$value
semantic_en: "PRA Tax Texas County"
semantic_vi: "PRA Tax Texas County — CDS view giao diện dựa trên oiux3_tx_cntxrf."
keywords:
  - "pra"
  - "tax"
  - "texas"
  - "county"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXTEXASCOUNTY

**PRA Tax Texas County**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTEXASCOUNTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TexasCounty` | ✓ | |  | `county` | `NUMC(3)` | Texas County Identifier |
| `TexasCountyName` |  | |  | `county_name` | `CHAR(30)` | Texas County Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTEXASCOUNTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTEXASCOUNTY')/$value)*

```abap
@EndUserText.label: 'PRA Tax Texas County'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXCOUNTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TexasCounty'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxCounty'

// note that actual db table has key that includes sec geo
// however this is not correct, so projecting assuming unique county number

define view I_PRATaxTexasCounty
  as select from oiux3_tx_cntxrf
{
      @ObjectModel.text.element:  [ 'TexasCountyName' ]
  key county                                        as TexasCounty,
      @Semantics.text: true
      county_name                                   as TexasCountyName
};
```
