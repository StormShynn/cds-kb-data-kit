---
name: I_SECURITIESACCOUNTASSETTYPE
description: "Securities Account Asset Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTASSETTYPE')/$value
semantic_en: "Securities Account Asset Type"
semantic_vi: "Securities Account Asset Type — CDS view giao diện dựa trên tcms_sec_ast."
keywords:
  - "securities"
  - "account"
  - "asset"
  - "type"
  - "collateral"
  - "process"
  - "control"
tags:
  - FS
  - account
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SECURITIESACCOUNTASSETTYPE

**Securities Account Asset Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTASSETTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountAssetType` | ✓ | |  | `ast_typ` | `CHAR(6)` | Asset Type |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTASSETTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTASSETTYPE')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ISECACCASTTYPE',
compiler.compareFilter: true,
preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'SecuritiesAccountAssetType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Securities Account Asset Type'
define view I_SecuritiesAccountAssetType
  as select from tcms_sec_ast
{
  key ast_typ  as SecuritiesAccountAssetType,
      proc_cky as CollateralProcessControlKey
}
```
