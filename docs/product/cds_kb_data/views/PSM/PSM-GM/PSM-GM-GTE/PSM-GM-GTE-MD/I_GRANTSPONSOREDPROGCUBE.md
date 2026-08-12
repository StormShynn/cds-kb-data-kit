---
name: I_GRANTSPONSOREDPROGCUBE
description: "Grant and Sponsored Program - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value
semantic_en: "Grant and Sponsored Program - Cube"
semantic_vi: "Grant and Sponsored Program - Cube — CDS view giao diện (master data) dựa trên I_GrantSponsoredProgramsLink."
keywords:
  - "grant"
  - "and"
  - "sponsored"
  - "program"
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
# I_GRANTSPONSOREDPROGCUBE

**Grant and Sponsored Program - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantCurrency` |  | | `_Grant` | `GrantCurrency` | `CUKY(5)` | Grant currency |
| `GrantTotalAmountInGrantCrcy` |  | | `_Grant` | `GrantTotalAmountInGrantCrcy` | `CURR(13)` | Total Grant Value in Sponsor Currency |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `_Grant` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_SponsoredProgramText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRANTSPLINKCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant and Sponsored Program - Cube'


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

define view I_GrantSponsoredProgCube as select from I_GrantSponsoredProgramsLink
 
  {
  @ObjectModel.foreignKey.association: '_Grant'
  key GrantID,
  @Analytics.internalName: #LOCAL 
  @ObjectModel.foreignKey.association: '_SponsoredProgram'
  key SponsoredProgram,
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
  _SponsoredProgram,
  _SponsoredProgramText
}
```
