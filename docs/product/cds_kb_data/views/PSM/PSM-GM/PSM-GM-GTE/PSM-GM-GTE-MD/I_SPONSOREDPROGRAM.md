---
name: I_SPONSOREDPROGRAM
description: "Sponsored Program"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value
semantic_en: "Sponsored Program"
semantic_vi: "Sponsored Program — CDS view giao diện dựa trên gmspprogram."
keywords:
  - "sponsored"
  - "program"
  - "gtee"
  - "bdgt"
  - "transf"
  - "vldtd"
  - "post"
  - "grantee"
  - "mgmt"
  - "legislative"
  - "district"
  - "authzn"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDPROGRAM

**Sponsored Program**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` | ✓ | |  | `sponsored_prog` | `CHAR(20)` | Sponsored Program |
| `GteeMBdgtTransfObjIsVldtd` |  | |  | `validate_fmbt` | `CHAR(1)` | Indicator:  Validate Budget Transfer Object |
| `GteeMBdgtAndPostObjIsVldtd` |  | |  | `validate_fmba` | `CHAR(1)` | Indicator:  Validate Allowed Budget and Posting objects |
| `GranteeMgmtLegislativeDistrict` |  | |  | `ld_code` | `CHAR(6)` | Legislative District Code |
| `SponsoredProgramAuthznGrp` |  | |  | `auth_group` | `CHAR(10)` | Grants Management: Authorization Groups |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Record Created by |
| `CreationDate` |  | |  | `created_on` | `DATS(8)` | Created on |
| `LastChangedByUser` |  | |  | `modified_by` | `CHAR(12)` | Last Modified by |
| `LastChangeDate` |  | |  | `modified_on` | `DATS(8)` | Date last modified |
| `_LegislativeDistrict` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegislativeDistrict` | `I_GteeMLegislativeDistrict` | [0..1] |
| `_Text` | `I_SponsoredProgramText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value)*

```abap
//Do not use it and use the I_SponsoredProgramCore
@EndUserText.label: 'Sponsored Program'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SponsoredProgram'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #L
}
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IGMSPPROGRAMSQL'
@AbapCatalog.preserveKey:true 
@ObjectModel.sapObjectNodeType.name: 'SponsoredProgram'
define view I_SponsoredProgram
  as select from gmspprogram
  association [0..1] to I_GteeMLegislativeDistrict as _LegislativeDistrict on $projection.GranteeMgmtLegislativeDistrict = _LegislativeDistrict.GranteeMgmtLegislativeDistrict
  association [0..*] to I_SponsoredProgramText     as _Text                on $projection.SponsoredProgram = _Text.SponsoredProgram
{

      @ObjectModel.text.association: '_Text'
  key sponsored_prog as SponsoredProgram,
      validate_fmbt  as GteeMBdgtTransfObjIsVldtd,
      validate_fmba  as GteeMBdgtAndPostObjIsVldtd,
      @ObjectModel.foreignKey.association: '_LegislativeDistrict'
      ld_code        as GranteeMgmtLegislativeDistrict,
      auth_group     as SponsoredProgramAuthznGrp,
      created_by     as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      created_on     as CreationDate,
      modified_by    as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      modified_on    as LastChangeDate,

      _LegislativeDistrict,
      _Text

}
```
