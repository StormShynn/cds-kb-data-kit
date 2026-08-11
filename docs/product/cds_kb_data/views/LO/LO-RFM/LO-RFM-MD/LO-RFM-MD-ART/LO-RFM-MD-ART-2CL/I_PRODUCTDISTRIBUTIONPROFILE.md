---
name: I_PRODUCTDISTRIBUTIONPROFILE
description: "Product Distribution Profile"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILE')/$value
semantic_en: "Product Distribution Profile"
semantic_vi: "Product Distribution Profile — CDS view giao diện dựa trên tmfpf."
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
# I_PRODUCTDISTRIBUTIONPROFILE

**Product Distribution Profile**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductDistributionProfile` | ✓ | |  | `cast(fprfm as productdistributionprofile preserving type )` | `CHAR(3)` | Product Distribution Profile |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRODDISTRPROF'
@EndUserText.label: 'Product Distribution Profile'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel: {
    supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#VALUE_HELP_PROVIDER],
    compositionRoot: true,
    sapObjectNodeType.name: 'ProductDistributionProfile',
    representativeKey: 'ProductDistributionProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ProductDistributionProfile
  as select from tmfpf
  composition [0..*] of I_ProductDistributionProfileT as _Text 
{
      @ObjectModel.text.association: '_Text'
  key cast(fprfm as productdistributionprofile preserving type ) as ProductDistributionProfile,

      _Text

}
```
