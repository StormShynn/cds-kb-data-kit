---
name: I_COLLATERALRBLORGUNIT
description: "Receivable Organization Unit"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNIT')/$value
semantic_en: "Receivable Organization Unit"
semantic_vi: "Receivable Organization Unit — CDS view giao diện dựa trên tcms_rbl_org."
keywords:
  - "receivable"
  - "organization"
  - "unit"
  - "collateral"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALRBLORGUNIT

**Receivable Organization Unit**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblOrganizationUnit` | ✓ | |  | `rbl_org_unit` | `CHAR(10)` | Organization Unit for a Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralRblOrgUnitText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNIT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLRBLORGUNT',
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
    representativeKey: 'CollateralRblOrganizationUnit'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Organization Unit'
define view I_CollateralRblOrgUnit
  as select from tcms_rbl_org
  association [0..*] to I_CollateralRblOrgUnitText as _Text on $projection.CollateralRblOrganizationUnit = _Text.CollateralRblOrganizationUnit
{
      @ObjectModel.text.association: '_Text'
  key rbl_org_unit as CollateralRblOrganizationUnit,

      _Text
}
```
