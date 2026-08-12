---
name: I_GRANTOVERHEADCOSTLINKCUBE
description: "Grant Overhead Cost Link - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value
semantic_en: "Grant Overhead Cost Link - Cube"
semantic_vi: "Grant Overhead Cost Link - Cube — CDS view giao diện dựa trên I_GrantOverHeadCostLink."
keywords:
  - "grant"
  - "overhead"
  - "cost"
  - "link"
  - "cube"
  - "sponsored"
  - "program"
  - "class"
  - "validity"
  - "start"
  - "date"
  - "grantee"
  - "mgmt"
  - "sponsor"
tags:
  - PSM
  - bo:costcenter
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTOVERHEADCOSTLINKCUBE

**Grant Overhead Cost Link - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | | `_GrantOverHeadCostLink` | `GrantID` | `CHAR(20)` | Grant |
| `SponsoredProgram` | ✓ | | `_GrantOverHeadCostLink` | `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | | `_GrantOverHeadCostLink` | `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `ValidityStartDate` | ✓ | | `_GrantOverHeadCostLink` | `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `AvgGteeMIndirectCostRateInPct` |  | | `_GrantOverHeadCostLink` | `GteeMIndirectCostRateInPercent` | `DEC(6)` | Indirect Overhead Rate |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `_Grant` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRTIDCLNKCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Overhead Cost Link - Cube'


@VDM.viewType: #COMPOSITE 
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
          modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
define view I_GrantOverHeadCostLinkCube as select from  I_GrantOverHeadCostLink as _GrantOverHeadCostLink 
  association [1..1] to I_Grant                        as _Grant                on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_SponsoredClassCore           as _SponsoredClass             on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore         as _SponsoredProgram           on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram

{
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
key _GrantOverHeadCostLink.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
key _GrantOverHeadCostLink.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
key _GrantOverHeadCostLink.SponsoredClass,
key _GrantOverHeadCostLink.ValidityStartDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
_Grant.GranteeMgmtSponsor,
@EndUserText.label: 'Number of Records' 
  @DefaultAggregation: #SUM
1 as NumberOfGteeMMasterDataRecords,
 @DefaultAggregation: #SUM
_GrantOverHeadCostLink.GteeMIndirectCostRateInPercent as AvgGteeMIndirectCostRateInPct ,
_Grant,
_Grant._Sponsor,
_Grant.GrantIsNotRelevantGrant,
_Grant.GrantAuthznGrp,
_Grant.GrantLifecycleStatus, 
_SponsoredClass,
_SponsoredProgram
}
```
