---
name: I_COSTCENTERINCOMPANYCODE
description: "Cost CenterINCompany Code"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - company-code
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
  - bo:CompanyCode
---
# I_COSTCENTERINCOMPANYCODE

**Cost CenterINCompany Code**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `CostCenter` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `CostCenterOID` |  | |  | `cast( case length( I_CostCenter.CompanyCode ) when 1 then concat( I_SAPClient.LogicalSystem , concat(':', concat( concat_with_space(I_CostCenter.CompanyCode, ':', 3 ) , I_CostCenter.CostCenter ) ) ) when 2 then concat( I_SAPClient.LogicalSystem , concat(':', concat( concat_with_space(I_CostCenter.CompanyCode, ':', 2 ) , I_CostCenter.CostCenter ) ) ) when 3 then concat( I_SAPClient.LogicalSystem , concat(':', concat( concat_with_space(I_CostCenter.CompanyCode, ':', 1 ) , I_CostCenter.CostCenter ) ) ) when 4 then concat( I_SAPClient.LogicalSystem , concat(':', concat( concat(I_CostCenter.CompanyCode, ':' ) , I_CostCenter.CostCenter ) ) ) end as fis_costcenter_oid )` |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `IsBlkdForPrimaryCostsPosting` |  | |  |  |  |  |
| `IsBlockedForPlanPrimaryCosts` |  | |  |  |  |  |
| `CostCenterCategory` |  | |  |  |  |  |
| `CostCtrResponsibleUser` |  | |  |  |  |  |
| `CostCenterCreationDate` |  | |  |  |  |  |
| `CostCenterCreatedByUser` |  | |  |  |  |  |
| `IsBlkdForSecondaryCostsPosting` |  | |  |  |  |  |
| `IsBlockedForRevenuePosting` |  | |  |  |  |  |
| `IsBlockedForCommitmentPosting` |  | |  |  |  |  |
| `IsBlockedForPlanSecondaryCosts` |  | |  |  |  |  |
| `IsBlockedForPlanRevenues` |  | |  |  |  |  |

## Source Code

```abap
//@Analytics:{
//    dataCategory: #DIMENSION,
//    dataExtraction: {
//        enabled: true,
//        alternativeKey: ['ControllingArea','CostCenter','ValidityEndDate'],
//        delta.changeDataCapture: {
//          mapping: [ {
//                table: 'CSKS',
//                role: #MAIN,
//                tableElement: ['kokrs','kostl','datbi'],
//                viewElement: ['ControllingArea','CostCenter','ValidityEndDate']
//              }]
//        }
//    }
//}
@Analytics:{ dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL

@ObjectModel.representativeKey: 'CostCenter'
@ObjectModel.sapObjectNodeType.name: 'CostCenter'

@AccessControl.authorizationCheck: #MANDATORY
//@AccessControl.personalData.blocking: #REQUIRED -> Not needed for user in ADRP because no XBLCK field like in BUT000 or KNA1/LFA1
@AccessControl.privilegedAssociations: [ '_UserRespContactCard', '_UserCrtedContactCard' ]

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Center In Company Code'
@VDM.viewType: #BASIC

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #L
}

@Search.searchable: true
@Consumption.ranked: true
@Consumption.filter.businessDate.at: true
define view entity I_CostCenterInCompanyCode
  as select from           I_CostCenter
    left outer to one join I_SAPClient on I_SAPClient.LogicalSystem != ''
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_CostCenter.CompanyCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      //      @ObjectModel.text.association: '_Text'
      //      @ObjectModel.hierarchy.association: '_CostCenterHierarchyNode'
  key I_CostCenter.CostCenter,
      @Semantics.businessDate.to: true
  key I_CostCenter.ValidityEndDate,
      @Semantics.businessDate.from: true
      I_CostCenter.ValidityStartDate,

@ObjectModel.filter.enabled: false
@ObjectModel.sort.enabled: false
      //      cast(concat(concat( concat(concat(I_SAPClient.LogicalSystem, ':' ), CompanyCode ), ':' ), CostCenter ) as char_132 ) as CostCenterOID, //Cost Center Global ID  =  CostCenterOID
      cast(
      case length( I_CostCenter.CompanyCode )
      when 1 then   concat( I_SAPClient.LogicalSystem ,
              concat(':',
                     concat( concat_with_space(I_CostCenter.CompanyCode, ':', 3 ) ,  I_CostCenter.CostCenter ) ) )
      when 2 then   concat( I_SAPClient.LogicalSystem ,
              concat(':',
                     concat( concat_with_space(I_CostCenter.CompanyCode, ':', 2 ) ,  I_CostCenter.CostCenter ) ) )
      when 3 then   concat( I_SAPClient.LogicalSystem ,
              concat(':',
                     concat( concat_with_space(I_CostCenter.CompanyCode, ':', 1 ) ,  I_CostCenter.CostCenter ) ) )
      when 4 then   concat( I_SAPClient.LogicalSystem ,
              concat(':',
                     concat( concat(I_CostCenter.CompanyCode, ':' ) ,  I_CostCenter.CostCenter ) ) )
      end as fis_costcenter_oid ) as CostCenterOID,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_CostCenter.ControllingArea,
      //      csks_map.dispname   as Dispname,
      //      csks_map.deleted    as Deleted,
      //      csks_map.version_id as VersionId,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlkdForPrimaryCostsPosting,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlockedForPlanPrimaryCosts,
      @ObjectModel.foreignKey.association: '_CostCenterCategory'
      I_CostCenter.CostCenterCategory,
      @ObjectModel.foreignKey.association: '_UserRespContactCard'
      I_CostCenter.CostCtrResponsibleUser,
      I_CostCenter.CostCenterCreationDate,
      @ObjectModel.foreignKey.association: '_UserCrtedContactCard'
      I_CostCenter.CostCenterCreatedByUser,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlkdForSecondaryCostsPosting,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlockedForRevenuePosting,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlockedForCommitmentPosting,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlockedForPlanSecondaryCosts,
      @Semantics.booleanIndicator: true
      I_CostCenter.IsBlockedForPlanRevenues,

      /* Associations */
      I_CostCenter._CompanyCode,
      I_CostCenter._ControllingArea,
      I_CostCenter._CostCenterCategory,
      //      I_CostCenter._CostCenterHierarchyNode,
      //      I_CostCenter._Text,
      I_CostCenter._UserCrtedContactCard,
      I_CostCenter._UserRespContactCard
}
```
