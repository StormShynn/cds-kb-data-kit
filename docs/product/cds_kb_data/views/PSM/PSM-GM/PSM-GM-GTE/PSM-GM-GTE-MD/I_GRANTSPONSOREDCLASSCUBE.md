---
name: I_GRANTSPONSOREDCLASSCUBE
description: "Grant and Sponsored Class - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDCLASSCUBE')/$value
semantic_en: "Grant and Sponsored Class - Cube"
semantic_vi: "Grant and Sponsored Class - Cube — CDS view giao diện (master data) dựa trên I_GrantSponsoredClassesLink."
keywords:
  - "grant"
  - "and"
  - "sponsored"
  - "class"
  - "cube"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "currency"
  - "total"
  - "amount"
  - "crcy"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTSPONSOREDCLASSCUBE

**Grant and Sponsored Class - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDCLASSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantCurrency` |  | | `_Grant` | `GrantCurrency` | `CUKY(5)` | Grant currency |
| `GrantTotalAmountInGrantCrcy` |  | | `_Grant` | `GrantTotalAmountInGrantCrcy` | `CURR(13)` | Total Grant Value in Sponsor Currency |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `_Grant` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredClassText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDCLASSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDCLASSCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRANTSCLINKCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant and Sponsored Class - Cube'


@VDM.viewType: #COMPOSITE 
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #B,
         sizeCategory: #L
     
     },
     modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}

define view I_GrantSponsoredClassCube as select from I_GrantSponsoredClassesLink
 
  {
  @ObjectModel.foreignKey.association: '_Grant'
  key GrantID,
  @Analytics.internalName: #LOCAL 
  @ObjectModel.foreignKey.association: '_SponsoredClass'
  key SponsoredClass,
  @ObjectModel.foreignKey.association: '_Sponsor'
  _Grant.GranteeMgmtSponsor,
  @ObjectModel.foreignKey.association: '_GrantCurrency'
  @Semantics.currencyCode:true
  _Grant.GrantCurrency,
  @Semantics: { amount : {currencyCode: 'GrantCurrency'} }
  @DefaultAggregation: #SUM
  _Grant.GrantTotalAmountInGrantCrcy,
    @EndUserText.label: 'Number of Records'
      @DefaultAggregation: #SUM
1 as NumberOfGteeMMasterDataRecords,
_Grant.GrantIsNotRelevantGrant,
_Grant.GrantAuthznGrp,
_Grant.GrantLifecycleStatus, 
_Grant._Sponsor, 
  
  /* Associations */
  _Grant,
  _Grant._GrantCurrency,
  _SponsoredClass,
  _SponsoredClassText
}
```
