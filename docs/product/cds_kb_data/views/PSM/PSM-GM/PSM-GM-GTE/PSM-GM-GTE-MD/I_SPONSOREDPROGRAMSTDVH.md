---
name: I_SPONSOREDPROGRAMSTDVH
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
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMSTDVH')/$value
semantic_en: "Sponsored Program"
semantic_vi: "Sponsored Program — CDS view giao diện dựa trên I_SponsoredProgramCore."
keywords:
  - "sponsored"
  - "program"
  - "name"
  - "description"
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
# I_SPONSOREDPROGRAMSTDVH

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredProgramName` |  | |  | `_Text[1:Language = $session.system_language].SponsoredProgramName` | `CHAR(24)` | Sponsored Program Name |
| `SponsoredProgramDescription` |  | |  | `_Text[1:Language = $session.system_language].SponsoredProgramDescription` | `CHAR(30)` | Sponsored Program Description |
| `SponsoredProgramAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISPPROG_VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Sponsored Program'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.dataCategory:#VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: #VALUE_HELP_PROVIDER
define view I_SponsoredProgramStdVH
  as select from I_SponsoredProgramCore
{

      // changes to include default search help
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
//      @ObjectModel.text.association: '_Text'
//      @ObjectModel.text.control:#ASSOCIATED_TEXT_UI_HIDDEN
      @ObjectModel.text.element: ['SponsoredProgramName']
  key SponsoredProgram,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      _Text[1:Language = $session.system_language].SponsoredProgramName        as SponsoredProgramName,
//      @EndUserText.label: 'Program Description'
      _Text[1:Language = $session.system_language].SponsoredProgramDescription as SponsoredProgramDescription,


      @Consumption.hidden: true
      SponsoredProgramAuthznGrp,

      _Text
}
```
