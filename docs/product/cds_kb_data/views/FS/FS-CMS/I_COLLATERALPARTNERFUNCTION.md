---
name: I_COLLATERALPARTNERFUNCTION
description: "Collateral Business Partner Functions"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTION')/$value
semantic_en: "Collateral Business Partner Functions"
semantic_vi: "Collateral Business Partner Functions — CDS view giao diện dựa trên tcms_bpf."
keywords:
  - "collateral"
  - "business"
  - "partner"
  - "functions"
  - "function"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_COLLATERALPARTNERFUNCTION

**Collateral Business Partner Functions**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralPartnerFunction` | ✓ | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralPartnerFunctionTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLBPFUNC',
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
    representativeKey: 'CollateralPartnerFunction'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Business Partner Functions'
define view I_CollateralPartnerFunction
  as select from tcms_bpf
  association [0..*] to I_CollateralPartnerFunctionTxt as _Text on $projection.CollateralPartnerFunction = _Text.CollateralPartnerFunction
{
      @ObjectModel.text.association: '_Text'
  key bpf as CollateralPartnerFunction,

      _Text
}
```
