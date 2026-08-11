---
name: I_COLLATERALRBLCREDITSYSTEM
description: "Receivable Credit System"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLCREDITSYSTEM')/$value
semantic_en: "Receivable Credit System"
semantic_vi: "Receivable Credit System — CDS view giao diện dựa trên tcms_rbl_crdsys."
keywords:
  - "receivable"
  - "credit"
  - "system"
  - "collateral"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALRBLCREDITSYSTEM

**Receivable Credit System**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLCREDITSYSTEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblCreditSystem` | ✓ | |  | `crdsys` | `CHAR(3)` | Credit System |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralRblCreditSystemTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLCREDITSYSTEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLCREDITSYSTEM')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLRBLCRDSYS',
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
    representativeKey: 'CollateralRblCreditSystem'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Credit System'
define view I_CollateralRblCreditSystem
  as select from tcms_rbl_crdsys
  association [0..*] to I_CollateralRblCreditSystemTxt as _Text on $projection.CollateralRblCreditSystem = _Text.CollateralRblCreditSystem
{
      @ObjectModel.text.association: '_Text'
  key crdsys as CollateralRblCreditSystem,

      _Text
}
```
