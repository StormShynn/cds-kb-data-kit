---
name: I_PUBSECGTEEMGRANTCUBE
description: "Grant - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value
semantic_en: "Grant - Cube"
semantic_vi: "Grant - Cube — CDS view giao diện (master data) dựa trên I_Grant."
keywords:
  - "grant"
  - "cube"
  - "navigation"
  - "identifier"
  - "validity"
  - "start"
  - "date"
  - "grantee"
  - "mgmt"
  - "sponsor"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_PUBSECGTEEMGRANTCUBE

**Grant - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `NavigationGrantIdentifier` |  | |  | `GrantID` | `CHAR(20)` | Grant |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GranteeMgmtWorkflowStatus` |  | |  |  | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` |  | |  | `case when GrantBlockedByWorkflow = 'X' then cast ( '1' as gm_workflow_block ) else GrantBlockedByWorkflow end` | `CHAR(1)` | GM Blocks grant editing pending approval |
| `BusPartEmplrIndstryCode` |  | |  | `IndustrySector` | `CHAR(10)` | Industry |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  | `1` | `INT1(3)` |  |
| `PendingDaysToValdtyEnd` |  | |  | `dats_days_between(cast( $session.system_date as abap.dats ), ValidityEndDate)` | `INT4(10)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `_Status` |  | |  | `_GrantStatus` |  |  |
| `_BPEmploymentIndustry` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_NavGrantText` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPEmploymentIndustry` | `I_BPEmploymentIndustry` | [0..1] |
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_NavGrantText` | `I_GrantText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRNTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant - Cube'


@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #D,
         sizeCategory: #L
     },
     modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}

define view I_PubSecGteeMGrantCube 
  as select from I_Grant as Grant 
  association [0..1] to I_BPEmploymentIndustry as _BPEmploymentIndustry on $projection.BusPartEmplrIndstryCode = _BPEmploymentIndustry.BusPartEmplrIndstryCode
  association [0..1] to I_GrantStatus          as _GrantStatus          on $projection.GrantLifecycleStatus = _GrantStatus.SystemStatus
    association [0..*] to I_GrantText                  as _NavGrantText                    on  $projection.NavigationGrantIdentifier = _NavGrantText.GrantID
  
//  association [0..1] to I_PubSecCtryRegGeoPoint as _CountryRegionGeoPoint                 on  $projection.CountryRegion  = _CountryRegionGeoPoint.CountryRegion    
{
      @ObjectModel.text.association: '_Text'
  key GrantID,
     @ObjectModel.text.association: '_NavGrantText'
      GrantID as NavigationGrantIdentifier,
      ValidityStartDate, 
      ValidityEndDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      GranteeMgmtSponsor,
      GrantAuthznGrp,
      GrantLfcycStatusForAuthzn,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
      GrantType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantStatus'
      GrantLifecycleStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Status'
      GrantStatus,
      GranteeMgmtWorkflowStatus,
      case when GrantBlockedByWorkflow = 'X' then
                cast ( '1' as gm_workflow_block ) else GrantBlockedByWorkflow end as GrantBlockedByWorkflow,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BPEmploymentIndustry'
      Grant._Sponsor._BusinessPartnerIndustry.IndustrySector as BusPartEmplrIndstryCode,
      GrantIsNotRelevantGrant,
      @DefaultAggregation: #SUM
      1                                                      as NumberOfGteeMMasterDataRecords,
      @DefaultAggregation: #SUM
      dats_days_between(cast( $session.system_date as abap.dats ), ValidityEndDate) as PendingDaysToValdtyEnd,
//      @ObjectModel.foreignKey.association: '_CountryRegionGeoPoint'
//      concat( _Sponsor._CurrentDefaultAddress._Address.Country,_Sponsor._CurrentDefaultAddress._Address.Region ) as CountryRegion,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      Grant._GrantStatus as _Status,
      _GrantType,
      _Sponsor,
      _CompanyCode,
      _Text,
      _BPEmploymentIndustry,
      _GrantStatus,
      _NavGrantText
//      ,
//      _CountryRegionGeoPoint
}
where
  GrantIsNotRelevantGrant <> 'X'
```
