---
name: I_COLLATERALADMINORGUNITATTRIB
description: "Collateral Administrative OrgUnit Attr"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALADMINORGUNITATTRIB')/$value
semantic_en: "Collateral Administrative OrgUnit Attr"
semantic_vi: "Collateral Administrative OrgUnit Attr — CDS view giao diện dựa trên tcms_org_proc."
keywords:
  - "collateral"
  - "administrative"
  - "orgunit"
  - "attr"
  - "admin"
  - "unit"
  - "process"
  - "control"
  - "area"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALADMINORGUNITATTRIB

**Collateral Administrative OrgUnit Attr**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALADMINORGUNITATTRIB')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAdminOrgUnit` | ✓ | |  | `adminorg` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralProcessControlArea` |  | |  | `proc_area` | `CHAR(6)` | Process Control Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALADMINORGUNITATTRIB')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALADMINORGUNITATTRIB')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ICOLADMINORGUATT',
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
    representativeKey: 'CollateralAdminOrgUnit'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Administrative OrgUnit Attr'
define view I_CollateralAdminOrgUnitAttrib
  as select from tcms_org_proc
{
  key adminorg  as CollateralAdminOrgUnit,
      proc_area as CollateralProcessControlArea
}
```
