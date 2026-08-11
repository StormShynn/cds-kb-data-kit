---
name: I_COLLATERALRBLORGUNITTEXT
description: "Receivable Organization Unit - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNITTEXT')/$value
semantic_en: "Receivable Organization Unit - Text"
semantic_vi: "Receivable Organization Unit - Text — CDS view giao diện dựa trên tcms_rbl_org_t."
keywords:
  - "receivable"
  - "organization"
  - "unit"
  - "text"
  - "collateral"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALRBLORGUNITTEXT

**Receivable Organization Unit - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblOrganizationUnit` | ✓ | |  | `rbl_org_unit` | `CHAR(10)` | Organization Unit for a Receivable |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralRblOrgUnitText` |  | |  | `name` | `CHAR(40)` | Name Receivable OrgUnit |
| `_Language` | | ✓ | | | | |
| `_CollateralRblOrganizationUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralRblOrganizationUnit` | `I_CollateralRblOrgUnit` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNITTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLORGUNITTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLRBLORGUNTTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralRblOrganizationUnit'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Organization Unit - Text'
define view I_CollateralRblOrgUnitText
  as select from tcms_rbl_org_t
  association [0..1] to I_Language             as _Language                      on $projection.Language = _Language.Language
  association [0..1] to I_CollateralRblOrgUnit as _CollateralRblOrganizationUnit on $projection.CollateralRblOrganizationUnit = _CollateralRblOrganizationUnit.CollateralRblOrganizationUnit
{
      @ObjectModel.foreignKey.association: '_CollateralRblOrganizationUnit'
  key rbl_org_unit as CollateralRblOrganizationUnit,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as CollateralRblOrgUnitText,

      _Language,
      _CollateralRblOrganizationUnit
}
```
