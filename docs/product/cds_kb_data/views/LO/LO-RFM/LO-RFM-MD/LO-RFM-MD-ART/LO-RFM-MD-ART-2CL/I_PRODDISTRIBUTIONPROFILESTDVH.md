---
name: I_PRODDISTRIBUTIONPROFILESTDVH
description: "Product Distribution Profile"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODDISTRIBUTIONPROFILESTDVH')/$value
semantic_en: "Product Distribution Profile"
semantic_vi: "Product Distribution Profile — CDS view giao diện dựa trên I_ProductDistributionProfile."
keywords:
  - "product"
  - "distribution"
  - "profile"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - product
---
# I_PRODDISTRIBUTIONPROFILESTDVH

**Product Distribution Profile**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODDISTRIBUTIONPROFILESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductDistributionProfile` | ✓ | |  |  | `CHAR(3)` | Product Distribution Profile |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODDISTRIBUTIONPROFILESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODDISTRIBUTIONPROFILESTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRDDISTRPRSTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #VALUE_HELP,
    representativeKey: 'ProductDistributionProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Product Distribution Profile'
define view I_ProdDistributionProfileStdVH as select from I_ProductDistributionProfile {
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ProductDistributionProfile,
  
  _Text
  
}
```
