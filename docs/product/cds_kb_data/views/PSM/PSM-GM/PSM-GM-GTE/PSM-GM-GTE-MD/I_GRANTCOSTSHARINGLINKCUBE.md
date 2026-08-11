---
name: I_GRANTCOSTSHARINGLINKCUBE
description: "Grant Cost Sharing Link - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value
semantic_en: "Grant Cost Sharing Link - Cube"
semantic_vi: "Grant Cost Sharing Link - Cube — CDS view giao diện dựa trên I_GrantCostSharingLink."
keywords:
  - "grant"
  - "cost"
  - "sharing"
  - "link"
  - "cube"
  - "financial"
  - "management"
  - "area"
  - "fund"
  - "gtee"
  - "source"
  - "sponsored"
  - "program"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTCOSTSHARINGLINKCUBE

**Grant Cost Sharing Link - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | | `_GrantCostSharingLink` | `GrantID` | `CHAR(20)` | Grant |
| `FinancialManagementArea` | ✓ | | `_GrantCostSharingLink` | `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | ✓ | | `_GrantCostSharingLink` | `Fund` | `CHAR(10)` | Fund |
| `GteeMCostSharingSource` | ✓ | | `_GrantCostSharingLink` | `GteeMCostSharingSource` | `CHAR(1)` | Cost Sharing Source |
| `SponsoredProgram` | ✓ | | `_GrantCostSharingLink` | `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | | `_GrantCostSharingLink` | `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `AvgGteeMCostSharingRateInPct` |  | | `_GrantCostSharingLink` | `GteeMCostSharingRateInPercent` | `DEC(6)` | Cost Sharing Percentage |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `_Grant` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICOSTSHRCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Cost Sharing Link - Cube'


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



define view  I_GrantCostSharingLinkCube  as select from I_GrantCostSharingLink         as _GrantCostSharingLink 
  association [1..1] to I_Grant                        as _Grant                on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_SponsoredClassCore           as _SponsoredClass             on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore         as _SponsoredProgram           on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram

{
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_Grant'
key _GrantCostSharingLink.GrantID,
key _GrantCostSharingLink.FinancialManagementArea,
key _GrantCostSharingLink.Fund,
key _GrantCostSharingLink.GteeMCostSharingSource,
key _GrantCostSharingLink.SponsoredProgram,
key _GrantCostSharingLink.SponsoredClass,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
       _Grant.GranteeMgmtSponsor,
        @DefaultAggregation: #SUM
       _GrantCostSharingLink.GteeMCostSharingRateInPercent as AvgGteeMCostSharingRateInPct,
       @EndUserText.label: 'Number of Records' 
         @DefaultAggregation: #SUM
1 as NumberOfGteeMMasterDataRecords,
_Grant.GrantIsNotRelevantGrant,
_Grant.GrantAuthznGrp,
_Grant.GrantLifecycleStatus,  
_Grant,
_Fund,
_SponsoredClass,
_SponsoredProgram,
_Grant._Sponsor

}
```
